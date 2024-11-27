import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/sobre-nosotros/hero-section";
import QuienesSomos from "@/components/sobre-nosotros/quienes-somos";
import NuestrosValores from "@/components/sobre-nosotros/nuestros-valores";
import AreasDeEspecializacion from "@/components/sobre-nosotros/areas-de-especializacion";

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <QuienesSomos />
      <div className="text-transparent select-none border-b mx-24 lg:mx-80">
        s
      </div>
      <NuestrosValores />
      <AreasDeEspecializacion />
      <Footer />
    </>
  );
}
