import type { ReactElement } from "react";
import { inspirationProducts } from "../assets/data";

export function GetInspired(): ReactElement {
  return (
    <section className="relative max-w-[1600px] mx-auto p-4 sm:p-8 mt-20 mb-20">
      <h2 className="heading-2 impact">GET INSPIRED</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" />
    </section>
  );
}
