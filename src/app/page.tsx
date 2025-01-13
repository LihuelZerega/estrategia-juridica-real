import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/inicio/hero-section";
import SobreNosotros from "@/components/inicio/sobre-nosotros";
import NuestrosServicios from "@/components/inicio/nuestros-servicios";
import AlgunosProyectos from "@/components/inicio/algunos-proyectos";
import Testimonios from "@/components/inicio/testimonios";
import Footer from "@/components/layout/footer";
import Faq from "@/components/inicio/faq";
import WhatsAppButton from "@/components/layout/whatsapp-bubble";

export default function Home() {
  return (
    <>
      <WhatsAppButton />
      <Navbar />
      <HeroSection />
      <SobreNosotros />
      <NuestrosServicios />
      <AlgunosProyectos />
      <Testimonios />
      <div className="text-transparent select-none border-b mx-80">s</div>
      <Faq />
      <Footer />
    </>
  );
}
