import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import ContactForm from "@/components/contacto/contact-form";

export default function Page() {
  return (
    <div>
      <Navbar />
      <ContactForm />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.600323628842!2d-99.16604819999999!3d19.4296674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff351188ed17%3A0x18ed2f8f96e5a2a8!2zQy4gUsOtbyBMZXJtYSA5NCwgQ3VhdWh0w6ltb2MsIDA2NTAwIENpdWRhZCBkZSBNw6l4aWNvLCBDRE1YLCBNw6l4aWNv!5e0!3m2!1ses-419!2sar!4v1736805805469!5m2!1ses-419!2sar"
        width="1920"
        height="230"
        loading="lazy"
        className="w-full"
      />
      <Footer />
    </div>
  );
}