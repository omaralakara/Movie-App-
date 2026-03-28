import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { MovieProvider } from "./contexts/MovieContext"; // Import your provider

function App() {
  return (
    // Wrap the MovieProvider here - it won't add any HTML tags to the browser!
    <MovieProvider>
      <div className="min-h-screen bg-slate-950 text-slate-50 antialiased selection:bg-cyan-500/30">
        <Navbar />

        <main className="main-content max-w-7xl mx-auto pt-24 pb-12 px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </MovieProvider>
  );
}

export default App;
