import { useEffect, useState } from "react";
import HeroBanner from "../features/home/components/HeroBanner";
import ProductSwiper from "../features/products/ProductSwiper";
import { getProducts } from "../services/api";
import type { Product } from "../types/product";
import Container from "../components/layout/Container";
import CategorySection from "../features/home/components/CategorySection";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const menProducts = products.filter((product) => product.category === "men");

  const womenProducts = products.filter(
    (product) => product.category === "women",
  );

  const kidsProducts = products.filter(
    (product) => product.category === "kids",
  );

  return (
    <div>
      <HeroBanner />
      <Container>
        <CategorySection />
        <h1 className="text-xl md:text-2xl lg:text-3xl mt-10 border-b py-4 border-green-900 shadow shadow-green-100 px-5 rounded-b-md text-green-900">
          مردانه
        </h1>
        <ProductSwiper products={menProducts} />
        <h1 className="text-xl md:text-2xl lg:text-3xl mt-10 border-b py-4 border-green-900 shadow shadow-green-100 px-5 rounded-b-md text-green-900">
          زنانه
        </h1>
        <ProductSwiper products={womenProducts} />
        <h1 className="text-xl md:text-2xl lg:text-3xl mt-10 border-b py-4 border-green-900 shadow shadow-green-100 px-5 rounded-b-md text-green-900">
          بچگانه
        </h1>
        <ProductSwiper products={kidsProducts} />
      </Container>
    </div>
  );
};

export default HomePage;
