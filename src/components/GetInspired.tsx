import type { ReactElement } from "react";
import { inspirationProducts } from "../assets/data";
import { InspiredCard } from "./InspiredCard";
import { useLanguage } from "../i18n/LanguageContext";

export function GetInspired(): ReactElement {
  const { dictionary } = useLanguage();

  return (
    <section className="relative max-w-[1350px] 2xl:max-w-[1600px] mx-auto p-4 sm:p-8 mt-20 mb-20">
      <h2 className="heading-2 impact">{dictionary.inspiration.heading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {inspirationProducts.map((product) => {
          const label =
            dictionary.inspiration.products[product.translationKey];

          return (
            <InspiredCard
              key={product.translationKey}
              name={label}
              src={product.src}
            />
          );
        })}
      </div>
    </section>
  );
}
