import { useEffect, useState } from "react";
import Container from "../../components/layout/Container";
import ProductCard from "./ProductCard";
import { getProducts } from "../../services/api";
import type { Product } from "../../types/product";
import { Link } from "react-router-dom";

interface ProductListProps {
  category: string | null;
}

const ProductList = ({ category }: ProductListProps) => {
  const [product, setProduct] = useState<Product[]>([]);
  const filteredProducts = product.filter(
    (item) => !category || item.category === category,
  );

  useEffect(() => {
    getProducts().then((data) => {
      setProduct(data);
    });
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-2 mt-7">
        {filteredProducts.map((item) => (
          <Link to={`/product/${item.id}`}>
            <ProductCard key={item.id} {...item} />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
