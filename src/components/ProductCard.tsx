interface ProductCardProps {
  price: string;
  position?: string;
  src?: string;
}

const ProductCard = ({ price, position, src }: ProductCardProps) => {
  return (
    <div className="relative overflow-clip saturate-120 bg-zinc-200 w-full cursor-pointer transition-all duration-200 hover:-translate-y-1.5 ease-in lg:w-[95%] h-[480px] lg:h-[500px] flex items-center justify-center text-zinc-500">
      {/* Price Tag Overlay */}
      <div
        className={`absolute ${position} bg-white/90 z-99 hover:bg-zinc-800 hover:text-zinc-100 ease-in transition-all duration-150 text-zinc-900 text-base font-semibold rounded-full px-8 py-4`}
      >
        {price}
      </div>
      {/* Image Display */}
      {src ? (
        <img
          src={src}
          alt="interior-image"
          className="w-full object-cover hover:scale-105 transition-all duration-600 ease-in-out"
        />
      ) : (
        <span>Product Image</span>
      )}
    </div>
  );
};

export default ProductCard;
