import { useParams } from "react-router-dom";
import Container from "../components/layout/Container";
import { useEffect, useState } from "react";
import { getProduct, getProducts } from "../services/api";
import type { Product } from "../types/product";
import { useCartContext } from "../features/cart/context/CartContext";
import ProductSwiper from "../features/products/components/ProductSwiper";

const ProductPage = () => {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>();
  const [mainImage, setMainImage] = useState<string>();
  const [subImages, setSubImages] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null | undefined>(
    null,
  );
  const productId = parseInt(params.id as string);
  const [products, setProducts] = useState<Product[]>([]);
  const {
    cartItem,
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    getProductQty,
    handleRemoveProduct,
  } = useCartContext();

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
    getProduct(params.id as string)
      .then((data) => {
        setProduct(data);
        setMainImage(data.image1);

        setSubImages(
          [data.image2, data.image3, data.image4].filter(
            (image): image is string => Boolean(image),
          ),
        );
      })
      .catch((error) => {
        console.error("Failed to fetch product:", error);
      });
  }, [params.id]);

  const relatedProducts = products.filter(
    (item) => item.category === product?.category && item.id !== product?.id,
  );

  const handleImageChange = (selectedImage: string) => {
    if (!mainImage) return;

    setSubImages((prevImages) =>
      prevImages.map((image) => (image === selectedImage ? mainImage : image)),
    );

    setMainImage(selectedImage);
  };

  return (
    <Container>
      <div className="grid grid-cols-1 gap-6 p-4 shadow-xl md:grid-cols-2 md:gap-8 xl:grid-cols-12 xl:gap-10 xl:p-6 xl:mt-5">
        <div className="md:col-span-1 xl:col-span-5">
          <img
            className="w-full object-cover xl:h-160"
            src={mainImage}
            alt={product?.title ?? "تصویر محصول"}
          />

          <div className="mt-4 flex items-center justify-center gap-3">
            {subImages.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => handleImageChange(image)}
                className="overflow-hidden rounded border border-gray-300 hover:border-black"
              >
                <img
                  className="w-25 h-25 object-cover"
                  src={image}
                  alt={`${product?.title ?? "محصول"} - تصویر ${index + 2}`}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="md:mx-5 md:col-span-1 xl:col-span-7">
          <h1 className="text-xl mt-4 md:mt-6 lg:text-3xl lg:mt-11">
            {product?.title}
          </h1>
          <p className="my-4 md:mt-7 lg:text-xl">{product?.price} تومان</p>
          <h3 className="font-semibold">انتخاب رنگ</h3>
          <div className="flex gap-3 mb-4 mt-3">
            {product?.colors?.map((color) => (
              <button
                key={color.hex}
                type="button"
                onClick={() => {
                  if (color.hex) {
                    setSelectedColor(color.hex);
                  }
                }}
                title={color.name}
                className={`h-8 w-8 rounded-full border ${
                  selectedColor === color.hex
                    ? "border-black border-2"
                    : "border-gray-300 hover:border-black"
                }`}
                style={{ backgroundColor: color.hex }}
                aria-label={color.name}
              />
            ))}
          </div>

          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-semibold">انتخاب سایز</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`h-11 min-w-12 rounded border px-3 transition-colors ${
                    selectedSize === size
                      ? "border-black bg-black text-white"
                      : "border-gray-300 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-4 md:mt-6 lg:mt-10">{product?.size1}</p>
          <p className="mt-1 md:mt-2">{product?.size2}</p>
          <p className="mt-1 md:mt-2">{product?.size3}</p>
          <p className="mt-1 md:mt-2">{product?.size4}</p>

          <div className="mt-6">
            <h3 className="mb-3 font-semibold">تعداد</h3>

            <div className="flex w-fit items-center rounded border border-gray-300">
              <button
                onClick={() => {
                  handleDecreaseProductQty(productId);
                }}
                className="px-4 py-2"
                type="button"
              >
                -
              </button>

              <span className="px-4">{getProductQty(productId)}</span>

              <button
                onClick={() => handleIncreaseProductQty(productId)}
                className="px-4 py-2"
                type="button"
              >
                +
              </button>
            </div>
          </div>

          {cartItem.some((item) => item.id === productId) ? (
            <button
              onClick={() => {
                handleRemoveProduct(productId);
              }}
              className="bg-gray-500 text-white w-full py-2 my-7 md:my-10 lg:my-15 rounded"
            >
              حذف از سبد خرید
            </button>
          ) : (
            <button
              onClick={() => {
                handleIncreaseProductQty(productId);
              }}
              className="bg-gray-500 text-white w-full py-2 my-7 md:my-10 lg:my-15 rounded"
            >
              افزودن به سبد خرید
            </button>
          )}
        </div>
      </div>

      <ProductSwiper products={relatedProducts} />
    </Container>
  );
};

export default ProductPage;
