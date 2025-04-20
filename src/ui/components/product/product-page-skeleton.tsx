export function ProductPageSkeleton() {
  return (
    <div className="flex flex-wrap justify-center gap-8 w-full animate-pulse">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="w-[320px] h-[250px] bg-gray-300 rounded-lg shadow-md"
        />
      ))}
    </div>
  );
}
