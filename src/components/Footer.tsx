export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5">
      <div className="max-w-screen-xl mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-gray-600 font-JetBrains tracking-wide">
          Desarrollador de Software &middot; Analista de Datos &middot; Ecuador
        </p>
        <p className="text-xs text-gray-700 font-JetBrains">
          &copy; {new Date().getFullYear()} Oscar S&aacute;nchez
        </p>
      </div>
    </footer>
  );
}
