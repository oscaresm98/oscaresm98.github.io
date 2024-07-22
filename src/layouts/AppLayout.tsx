import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AppLayout() {
  return (
    <>
      <Header />
      <section className='max-w-screen-2xl mx-auto p-5'>
        <Outlet />
      </section>

      <Footer />
    </>
  )
}
