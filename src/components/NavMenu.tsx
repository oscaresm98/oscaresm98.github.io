import { Link } from "react-router-dom";


export default function NavMenu() {
  return (
    <nav className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6 items-center mt-4 md:mt-0">
      <Link className="font-bold hover:text-yellow-500 transition duration-300" to={'/'}>
        Inicio
      </Link>
      <Link className="font-bold hover:text-yellow-500 transition duration-300" to={'/about'}>
        Sobre m&iacute;
      </Link>
      <Link className="font-bold hover:text-yellow-500 transition duration-300" to={'/contact'}>
        Contacto
      </Link>
    </nav>
  )
}
