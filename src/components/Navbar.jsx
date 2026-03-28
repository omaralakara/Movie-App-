import { useState } from "react"; // Added useState
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyles = ({ isActive }) =>
    `text-sm font-semibold tracking-wide transition-all duration-300 relative group ${
      isActive ? "text-cyan-400" : "text-slate-400 hover:text-slate-100"
    }`;

  // Mobile specific link styles
  const mobileLinkStyles = ({ isActive }) =>
    `block px-4 py-3 rounded-lg text-base font-bold transition-all ${
      isActive
        ? "bg-cyan-500/10 text-cyan-400"
        : "text-slate-300 hover:bg-slate-800"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-white/5 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LEFT: Brand Logo */}
        <div className="flex-1">
          <Link
            to="/"
            className="text-xl sm:text-2xl font-black italic tracking-tighter text-white"
          >
            React<span className="text-cyan-500">Movie</span>
          </Link>
        </div>

        {/* MIDDLE: Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-10 bg-slate-900/40 px-8 py-2.5 rounded-full border border-white/5">
          <NavLink to="/" className={linkStyles}>
            HOME
          </NavLink>
          <NavLink to="/favorites" className={linkStyles}>
            FAVORITES
          </NavLink>
        </div>

        {/* RIGHT: Desktop Sign In + Mobile Toggle */}
        <div className="flex-1 flex items-center justify-end gap-4">
          <button className="hidden sm:block text-sm font-bold bg-white text-black px-5 py-2 rounded-lg hover:bg-cyan-400 transition-all">
            SIGN IN
          </button>

          {/* Hamburger Button (Visible ONLY on Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                /> // X Icon
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                /> // Menu Icon
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-slate-950 border-b border-white/5 ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 py-6 space-y-2">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={mobileLinkStyles}
          >
            HOME
          </NavLink>
          <NavLink
            to="/favorites"
            onClick={() => setIsOpen(false)}
            className={mobileLinkStyles}
          >
            FAVORITES
          </NavLink>
          <button className="w-full mt-4 text-sm font-bold bg-cyan-600 text-white py-3 rounded-lg">
            SIGN IN
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
