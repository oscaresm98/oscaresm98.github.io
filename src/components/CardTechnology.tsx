import { technology } from "@/types";

type CardTechnologyProps = {
  tn: technology;
};

export default function CardTechnology({ tn }: CardTechnologyProps) {
  return (
    <div className="group flex flex-col items-center gap-2">
      {/* Caja del icono */}
      <div
        className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center p-2.5
                   bg-[#16161e] border border-[#2a2a38]
                   transition-all duration-300
                   group-hover:border-[#19BFEC]/30
                   group-hover:shadow-[0_0_16px_-4px_rgba(25,191,236,0.35)]"
        style={{ borderColor: `${tn.color}18` }}
      >
        <img
          src={tn.image}
          alt={`logo ${tn.name}`}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Nombre */}
      <span className="text-[10px] text-gray-600 group-hover:text-gray-400 transition-colors duration-300 font-JetBrains text-center leading-tight px-1">
        {tn.name}
      </span>
    </div>
  );
}
