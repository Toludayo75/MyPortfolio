import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useScrollAnimation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleGetSocial = () => {
    scrollToSection("contact");
  };

  const getNavItemClass = (section: string) => {
    return `transition-colors ${
      activeSection === section 
        ? "text-blue-400 font-semibold" 
        : "text-white hover:text-blue-400"
    }`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-white glow-hover">
          TAE
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection("home")}
            className={getNavItemClass("home")}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection("about")}
            className={getNavItemClass("about")}
          >
            About Me
          </button>
          <button 
            onClick={() => scrollToSection("projects")}
            className={getNavItemClass("projects")}
          >
            My Work
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className={getNavItemClass("contact")}
          >
            Meet TAE
          </button>
          <Button
            onClick={handleGetSocial}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 glow-hover"
          >
            Get Social
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 glass-effect md:hidden">
            <div className="px-6 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection("home")}
                className="block w-full text-left text-white hover:text-blue-400 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-white hover:text-blue-400 transition-colors"
              >
                About Me
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left text-white hover:text-blue-400 transition-colors"
              >
                My Work
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-white hover:text-blue-400 transition-colors"
              >
                Meet TAE
              </button>
              <Button
                onClick={handleGetSocial}
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Get Social
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
