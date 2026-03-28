import { useMovieContext } from "../contexts/MovieContext";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function Favorites() {
  // 1. Pull the global favorites list from Context
  const { favorites } = useMovieContext();

  // 2. Logic: If we have favorites, show the grid!
  if (favorites && favorites.length > 0) {
    return (
      <div className="favorites-container py-12">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-slate-100 mb-2">
            Your Collection
          </h2>
          <p className="text-slate-400">Your hand-picked cinematic library</p>
          <div className="h-1 w-24 bg-cyan-500 rounded-full mt-4"></div>
        </div>

        {/* Reuse the exact same grid layout from your Home page */}
        <div className="movie-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  // 3. Fallback: Show your "Empty State" if the list is 0
  return (
    <div className="favorites-empty flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="mb-6 p-6 rounded-full bg-slate-900/50 border border-slate-800 shadow-2xl shadow-cyan-500/5">
        <span className="text-6xl animate-pulse drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] text-cyan-500">
          ♥
        </span>
      </div>

      <div className="max-w-md space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
          Your Collection is Empty
        </h2>
        <p className="text-lg text-slate-400 leading-relaxed">
          Start building your personal cinema library! Heart your favorite
          movies, and they'll appear here for quick access.
        </p>
      </div>

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
