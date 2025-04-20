interface ProductCardPriceProps {
  price: number;
}

export function ProductCardPrice({ price }: ProductCardPriceProps) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return (
    <div className="flex flex-col items-end">
      <p className="text-gray-500 text-sm">Price</p>
      <span className="text-gray-800 font-semibold">{formattedPrice}</span>
    </div>
  );
}
