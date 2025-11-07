import Header from "./components/Header";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import NewArrivals from "./components/NewArrivals";

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
      </main>

      {/* Footer */}
    </div>
  );
};

export default App;
