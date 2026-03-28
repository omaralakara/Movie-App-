import { Link } from "react-router-dom"; // <--- Add this line!
function Favorites() {
  return (
    /* We use 'min-h-[60vh]' to ensure the message stays centered 
       even if there's no other content on the page. 
    */
    <div className="favorites-empty flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      {/* Icon/Visual Element */}
      <div className="mb-6 p-6 rounded-full bg-slate-900/50 border border-slate-800 shadow-2xl shadow-cyan-500/5">
        <span className="text-6xl animate-pulse drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
          ♥
        </span>
      </div>

      {/* Text Content */}
      <div className="max-w-md space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
          Your Collection is Empty
        </h2>

        <p className="text-lg text-slate-400 leading-relaxed">
          Start building your personal cinema library! Heart your favorite
          movies, and they'll appear here for quick access.
        </p>
      </div>

      {/* Navigation Shortcut */}
      <div className="mt-10">
        <Link
          to="/"
          className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg shadow-cyan-900/40 active:scale-95"
        >
          Browse Movies
        </Link>
      </div>
    </div>
  );
}

export default Favorites;
