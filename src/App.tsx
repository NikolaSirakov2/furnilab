import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";
import { GalleryPage } from "./pages/gallery";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden">
        <Header />
        <hr className="text-zinc-300 -mt-4" />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
