import { ProductUseCase } from "@usecases/ProductUseCase";
import { Product } from "@models/Product";
import { products } from "@infra/data/products";

export class ProductService implements ProductUseCase {
  constructor() {}

  async fetchProducts(): Promise<Product[]> {
    return products.map(Product.fromJson);
  }
}
