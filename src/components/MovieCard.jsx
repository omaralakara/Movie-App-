import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  // 1. Pull the state and functions from our Context
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();

  // 2. Check if THIS specific movie is already a favorite
  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault(); // Good practice to prevent any unexpected navigation

    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  }
  return (
    /* RESPONSIVENESS: 
       We use 'w-full' so it stretches to fill whatever grid column it's in.
       The 'hover:border-cyan-500/50' adds a glowing edge on hover.
    */
    <div className="movie-card group relative w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-cyan-500/50 flex flex-col">
      {/* Poster Container with a 2/3 Aspect Ratio */}
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-slate-800">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          /* object-cover ensures the image fills the 2/3 space without stretching */
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Floating Favorite Button - Sleeker Modern Style */}
        <button
          className={`favorite-btn absolute top-4 right-4 z-10 p-2.5 rounded-full backdrop-blur-sm border transition-all duration-300 active:scale-95 group/btn shadow-lg 
    ${
      favorite
        ? "bg-red-500/10 border-red-500/30 text-red-500" // Styles when IS a favorite
        : "bg-slate-950/30 border-white/5 text-slate-400 hover:bg-slate-950/60 hover:text-white hover:border-white/10" // Styles when NOT
    }`}
          onClick={onFavoriteClick}
        >
          {favorite ? (
            // 1. SOLID RED HEART (When Favorite)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor" // This ensures the 'text-red-500' class fills the SVG
              className="w-5 h-5 transition-transform duration-300 group-hover/btn:scale-110"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          ) : (
            // 2. OUTLINE GRAY HEART (When NOT Favorite)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none" // This creates the "empty" outline effect
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor" // This lets our Tailwind 'text-slate-400' class define the line color
              className="w-5 h-5 transition-all duration-300 group-hover/btn:scale-110"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          )}
        </button>

        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Movie Info Section: Glass-like background */}
      <div className="movie-info p-5 bg-gradient-to-b from-slate-900 to-slate-950 flex-grow">
        <div className="flex flex-col gap-1">
          <h3 className="movie-title font-extrabold text-base lg:text-lg text-slate-100 truncate group-hover:text-cyan-400 transition-colors duration-300">
            {movie.title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="movie-year text-xs font-bold uppercase tracking-widest text-cyan-500/80">
              {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
            </span>
            {/* Added a subtle "HD" or Rating tag for visual 'fullness' */}
            <span className="text-[10px] px-2 py-0.5 rounded border border-slate-700 text-slate-500 font-bold uppercase">
              4k Ultra
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
