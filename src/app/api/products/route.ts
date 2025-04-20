import { NextRequest, NextResponse } from "next/server";
import { ProductService } from "@services/ProductService";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const category = searchParams.get("category");

    const data = await new ProductService().fetchProducts();
    const products = category
      ? data.filter((product) => product.category.toLowerCase() === category)
      : data;

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
