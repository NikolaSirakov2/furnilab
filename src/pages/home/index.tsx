import type { ReactElement } from "react";
import Hero from "../../components/Hero";
import Trending from "../../components/Trending";
import NewArrivals from "../../components/NewArrivals";
import ShopByRoom from "../../components/ShopByRoom";
import { GetInspired } from "../../components/GetInspired";

export function HomePage(): ReactElement {
  return (
    <>
      <Hero />
      <hr className="text-zinc-300" />
      <Trending />
      <hr className="text-zinc-300" />
      <NewArrivals />
      <hr className="text-zinc-300" />
      <ShopByRoom />
      <hr className="text-zinc-300" />
      <GetInspired />
    </>
  );
}


