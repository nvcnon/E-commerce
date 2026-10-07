import { Link, useSearchParams } from "react-router-dom";
import Container from "../../components/container/Container";
import ProductItem from "../../components/productItem/ProductItem";
import { useEffect, useMemo, useState } from "react";
import { getProducts } from "../../services/api";
import type { IProduct } from "../../types/server";
import Loader from "../../components/loader/Loader";

const Store = () => {
  const [state, setState] = useState<IProduct[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const selectedCategory = searchParams.get("category") || "all";
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getProducts()
      .then((result) => {
        setState(result);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const categories = useMemo(() => {
    return ["all", ...new Set(state.map((product) => product.category))];
  }, [state]);

  const filteredProducts = useMemo(() => {
    return state.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [state, selectedCategory, searchQuery]);

  const categoryLabels: Record<string, string> = {
    Tshirt: "تیشرت",
    Shoes: "کفش",
    Hat: "کلاه",
  };

  return (
    <Container>
      <div className="px-5 md:p-0">
        <h1 className="my-4 p-2 text-right text-xl font-bold sm:text-2xl">
          همه محصولات
        </h1>

        <div className="mb-8 flex flex-row-reverse flex-wrap justify-start gap-2 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                if (category === "all") {
                  setSearchParams({});
                } else {
                  setSearchParams({ category });
                }
              }}
              className={`rounded-lg px-4 py-2 text-sm transition-colors sm:px-5 sm:text-base ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category === "all" ? "همه" : categoryLabels[category]}
            </button>
          ))}
        </div>

        {isLoading ? (
          <Loader />
        ) : isError ? (
          <div className="py-20 text-center text-red-500">
            دریافت محصولات با خطا مواجه شد.
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="py-20 text-center text-gray-500">
            محصولی در این دسته‌بندی وجود ندارد.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="min-w-0"
              >
                <ProductItem {...item} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Store;