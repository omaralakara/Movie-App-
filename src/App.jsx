import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    /* The outer div sets the "Cinema Dark" foundation. 
       'antialiased' makes text look sharper on modern screens. 
    */
    <div className="min-h-screen bg-slate-950 text-slate-50 antialiased selection:bg-cyan-500/30">
      {/* Navbar will eventually be fixed, so we provide a top-level container */}
      <Navbar />

      {/* 'pt-20' adds padding to the top so content isn't hidden under the Navbar.
         'px-4' provides mobile-friendly side margins.
      */}
      <main className="main-content max-w-7xl mx-auto pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
