import { ProductPage } from "@components/product/product-page";

export interface HomeProps {
  searchParams: {
    category: string;
  };
}

export default function Home(props: HomeProps) {
  const { searchParams } = props;
  const category = searchParams?.category || "";

  return <ProductPage category={category} />;
}
