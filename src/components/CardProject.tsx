import { project } from "@/types";

type CardProjectProps = {
  pj: project;
};

export default function CardProject({ pj }: CardProjectProps) {
  return (
    <a
      href={pj.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col bg-[#16161e] border border-[#2a2a38] rounded-2xl overflow-hidden
                 transition-all duration-500
                 hover:border-[#19BFEC]/30 hover:shadow-[0_0_40px_-12px_rgba(25,191,236,0.3)]"
    >
      {/* Imagen */}
      <div className="relative overflow-hidden aspect-video">
        <img
          alt={`proyecto ${pj.name}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={pj.image}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center
                     bg-[#0c0c10]/70 opacity-0 group-hover:opacity-100
                     transition-opacity duration-300"
        >
          <span
            className="flex items-center gap-2 text-[#19BFEC] text-xs font-JetBrains font-medium
                       border border-[#19BFEC]/40 bg-[#19BFEC]/5 px-4 py-2 rounded-full
                       backdrop-blur-sm"
          >
            Ver proyecto
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-5">
        <h3
          className="text-base font-bold text-white mb-1.5 leading-snug
                     group-hover:text-[#19BFEC] transition-colors duration-300"
        >
          {pj.name}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed flex-1">{pj.description}</p>

        {/* Badges */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {pj.technologies.map((tn, i) => (
            <span
              key={i}
              className="text-[10px] font-JetBrains font-medium px-2.5 py-1 rounded-md
                         bg-white/5 border border-white/8 text-gray-400"
            >
              {tn.name}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
