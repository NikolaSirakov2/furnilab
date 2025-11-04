import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="min-h-screen overflow-clip">
      <Header />
      <hr className="text-zinc-300 -mt-4" />

      {/* Main */}
      <main>
        <Hero />
      </main>

      {/* Footer */}
    </div>
  );
};

export default App;
