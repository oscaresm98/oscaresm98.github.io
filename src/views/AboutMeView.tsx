import ScrollAnimation from "react-animate-on-scroll";

const timeline = [
  {
    year: "2019",
    event:
      "Inicio de carrera universitaria en Ingeniería en Ciencias de la Computación",
  },
  { year: "2021", event: "Primer proyecto web publicado" },
  { year: "2023", event: "Pasantías en desarrollo de software" },
  {
    year: "2024",
    event:
      "Primeros proyectos de análisis de datos y pasantías en automatización y optimización",
  },
  { year: "2025", event: "Laborando como analista de pronósticos" },
];

export default function AboutMeView() {
  return (
    <div className="animate-in fade-in fill-mode-both delay-150 duration-1000">
      {/* ── Bio ──────────────────────────────────────────── */}
      <section className="py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start max-w-4xl mx-auto">
          {/* Encabezado izquierda */}
          <div className="md:sticky md:top-28">
            <span className="text-[10px] font-JetBrains text-[#19BFEC] tracking-widest uppercase">
              — sobre mí —
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mt-2 leading-tight">
              Un poco
              <br />
              <span className="text-gradient">de mí</span>
            </h2>
            <div className="mt-6 w-12 h-1 bg-[#19BFEC] rounded-full" />
          </div>

          {/* Texto derecha */}
          <div className="space-y-5">
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Soy Ingeniero en Ciencias de la Computación con interés en el
              cruce entre el desarrollo de software y el análisis de datos. A lo
              largo de mi carrera he construido habilidades en múltiples áreas,
              desde interfaces web modernas hasta pipelines de análisis y
              visualización de información.
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              En el área de datos trabajo con Python (Pandas, NumPy, Matplotlib,
              Seaborn) y plataformas como Snowflake y Oracle DB para transformar
              conjuntos de datos en visualizaciones e insights accionables. En
              desarrollo web construyo aplicaciones con React, TypeScript y
              Django.
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Fuera del ámbito profesional me gustan el fútbol y el basketball,
              que me ayudan a mantener equilibrio y trabajo en equipo tanto
              dentro como fuera del código.
            </p>
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────── */}
      <ScrollAnimation
        animateIn="animate-in slide-in-from-bottom fade-in ease-out duration-1000"
        animateOnce={true}
        animatePreScroll={false}
        offset={120}
        delay={100}
      >
        <section className="py-12 max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[10px] font-JetBrains text-[#19BFEC] tracking-widest uppercase">
              — historial —
            </span>
            <h3 className="font-display text-3xl font-bold mt-2">
              Trayectoria
            </h3>
          </div>

          <ol className="relative border-l border-[#2a2a38] space-y-0">
            {timeline.map((item, i) => (
              <li key={i} className="relative pl-8 pb-10 last:pb-0">
                {/* Dot */}
                <div className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-[#0c0c10] border-2 border-[#19BFEC]" />

                {/* Año */}
                <span className="font-JetBrains text-xs font-bold text-[#19BFEC] tracking-widest">
                  {item.year}
                </span>

                {/* Evento */}
                <p className="text-sm text-gray-300 mt-1 leading-relaxed">
                  {item.event}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </ScrollAnimation>

      {/* ── Cita ─────────────────────────────────────────── */}
      <ScrollAnimation
        animateIn="animate-in slide-in-from-bottom fade-in ease-out duration-1000"
        animateOnce={true}
        animatePreScroll={false}
        offset={100}
        delay={100}
      >
        <section className="py-12 max-w-2xl mx-auto">
          <blockquote className="relative p-8 rounded-2xl border border-[#2a2a38] bg-[#16161e] overflow-hidden">
            {/* Comillas decorativas */}
            <span
              className="absolute -top-4 -left-2 font-display text-[120px] leading-none text-[#19BFEC]/8 select-none"
              aria-hidden
            >
              &ldquo;
            </span>
            <p className="relative text-base sm:text-lg font-medium text-gray-200 leading-relaxed italic">
              "Primero resuelve el problema. Luego escribe el código."
            </p>
            <footer className="mt-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#2a2a38]" />
              <cite className="text-xs font-JetBrains text-gray-500 not-italic">
                John Johnson
              </cite>
            </footer>
          </blockquote>
        </section>
      </ScrollAnimation>
    </div>
  );
}
