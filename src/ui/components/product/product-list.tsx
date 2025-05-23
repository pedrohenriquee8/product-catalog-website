import { Product } from "@models/Product";
import { ProductCard } from "./card";
import { ProductPageProps } from "./product-page";

export async function ProductList(props: ProductPageProps) {
  const { category } = props;
  const categoryParams = category ? `?category=${category}` : "";

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const data = await fetch(`${baseUrl}/api/products${categoryParams}`, {
    cache: "force-cache",
  });
  const products = await data.json();

  if (!products || products.length === 0) {
    return <div className="text-lg mt-8">No products found!</div>;
  }

  return (
    <section className="flex flex-wrap gap-8 items-center justify-center w-full max-w-80 md:max-w-2xl lg:max-w-5xl">
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
