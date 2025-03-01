import Navbar from "./layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Benefits from "./sections/Benefits";
import Services from "./sections/Services";
import Achievements from "./sections/Achievements";
import Testimonials from "./sections/Testimonials";
import ContactForm from "./sections/ContactForm";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

function Home() {
  return (
    <div className="w-screen min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        {" "}
        {/* Add padding to account for fixed navbar */}
        <Hero />
        <About />
        <Benefits />
        <Services />
        <Achievements />
        <Testimonials />
        <ContactForm />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
