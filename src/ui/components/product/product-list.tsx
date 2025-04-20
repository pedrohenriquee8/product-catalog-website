import { Product } from "@models/Product";
import { ProductCard } from "./card";
import { ProductPageProps } from "./product-page";

export async function ProductList(props: ProductPageProps) {
  const { category } = props;
  const categoryParams = category ? `?category=${category}` : "";

  const data = await fetch(
    `http://localhost:3000/api/products${categoryParams}`,
    {
      cache: "force-cache",
    }
  );
  const products = await data.json();

  if (!products || products.length === 0) {
    return <div className="text-lg mt-8">No products found!</div>;
  }

  return (
    <section className="flex flex-wrap gap-8 items-center justify-start w-full max-w-5xl">
      {products.map((product: Product) => {
        const { id, name, image, price } = product;

        return (
          <ProductCard.Root key={id}>
            <ProductCard.Image src={image} alt={name} />
            <ProductCard.Body>
              <ProductCard.Title text={name} />
              <ProductCard.Price price={price} />
            </ProductCard.Body>
          </ProductCard.Root>
        );
      })}
    </section>
  );
}
