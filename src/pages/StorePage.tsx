import { useSearchParams } from "react-router-dom";
import ProductList from "../features/products/components/ProductList";

const StorePage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div>
      <ProductList category={category} />
    </div>
  );
};

export default StorePage;