import { BigImage } from "./BigImage";
import { SmallImage } from "./SmallImage";
import { useLanguage } from "../i18n/LanguageContext";

const NewArrivals = () => {
  const { dictionary } = useLanguage();
  const copy = dictionary.newArrivals;

  return (
    <section className="max-w-[1350px] 2xl:max-w-[1600px] mx-auto p-4 sm:p-8 mt-20 mb-20">
      <h2 className="text-6xl lg:text-9xl impact uppercase leading-tight mb-12 whitespace-pre-line">
        {copy.heading}
      </h2>
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Featured Large Image */}
        <div className="lg:col-span-2">
          <div className="flex flex-col-reverse card-hover">
            {/* Image PlaceHolder */}
            <BigImage src="/armchair.png" />
            {/* Text Content */}
            <div className="mt-6 md:mt-0 pt-4 flex justify-between">
              <div>
                <p className="text-lg uppercase font-bold text-zinc-600">
                  {copy.featured.tagline}
                </p>
                <h3 className="text-lg font-bold mb-4">
                  {copy.featured.title}
                </h3>
              </div>
              <div>
                <p className="text-xl font-extrabold mb-1 text-right">
                  {copy.featured.price}
                </p>
                <p className="text-sm text-zinc-500 text-right">
                  {copy.featured.variants}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Small Images */}
        <div className="lg:col-span-2 flex flex-col lg:flex-row space-y-6 lg:gap-10">
          {/* Small Card 1 */}
          <div className="flex flex-col lg:w-1/2 card-hover">
            {/* Image Placeholder */}
            <SmallImage src="/recliner.png" />
            {/* Text Details */}
            <div className="w-full flex justify-between pt-2">
              <div>
                <h4 className="text-xl uppercase font-bold">
                  {copy.first.title}
                </h4>
                <p className="text-base text-zinc-600 mb-1">
                  {copy.first.subtitle}
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold text-right">
                  {copy.first.price}
                </p>
                <p className="text-base text-zinc-500 text-right">
                  {copy.first.detail}
                </p>
              </div>
            </div>
          </div>
          {/* Small Card 2 */}
          <div className="flex flex-col lg:w-1/2 lg:mt-50 card-hover">
            {/* Image Placeholder */}
            <SmallImage src="/bookshelf.png" />
            {/* Text Details */}
            <div className="w-full flex justify-between pt-2">
              <div>
                <h4 className="text-xl uppercase font-bold">
                  {copy.second.title}
                </h4>
                <p className="text-base text-zinc-600 mb-1">
                  {copy.second.subtitle}
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold text-right">
                  {copy.second.price}
                </p>
                <p className="text-base text-zinc-500 text-right">
                  {copy.second.detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12 lg:mt-15">
        <button
          className="text-base lg:text-lg font-medium border border-zinc-900 text-zinc-900 px-6 lg:px-8 py-3 rounded-full cursor-pointer hover:bg-zinc-900 hover:text-zinc-100 transition-all ease-in duration-200 hover:animate-wiggle"
          type="button"
        >
          {copy.cta}
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;
