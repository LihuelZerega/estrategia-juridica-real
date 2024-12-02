import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/servicios/hero-section";
import Servicios from "@/components/servicios/servicios";

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Servicios />
      {/* <div className="text-transparent select-none border-b mx-80">
        s
      </div>
      <ProyectosRealizados /> */}
      <Footer />
    </div>
  );
}
