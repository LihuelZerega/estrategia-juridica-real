import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/servicios/hero-section";
import Servicios from "@/components/servicios/servicios";
import WhatsAppButton from "@/components/layout/whatsapp-bubble";

export default function Page() {
  return (
    <div>
      <WhatsAppButton />
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
