import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/inicio/hero-section";
import SobreNosotros from "@/components/inicio/sobre-nosotros";
import NuestrosServicios from "@/components/inicio/nuestros-servicios";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SobreNosotros />
      <NuestrosServicios />
      <Footer />
    </div>
  );
}
