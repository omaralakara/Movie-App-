import MovieCard from "../components/MovieCard.jsx";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1. Load Popular Movies on Initial Render
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.error(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <div className="home space-y-12">
      {/* Search Section */}
      <section className="flex flex-col items-center justify-center pt-10 pb-6">
        <form
          onSubmit={handleSearch}
          className="relative w-full max-w-2xl group"
        >
          <input
            type="text"
            placeholder="Search for a movie..."
            className="w-full px-6 py-4 bg-slate-900/50 border-2 border-slate-800 rounded-2xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-3 top-2 bottom-2 px-6 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-cyan-900/20"
          >
            Search
          </button>
        </form>
      </section>

      {/* Error Message */}
      {error && (
        <div className="text-center p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400">
          {error}
        </div>
      )}

      {/* Grid Section */}
      <div className="movie-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-20">
        {loading
          ? // SKELETON LOADING STATE
            [...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse flex flex-col gap-4">
                <div className="aspect-[2/3] w-full bg-slate-800 rounded-2xl"></div>
                <div className="space-y-2 px-2">
                  <div className="h-4 w-3/4 bg-slate-800 rounded"></div>
                  <div className="h-3 w-1/4 bg-slate-800 rounded"></div>
                </div>
              </div>
            ))
          : // ACTUAL MOVIE LIST
            movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
}

export default Home;
