import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import NavMenu from "@/components/NavMenu";


export default function Header() {
  return (
    <header className="py-5">
      <div className=' max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center'>

        <div className="flex space-x-0 md:space-x-5 items-center">
          <div className='w-20'>
            <Link to={'/'}>
              <Logo />
            </Link>
          </div>
          <h1 className="text-5xl font-bold text-[#19BFEC] text-center">Oscar S&aacute;nchez</h1>
        </div>
        <NavMenu />

      </div>
    </header>
  )
}
