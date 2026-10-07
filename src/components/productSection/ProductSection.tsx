import type { IProduct } from "../../types/server";

interface ProductSectionProps {
  title: string;
  products: IProduct[];
}

const ProductSection = ({ title, products }: ProductSectionProps) => {
  return (
    <section>
      <h2>{title}</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.category}</p>

          <img
            src={product.image}
            alt={product.title}
            width="200"
          />
        </div>
      ))}
    </section>
  );
};

export default ProductSection;