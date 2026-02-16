import { project, technology } from "@/types";

export const dataTechnologies: technology[] = [
  // — Desarrollo Web —
  {
    name: "HTML",
    color: "#E44D26",
    image: "/img/html-logo.png",
    area: "web",
  },
  {
    name: "CSS",
    color: "#1572B6",
    image: "/img/css-logo.png",
    area: "web",
  },
  {
    name: "Javascript",
    color: "#F0DB4F",
    image: "/img/javascript-logo.png",
    area: "web",
  },
  {
    name: "React",
    color: "#61DAFB",
    image: "/img/react-logo.png",
    area: "web",
  },
  {
    name: "Tailwind",
    color: "#38BDF8",
    image: "/img/tailwindcss-logo.png",
    area: "web",
  },
  {
    name: "Git",
    color: "#F1502F",
    image: "/img/git-logo.png",
    area: "web",
  },
  {
    name: "Docker",
    color: "#2496ED",
    image: "/img/docker-logo.png",
    area: "web",
  },
  {
    name: "Django",
    color: "#092E20",
    image: "/img/django-logo.png",
    area: "web",
  },
  {
    name: "PostgreSQL",
    color: "#336791",
    image: "/img/postgresql-logo.png",
    area: "web",
  },
  {
    name: "PHP",
    color: "#787CB5",
    image: "/img/php-logo.png",
    area: "web",
  },

  // — Análisis de datos —
  // Nota: descarga los logos en public/img/ desde https://svgl.app o https://devicons.github.io/devicon/
  {
    name: "Python",
    color: "#3776AB",
    image: "/img/python-logo.svg",
    area: "data",
  },
  {
    name: "Pandas",
    color: "#150458",
    image: "/img/pandas-logo.svg",
    area: "data",
  },
  {
    name: "NumPy",
    color: "#013243",
    image: "/img/numpy-logo.svg",
    area: "data",
  },
  {
    name: "Matplotlib",
    color: "#11557C",
    image: "/img/matplotlib-logo.svg",
    area: "data",
  },
  {
    name: "Seaborn",
    color: "#4C72B0",
    image: "/img/seaborn-logo.svg",
    area: "data",
  },
  {
    name: "Snowflake",
    color: "#29B5E8",
    image: "/img/snowflake_logo.svg",
    area: "data",
  },
  {
    name: "SQL",
    color: "#E38C00",
    image: "/img/sql-logo.svg",
    area: "data",
  },
  {
    name: "Jupyter",
    color: "#F37626",
    image: "/img/jupyter-logo.svg",
    area: "data",
  },
];

export const dataProjects: project[] = [
  {
    name: "Sitio Web para compañia de transporte",
    description:
      "Pagina web con CRUD completo para compañia de transporte (Grupo M.S. Transporte)",
    technologies: [
      { name: "Next.js", color: "bg-[#E44D26]" },
      { name: "Tailwindcss", color: "bg-[#38BDF8]" },
      { name: "PostgreSQL", color: "bg-[#38BDF8]" },
      { name: "Prisma", color: "bg-[#38BDF8]" },
      { name: "NextAuth", color: "bg-[#38BDF8]" },
      { name: "Cloudinary", color: "bg-[#38BDF8]" },
    ],
    image: "/img/projects/grupoms.png",
    url: "https://grupomstransporte.com/",
    category: "web",
  },
  {
    name: "Template: Blog de Cafe",
    description:
      "Template sencilla sitio web para posteos de articulos con la tematica cafe",
    technologies: [
      { name: "HTML", color: "bg-[#E44D26]" },
      { name: "CSS", color: "bg-[#1572B6]" },
    ],
    image: "/img/projects/blogcafe.png",
    url: "https://proyectoblogcafe593.netlify.app",
    category: "web",
  },
  {
    name: "Aplicación de control de gastos",
    description:
      "Aplicación interactiva para la administración de gastos personales",
    technologies: [
      { name: "React", color: "bg-[#61DAFB]" },
      { name: "Tailwindcss", color: "bg-[#38BDF8]" },
      { name: "Typescript", color: "bg-[#3178C6]" },
    ],
    image: "/img/projects/gastos1.png",
    url: "https://presupuesto-template.netlify.app",
    category: "web",
  },
  {
    name: "Aplicación de veterinaria",
    description:
      "Aplicación para administrar y dar seguimiento a consultas de veterinaria",
    technologies: [
      { name: "React", color: "bg-[#61DAFB]" },
      { name: "Tailwindcss", color: "bg-[#38BDF8]" },
      { name: "Typescript", color: "bg-[#3178C6]" },
      { name: "Zustand", color: "bg-[#433e38]" },
    ],
    image: "/img/projects/veterinaria1.png",
    url: "https://veterinaria-template.netlify.app/",
    category: "web",
  },
  // Agrega aquí tus proyectos de análisis de datos:
  // {
  //   name: "Dashboard de ventas",
  //   description: "...",
  //   technologies: [
  //     { name: "Power BI", color: "bg-[#F2C811]" },
  //     { name: "SQL",      color: "bg-[#E38C00]" },
  //   ],
  //   image: "/img/projects/dashboard-ventas.png",
  //   url: "https://...",
  //   category: "data",
  // },
];
