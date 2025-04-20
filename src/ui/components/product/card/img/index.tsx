import Image, { ImageProps } from "next/image";

export function ProductCardImage({ src, alt, ...rest }: ImageProps) {
  const hasImage = typeof src === "string" && src.length > 0;

  return (
    <div className="flex items-center justify-center w-full h-48 bg-gray-200 rounded-lg relative">
      {hasImage ? (
        <Image
          src={src}
          alt={alt || "Product Image"}
          className="object-cover w-full h-full rounded-lg"
          fill
          {...rest}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          No Image Available
        </div>
      )}
    </div>
  );
}
