import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AppLayout() {
  return (
    <div className="relative bg-grid min-h-screen">
      {/* Ambient glow — top right */}
      <div
        className="orb w-[700px] h-[700px] bg-[#19BFEC] top-[-200px] right-[-200px]"
        style={{ opacity: 0.04 }}
      />

      <Header />

      <main className="relative max-w-screen-xl mx-auto px-5 py-8 md:py-12">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
