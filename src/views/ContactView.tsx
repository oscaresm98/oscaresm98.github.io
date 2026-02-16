const contacts = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/oscaresm",
    handle: "@oscaresm",
    description: "Red profesional",
    color: "#0A66C2",
    icon: (
      <svg
        className="w-7 h-7"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
          clipRule="evenodd"
        />
        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/oscaresm98",
    handle: "@oscaresm98",
    description: "Proyectos y código",
    color: "#ffffff",
    icon: (
      <svg
        className="w-7 h-7"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/oscaresm16/",
    handle: "@oscaresm98",
    description: "Vida personal",
    color: "#E1306C",
    icon: (
      <svg
        className="w-7 h-7"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function ContactView() {
  return (
    <div className="animate-in fade-in fill-mode-both delay-150 duration-1000">
      <section className="py-12 md:py-20 max-w-3xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-14">
          <span className="text-[10px] font-JetBrains text-[#19BFEC] tracking-widest uppercase">
            — contacto —
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            ¿Hablamos?
          </h2>
          <p className="text-sm text-gray-400 mt-4 max-w-sm mx-auto leading-relaxed">
            Puedes encontrarme en cualquiera de estos canales. Siempre estoy
            abierto a nuevas oportunidades.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contacts.map(({ name, url, handle, description, color, icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 p-8 rounded-2xl
                         bg-[#16161e] border border-[#2a2a38]
                         transition-all duration-500
                         hover:border-[#19BFEC]/25
                         hover:shadow-[0_0_32px_-8px_rgba(25,191,236,0.25)]
                         hover:-translate-y-1"
            >
              {/* Icono */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${color}15`, color }}
              >
                {icon}
              </div>

              {/* Info */}
              <div className="text-center">
                <p className="font-bold text-white text-sm group-hover:text-[#19BFEC] transition-colors duration-300">
                  {name}
                </p>
                <p className="text-xs font-JetBrains text-gray-600 mt-0.5">
                  {handle}
                </p>
                <p className="text-xs text-gray-500 mt-2">{description}</p>
              </div>

              {/* Flecha */}
              <svg
                className="w-4 h-4 text-gray-700 group-hover:text-[#19BFEC] transition-all duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
