import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Quote from "@/components/quote";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";
import ScrollToTop from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Quote />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
