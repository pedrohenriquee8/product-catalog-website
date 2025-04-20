import { Suspense } from "react";
import { AboutProductPage } from "./about-product-page";
import { FilterCategories } from "./filter-categories";
import { ProductList } from "./product-list";
import { ProductPageSkeleton } from "./product-page-skeleton";

export interface ProductPageProps {
  category: string;
}

export function ProductPage(props: ProductPageProps) {
  const { category } = props;

  return (
    <div className="flex flex-col items-center justify-start min-h-svh gap-8 py-20 px-8 bg-gray-200">
      <AboutProductPage />
      <FilterCategories />
      <Suspense fallback={<ProductPageSkeleton />}>
        <ProductList category={category} />
      </Suspense>
    </div>
  );
}
