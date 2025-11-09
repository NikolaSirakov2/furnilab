import ProductCard from "./ProductCard";
import { useLanguage } from "../i18n/LanguageContext";

const Trending = () => {
  const { dictionary } = useLanguage();
  const subheadingLines = dictionary.trending.subheading.split("\n");

  return (
    <section className="max-w-[1350px] 2xl:max-w-[1600px] mx-auto p-4 sm:p-8 mt-20 mb-20">
      {/* TITLE */}
      <div className="relative flex justify-between items-end mb-12">
        <h2 className="text-5xl lg:text-9xl impact uppercase text-nowrap leading-tighter">
          {dictionary.trending.headingLine1} <br />{" "}
          <span className="mt-4 block">{dictionary.trending.headingLine2}</span>
        </h2>
        <button className="lg:mr-4 text-sm lg:text-lg absolute right-0 font-medium border border-zinc-900 text-zinc-900 px-5 lg:px-8 py-3 rounded-full cursor-pointer hover:bg-zinc-900 hover:text-zinc-50 transition-all duration-200 ease-in">
          {dictionary.trending.cta}
        </button>
      </div>
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard price="550" src="/desk.png" position="bottom-4 left-4" />
        <ProductCard price="1000" src="/sofa2.png" position="bottom-4 left-4" />
        <ProductCard price="260" src="/sofa.png" position="bottom-4 left-4" />
        <div className="hidden md:block">
          <ProductCard price="100" src="/lamp.png" position="bottom-4 left-4" />
        </div>
      </div>
      {/* HEADER AND TEXT */}
      <div className="pt-6 flex flex-col items-center text-center">
        <h3 className="text-3xl font-extrabold uppercase mb-2">
          {subheadingLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>
        <p className="text-base text-zinc-600 max-w-lg">
          {dictionary.trending.description}
        </p>
      </div>
    </section>
  );
};

export default Trending;
