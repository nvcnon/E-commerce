import { useSearchParams } from "react-router-dom";
import ProductList from "../features/products/components/ProductList";

const StorePage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <section className="">
      <div className="bg-white text-gray-500 dark:bg-black dark:text-gray-100 px-2 py-7">
        <ProductList category={category} />
      </div>
    </section>
  );
};

export default StorePage;
