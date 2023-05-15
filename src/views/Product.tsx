import { getProducts } from "../services/product/product";
import { Product } from "../services/product/product.interface";

export default function ProductView() {
  const { products, isError, isLoading } = getProducts();

  if (isLoading) {
    return <div>Its currently loading</div>;
  }

  if (isError) {
    return <>{isError.message}</>;
  }

  return (
    <>
      {products.map((product: Product) => (
        <>{product.name}</>
      ))}
    </>
  );
}
