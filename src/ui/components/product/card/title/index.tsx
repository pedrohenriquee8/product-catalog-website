interface ProductCardPriceProps {
  text: string;
}

export function ProductCardTitle({ text }: ProductCardPriceProps) {
  return (
    <h2 className="text-2xl font-semibold text-left text-gray-800 max-w-56 truncate">
      {text}
    </h2>
  );
}
