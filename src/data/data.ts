import { project, technology } from "@/types";

export const dataTechnologies: technology[] = [
  {
    name: "HTML",
    color: "#E44D26",
    image: "/img/html-logo.png",
  },
  {
    name: "CSS",
    color: "#1572B6",
    image: "/img/css-logo.png",
  },
  {
    name: "Javascript",
    color: "#F0DB4F",
    image: "/img/javascript-logo.png",
  },
  {
    name: "React",
    color: "#61DAFB",
    image: "/img/react-logo.png",
  },
  {
    name: "Tailwind",
    color: "#38BDF8",
    image: "/img/tailwindcss-logo.png",
  },
  {
    name: "Git",
    color: "#F1502F",
    image: "/img/git-logo.png",
  },
  {
    name: 'Docker',
    color: '#2496ED',
    image: '/img/docker-logo.png'
  },
  {
    name: 'Django',
    color: '#092E20', 
    image: '/img/django-logo.png'
  },
  {
    name: 'PostgreSQL',
    color: '#336791',
    image: '/img/postgresql-logo.png' 
  },
  {
    name: 'PHP',
    color: '#787CB5',
    image: '/img/php-logo.png'
  }
];

export const dataProjects: project[] = [
  {
    name: "Template: Blog de Cafe",
    description: "Template sencilla sitio web para posteos de articulos con la tematica cafe",
    technologies: [
      {
        name: "HTML",
        color: "bg-[#E44D26]",
      },
      {
        name: "CSS",
        color: "bg-[#1572B6]",
      }
    ],
    image: "/img/projects/blogcafe.png",
    url: "https://proyectoblogcafe593.netlify.app",
  },
  {
    name: "Aplicación de control de gastos",
    description: "Aplicación interactiva para la administración de gastos personales",
    technologies: [
      {
        name: "React",
        color: "bg-[#61DAFB]",
      },
      {
        name: "tailwindcss",
        color: "bg-[#38BDF8]",
      },
      {
        name: "Typescript",
        color: "bg-[#3178C6]",
      }
    ],
    image: "/img/projects/gastos1.png",
    url: "https://presupuesto-template.netlify.app",
  },
  {
    name: "Aplicación de veterinaria",
    description: "Aplicación para administrar y dar seguimiento a consultas de veterinaria",
    technologies: [
      {
        name: "React",
        color: "bg-[#61DAFB]",
      },
      {
        name: "tailwindcss",
        color: "bg-[#38BDF8]",
      },
      {
        name: "Typescript",
        color: "bg-[#3178C6]",
      },
      {
        name: "Zustand",
        color: "bg-[#433e38]",
      }
    ],
    image: "/img/projects/veterinaria1.png",
    url: "https://veterinaria-template.netlify.app/",
  },
  {
    name: "Template: Blog de Cafe",
    description: "Template sencilla sitio web para posteos de articulos con la tematica cafe",
    technologies: [
      {
        name: "HTML",
        color: "bg-[#E44D26]",
      },
      {
        name: "CSS",
        color: "bg-[#1572B6]",
      }
    ],
    image: "/img/projects/blogcafe.png",
    url: "https://template-blog-cafe.vercel.app/",
  },
  {
    name: "Template: Blog de Cafe",
    description: "Template sencilla sitio web para posteos de articulos con la tematica cafe",
    technologies: [
      {
        name: "HTML",
        color: "bg-[#E44D26]",
      },
      {
        name: "CSS",
        color: "bg-[#1572B6]",
      }
    ],
    image: "/img/projects/blogcafe.png",
    url: "https://template-blog-cafe.vercel.app/",
  },
]