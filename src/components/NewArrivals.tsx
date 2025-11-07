import { BigImage } from "./BigImage";
import { SmallImage } from "./SmallImage";

const NewArrivals = () => {
  return (
    <section className="max-w-[1600px] mx-auto p-4 sm:p-8 mt-20 mb-20">
      <h2 className="text-6xl lg:text-9xl impact uppercase leading-tight mb-12">
        NEW ARRIVAL
      </h2>
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Featured Large Image */}
        <div className="lg:col-span-2">
          <div className="flex flex-col-reverse card-hover">
            {/* Image PlaceHolder */}
            <BigImage src="/table.png" />
            {/* Text Content */}
            <div className="mt-6 md:mt-0 pt-4 flex justify-between">
              <div>
                <p className="text-lg uppercase font-bold text-zinc-600">
                  The Finest Collection
                </p>
                <h3 className="text-lg font-bold mb-4">Options, Starting</h3>
              </div>
              <div>
                <p className="text-xl font-extrabold mb-1 text-right">$1,000</p>
                <p className="text-sm text-zinc-500 text-right">10+ variants</p>
              </div>
            </div>
          </div>
        </div>
        {/* Small Images */}
        <div className="lg:col-span-2 flex flex-col lg:flex-row space-y-6 lg:gap-10">
          {/* Small Card 1 */}
          <div className="flex flex-col lg:w-1/2 card-hover">
            {/* Image Placeholder */}
            <SmallImage src="/lamp.png" />
            {/* Text Details */}
            <div className="w-full flex justify-between pt-2">
              <div>
                <h4 className="text-xl uppercase font-bold">Coffee Table</h4>
                <p className="text-base text-zinc-600 mb-1">Starting</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-right">$350</p>
                <p className="text-base text-zinc-500 text-right">
                  20+ Variants
                </p>
              </div>
            </div>
          </div>
          {/* Small Card 2 */}
          <div className="flex flex-col lg:w-1/2 lg:mt-50 card-hover">
            {/* Image Placeholder */}
            <SmallImage src="/sofa.png" />
            {/* Text Details */}
            <div className="w-full flex justify-between pt-2">
              <div>
                <h4 className="text-xl uppercase font-bold">Coffee Table</h4>
                <p className="text-base text-zinc-600 mb-1">Starting</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-right">$350</p>
                <p className="text-base text-zinc-500 text-right">
                  20+ Variants
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
