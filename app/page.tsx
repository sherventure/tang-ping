import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Snow from "@/components/Snow";

export default function Home() {
  return (
    <main>
      <Snow />
      <Navbar />
      <Hero />
      <Services />
      <Reviews />
      <ContactForm />
      <Footer />
    </main>
  );
}
