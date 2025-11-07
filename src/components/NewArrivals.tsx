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
            {/* Text Content */}
            <div className="mt-6 md:mt-0 pt-4 flex justify-between"></div>
          </div>
        </div>
        {/* Small Images */}
        <div className=""></div>
      </div>
    </section>
  );
};

export default NewArrivals;
