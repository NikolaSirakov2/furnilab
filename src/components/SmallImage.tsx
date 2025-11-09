import { useLanguage } from "../i18n/LanguageContext";

interface SmallImageProps {
  src?: string;
}

export function SmallImage({ src }: SmallImageProps) {
  const { dictionary } = useLanguage();
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
      className="w-full h-[450px] saturate-120 lg:h-[380px] bg-zinc-300 center-item text-zinc-600 transform transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-1"
      role="img"
      aria-label={src ? dictionary.smallImage.aria : dictionary.smallImage.placeholderAria}
    >
      {!src && dictionary.smallImage.placeholderLabel}
    </div>
  );
}
