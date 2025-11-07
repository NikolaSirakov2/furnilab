interface SmallImageProps {
  src?: string;
}

export function SmallImage({ src }: SmallImageProps) {
  const backgroundStyle = src
    ? {
        backgroundImage: `url(${src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }
    : undefined;

  return (
    <div
      style={backgroundStyle}
      className="w-full h-[450px] saturate-120 lg:h-[380px] bg-zinc-300 center-item text-zinc-600"
      role="img"
      aria-label={src ? "Small preview" : "Placeholder image"}
    >
      {!src && "Small Image"}
    </div>
  );
}
