function MovieCard({ movie }) {
  function onFavoriteClick() {
    alert("Favorite clicked");
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

        {/* Floating Favorite Button - Always visible but pops on hover */}
        <button
          className="favorite-btn absolute top-3 right-3 z-10 p-2.5 rounded-full bg-slate-950/40 backdrop-blur-md text-white border border-white/10 hover:bg-red-500 hover:scale-110 transition-all active:scale-90 shadow-lg"
          onClick={onFavoriteClick}
        >
          <span className="text-xl leading-none">♥</span>
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
