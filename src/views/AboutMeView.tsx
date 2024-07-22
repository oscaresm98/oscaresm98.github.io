

export default function AboutMeView() {
  return (
    <div className="animate-in fade-in fill-mode-both delay-150 duration-1000">
      <div className="grid md:grid-cols-2 md:my-16 gap-4 place-items-center w-11/12">
        <div>
          <h2 className="text-4xl font-bold text-center">Sobre <span className="text-[#19BFEC]">m&iacute;</span></h2>
          <hr className="w-24 h-1 mx-auto mt-2 bg-[#19BFEC] border-0 rounded" />
        </div>

        <div>
          <p className="text-gray-300">¡Hola! Soy un estudiante de ingenier&iacute;a en Cincias de la computaci&oacute;n. A lo largo de mi carrera, he desarrollado habilidades en diversas tecnologías y lenguajes de programación, incluyendo HTML, CSS, JavaScript, Python, PHP, Java y frameworks modernos como React, Angular, Nest, Nextjs, Astro, Django entre otros. Me encanta enfrentar nuevos desafíos y estoy constantemente aprendiendo y adaptándome a las últimas tendencias y mejores prácticas en desarrollor.</p>

          <p className="mt-2 text-gray-300">Fuera del ámbito profesional, sme gusta practicar deportes como futbol o basketball, lo cual me ayuda a mantener un equilibrio saludable entre mi vida personal y profesional. Ya sea explorando nuevas tecnologías, perfeccionando mis habilidades de diseño, siempre busco maneras de crecer y mejorar tanto personal como profesionalmente.</p>
        </div>
      </div>

      <div className=" p-8 rounded-lg shadow-lg w-11/12 text-center mx-auto">
        <img src="/steve_jobs.png" alt="Imagen Steve Jobs" className="w-40 h-40 rounded-full mx-auto mb-4 object-cover grayscale" />
        <p className="text-xl font-semibold text-gray-300 mb-2">"El único modo de hacer un gran trabajo es amar lo que haces."</p>
        <p className="text-gray-200">- Steve Jobs</p>
    </div>
    </div>
  )
}

