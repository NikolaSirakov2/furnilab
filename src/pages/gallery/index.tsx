import type { ReactElement } from "react";
import { galleryImages } from "../../assets/gallery-images";

function renderGalleryImage(
  src: string,
  alt: string,
  orientation: "portrait" | "landscape"
): ReactElement {
  const aspectClass =
    orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]";

  return (
    <figure
      key={src}
      className={`group relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/50 backdrop-blur-sm shadow-sm transition-transform duration-300 ease-out hover:-translate-y-1 ${aspectClass}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm font-medium uppercase tracking-wider text-white/90">
        {alt}
      </figcaption>
    </figure>
  );
}

export function GalleryPage(): ReactElement {
  return (
    <section className="max-w-[1600px] mt-30 mx-auto p-4 sm:p-8 mb-20">
      <div className="space-y-10">
        <header className="space-y-4">
          <p className="text-xs tracking-[0.45em] uppercase text-zinc-500">
            Gallery
          </p>
          <h1 className="text-[clamp(3.5rem,10vw,8rem)] impact font-extrabold leading-none text-zinc-900">
            Crafted Scenes
          </h1>
          <p className="text-base lg:text-lg max-w-2xl text-zinc-600">
            Explore every finish, upholstery, and silhouette from our seasonal
            collections. Each capture is styled by our team to help you imagine
            how the pieces layer into your own spaces.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map(({ src, alt, orientation }) =>
            renderGalleryImage(src, alt, orientation)
          )}
        </div>
      </div>
    </section>
  );
}


