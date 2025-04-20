import { ProductPage } from "@components/product/product-page";

type SearchParamsType = Record<string, string | undefined>;

interface HomeProps {
  searchParams?: Promise<SearchParamsType>;
}

export default async function Home({ searchParams }: HomeProps) {
  const resolvedSearchParams = await searchParams;
  const category = resolvedSearchParams?.category ?? "";
  return <ProductPage category={category} />;
}
