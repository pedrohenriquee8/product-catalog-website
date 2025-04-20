"use client";

import { useState } from "react";
import { CategoryTypes } from "core/domain/types/CategoryTypes";
import { Tab } from "@components/base/tab";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const categories = ["All", "Table", "Chair", "Lamp", "Sofa"] as const;

export function FilterCategories() {
  const [categorySelected, setCategorySelected] = useState<CategoryTypes>(
    CategoryTypes.ALL
  );

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const categoryIsSelected = (category: CategoryTypes) => {
    return categorySelected === category;
  };

  const updatePageByCategorySelected = (category: CategoryTypes) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category === CategoryTypes.ALL) {
      params.delete("category");
    } else {
      params.set("category", category.toLowerCase());
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleChangeCategorySelected = (category: CategoryTypes) => {
    if (categoryIsSelected(category)) return;
    setCategorySelected(category);
    updatePageByCategorySelected(category);
  };

  return (
    <section className="flex items-center justify-center flex-wrap gap-4">
      {categories.map((category: string) => (
        <Tab
          key={category}
          categorySelected={categoryIsSelected(category as CategoryTypes)}
          onClick={() =>
            handleChangeCategorySelected(category as CategoryTypes)
          }
        >
          {category}
        </Tab>
      ))}
    </section>
  );
}
