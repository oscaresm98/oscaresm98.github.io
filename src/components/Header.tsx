import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/components/Logo";

const navLinks = [
  { to: "/",       label: "Inicio"    },
  { to: "/about",  label: "Sobre mí"  },
  { to: "/contact", label: "Contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const location                  = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar menú al navegar
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#0c0c10]/85 border-b border-[#19BFEC]/10 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* Marca */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 flex-shrink-0">
            <Logo />
          </div>
          <span className="text-base font-bold tracking-tight">
            Oscar<span className="text-[#19BFEC]">.</span>
          </span>
        </Link>

        {/* Nav — escritorio */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-200 group ${
                  active ? "text-[#19BFEC]" : "text-gray-400 hover:text-white"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#19BFEC] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Hamburger — móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1 rounded-md hover:bg-white/5 transition-colors"
          aria-label="Abrir menú"
        >
          <span
            className={`block h-0.5 bg-white transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px] w-full" : "w-full"
            }`}
          />
          <span
            className={`block h-0.5 bg-white transition-all duration-300 w-3/4 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 bg-white transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px] w-full" : "w-1/2"
            }`}
          />
        </button>
      </div>

      {/* Menú desplegable — móvil */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-56 border-b border-white/5" : "max-h-0"
        }`}
      >
        <nav className="px-5 py-3 flex flex-col gap-1 bg-[#0c0c10]/98 backdrop-blur-md">
          {navLinks.map(({ to, label }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active
                    ? "text-[#19BFEC] bg-[#19BFEC]/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
