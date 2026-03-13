import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import ContactForm from "@/components/contacto/contact-form";

export default function Page() {
  return (
    <div>
      <Navbar />
      <ContactForm />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.3407403598812!2d-99.16677626825211!3d19.426163539716104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff367f211b93%3A0x1f39cbe4591dda8e!2scorporativo%20amberes!5e0!3m2!1ses-419!2sar!4v1773424323626!5m2!1ses-419!2sar"
        width="1920"
        height="230"
        loading="lazy"
        className="w-full"
      />
      <Footer />
    </div>
  );
}