import Header from "./components/Header";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import NewArrivals from "./components/NewArrivals";
import ShopByRoom from "./components/ShopByRoom";
import { GetInspired } from "./components/GetInspired";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <hr className="text-zinc-300 -mt-4" />

      {/* Main */}
      <main>
        <Hero />
        <hr className="text-zinc-300" />
        <Trending />
        <hr className="text-zinc-300" />
        <NewArrivals />
        <hr className="text-zinc-300" />
        <ShopByRoom />
        <hr className="text-zinc-300" />
        <GetInspired />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
