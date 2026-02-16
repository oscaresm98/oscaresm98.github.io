import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { ReactTyped } from "react-typed";
import CardProject from "@/components/CardProject";
import CardTechnology from "@/components/CardTechnology";
import { dataTechnologies, dataProjects } from "@/data/data";
import { projectCategory } from "@/types";

const stats = [
  { value: "3+",  label: "Años aprendiendo" },
  { value: "19+", label: "Tecnologías"       },
];

type Filter = "todos" | projectCategory;

const filterLabels: Record<Filter, string> = {
  todos: "Todos",
  web:   "Web",
  data:  "Análisis de datos",
};

export default function HomeView() {
  const [activeFilter, setActiveFilter] = useState<Filter>("todos");

  const filteredProjects =
    activeFilter === "todos"
      ? dataProjects
      : dataProjects.filter((p) => p.category === activeFilter);

  const webTechs  = dataTechnologies.filter((t) => t.area === "web");
  const dataTechs = dataTechnologies.filter((t) => t.area === "data");

  return (
    <div className="animate-in fade-in fill-mode-both delay-150 duration-1000">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative flex flex-col md:flex-row items-center gap-10 md:gap-16 py-16 md:py-24">

        {/* Orb decorativo */}
        <div
          className="orb w-[500px] h-[500px] bg-[#19BFEC] left-[-120px] top-[-80px]"
          style={{ opacity: 0.05 }}
        />

        {/* Contenido */}
        <div className="flex-1 text-center md:text-left relative z-10">
          <span className="inline-flex items-center gap-2 text-[10px] font-JetBrains tracking-widest uppercase text-[#19BFEC] border border-[#19BFEC]/25 bg-[#19BFEC]/5 px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#19BFEC] animate-pulse" />
            Ing. en Computación
          </span>

          <h1 className="font-display text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5">
            ¡Hola!, soy{" "}
            <span className="text-gradient">Oscar</span>
          </h1>

          <p className="text-base sm:text-lg text-[#19BFEC] font-medium mb-5 h-7 font-JetBrains">
            <ReactTyped
              strings={["Desarrollador de Software", "Analista de Datos", "Ing. en Computación"]}
              typeSpeed={55}
              backSpeed={35}
              loop
            />
          </p>

          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0 mb-9">
            Combino desarrollo web moderno con análisis de datos para construir
            productos que no solo funcionan, sino que comunican información de valor.
            Trabajo con Python, SQL y herramientas de visualización tanto como con
            React y TypeScript.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <button
              onClick={() =>
                document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-2.5 bg-[#19BFEC] text-[#0c0c10] text-sm font-bold rounded-xl
                         hover:bg-[#0fa8d4] transition-all duration-300
                         hover:shadow-[0_0_24px_-4px_rgba(25,191,236,0.55)]"
            >
              Ver proyectos
            </button>
            <Link
              to="/about"
              className="px-6 py-2.5 border border-[#2a2a38] text-gray-300 text-sm font-medium rounded-xl
                         hover:border-[#19BFEC]/40 hover:text-[#19BFEC] transition-all duration-300"
            >
              Sobre mí →
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-10 justify-center md:justify-start">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-3xl font-bold text-[#19BFEC]">
                  {stat.value}
                </span>
                <span className="text-[10px] text-gray-600 font-JetBrains tracking-widest uppercase mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen */}
        <div className="w-44 sm:w-60 md:w-72 lg:w-80 flex-shrink-0 relative z-10">
          <img
            className="w-full float-animation drop-shadow-[0_0_40px_rgba(25,191,236,0.15)]"
            src="/person.png"
            alt="Avatar de Oscar"
          />
        </div>
      </section>

      {/* ── Proyectos ────────────────────────────────────── */}
      <section id="proyectos" className="py-16">
        <ScrollAnimation
          animateIn="animate-in slide-in-from-bottom fade-in ease-out duration-1000"
          animateOnce={true}
          animatePreScroll={false}
          offset={150}
          delay={100}
        >
          {/* Encabezado */}
          <div className="text-center mb-10">
            <span className="text-[10px] font-JetBrains text-[#19BFEC] tracking-widest uppercase">
              — portafolio —
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Algunos <span className="text-gradient">Proyectos</span>
            </h2>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {(Object.keys(filterLabels) as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeFilter === f
                    ? "bg-[#19BFEC] text-[#0c0c10] shadow-[0_0_16px_-4px_rgba(25,191,236,0.5)]"
                    : "bg-[#16161e] border border-[#2a2a38] text-gray-400 hover:border-[#19BFEC]/30 hover:text-white"
                }`}
              >
                {filterLabels[f]}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {filteredProjects.map((pj, i) => (
                <CardProject key={i} pj={pj} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 py-20 font-JetBrains text-xs tracking-widest">
              — Próximamente proyectos de análisis de datos —
            </p>
          )}
        </ScrollAnimation>
      </section>

      {/* ── Tecnologías ──────────────────────────────────── */}
      <section className="py-16">
        <ScrollAnimation
          animateIn="animate-in slide-in-from-bottom fade-in ease-out duration-1000"
          animateOnce={true}
          animatePreScroll={false}
          offset={150}
          delay={100}
        >
          {/* Encabezado */}
          <div className="text-center mb-12">
            <span className="text-[10px] font-JetBrains text-[#19BFEC] tracking-widest uppercase">
              — skills —
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Tecnologías <span className="text-gradient">Conocidas</span>
            </h2>
          </div>

          <div className="space-y-12">
            {/* Web */}
            <div>
              <p className="text-[10px] font-JetBrains text-gray-600 tracking-widest uppercase text-center mb-6">
                Desarrollo Web
              </p>
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 md:gap-6">
                {webTechs.map((t) => (
                  <CardTechnology key={t.name} tn={t} />
                ))}
              </div>
            </div>

            {/* Datos */}
            <div>
              <p className="text-[10px] font-JetBrains text-gray-600 tracking-widest uppercase text-center mb-6">
                Análisis de Datos
              </p>
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
                {dataTechs.map((t) => (
                  <CardTechnology key={t.name} tn={t} />
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

    </div>
  );
}
