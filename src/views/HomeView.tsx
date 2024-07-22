import CardProject from "@/components/CardProject";
import { ReactTyped } from "react-typed";
import { dataTechnologies, dataProjects } from "@/data/data";
import CardTechnology from "@/components/CardTechnology";

export default function HomeView() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:space-x-20">
        <div>
          <p className="text-6xl font-bold mb-4 h-44 md:h-40 lg:h-28 xl:h-auto">
            ¡Hola!, soy {" "}
            <span className="text-[#19BFEC]">
              <ReactTyped strings={["Oscar", " de Ecuador"]} typeSpeed={200} backSpeed={200} loop />
            </span>
          </p>
          <p className="text-2xl leading-relaxed">
            Aquí podrás conocer más sobre mi trabajo como desarrollador, mis proyectos y mi pasión por crear experiencias digitales únicas con un enfoque en el diseño intuitivo, me especializo en transformar ideas en realidades interactivas. Gracias por visitar mi portafolio. ¡Espero que disfrutes tu visita!.
          </p>
        </div>

        <img className="w-40 mx-auto mt-4 md:mt-0 md:w-64 lg:w-[500px]" src="/person.png" alt="Image de persona animada" />
      </div>

      <div>
        <h2 className="text-4xl font-bold mt-28 text-center">Proyectos <span className="text-[#19BFEC]">Recientes</span></h2>
        <hr className="w-24 h-1 mx-auto mt-2 mb-10 bg-[#19BFEC] border-0 rounded" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <CardProject key={index + 20} pj={dataProjects[index]} />
          ))}
        </div>
      </div>

      <h2 className="text-4xl font-bold mt-28 text-center">Algunas Tecnologías <span className="text-[#19BFEC]">Conocidas</span></h2>
      <hr className="w-24 h-1 mx-auto mt-2 mb-10 bg-[#19BFEC] border-0 rounded" />
      <div className="flex flex-wrap justify-center w-10/12 mx-auto gap-6 lg:gap-8">
        {dataTechnologies.map((technology) => (
          <CardTechnology key={technology.image} tn={technology} />
        ))}

      </div>
    </>



  )
}
