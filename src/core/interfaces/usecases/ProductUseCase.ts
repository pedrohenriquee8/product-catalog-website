import { Product } from "@models/Product";

export interface ProductUseCase {
  fetchProducts(): Promise<Product[]>;
}
