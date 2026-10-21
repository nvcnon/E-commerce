import Container from "../../components/layout/Container";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-2 mt-7">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Container>
  );
};

export default ProductList;
