import { project } from "@/types"

type cardProjectProps = {
  pj: project
}

export default function CardProject({pj}: cardProjectProps) {
  return (
    <div className="rounded-lg bg-[#1E293B] p-4 shadow-md transition-all hover:scale-105 hover:shadow-lg focus:outline-none duration-1000 focus:ring-2 focus:ring-principal focus:ring-offset-2 flex flex-col items-center">
      <img
        alt={`proyecto de ${pj.name}`}
        className="mb-4 w-full rounded-lg object-cover"
        height={225}
        src={pj.image}
        style={{
          aspectRatio: "400/225",
          objectFit: "cover",
        }}
        width={400}
      />
      <h3 className="mb-2 text-3xl font-bold text-principal">{pj.name}</h3>
      <p className="text-gray-200">{pj.description}</p>
      <div className="flex space-x-2 mt-3 mb-2">
      {
        pj.technologies.map((tn, index) => (
          <p key={index} className={`${tn.color} p-1 rounded-md text-sm`}> {tn.name} </ p> 
        ))
      }
      </div>
    </div>
  )
}
