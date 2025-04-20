import { DTO } from "../types/DTO";

export class Product {
  id: number;
  category: string;
  price: number;
  name: string;
  image: string;

  constructor(
    id: number,
    category: string,
    price: number,
    name: string,
    image: string
  ) {
    this.id = id;
    this.category = category;
    this.price = price;
    this.name = name;
    this.image = image;
  }

  static fromJson(json: DTO): Product {
    return new Product(
      Number(json.id),
      String(json.category),
      Number(json.price),
      String(json.name),
      String(json.image)
    );
  }
}
