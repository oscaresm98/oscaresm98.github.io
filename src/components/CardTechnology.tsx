import { technology } from "@/types"

type cardTechnologyProps = {
  tn: technology
}

export default function CardTechnology({tn}: cardTechnologyProps) {
  return (
    <div className="flex justify-center items-center">
      <img
        src={tn.image} 
        className="w-[200px] transition-all duration-500 hover:brightness-125 hover:contrast-125"
        alt={`imagen de logo de ${tn.name}`}
      />
      <p className="bg-[#1E293B] "></p>
      
    </div>
  )
}
