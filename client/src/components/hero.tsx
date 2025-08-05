import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import profileImage from "@assets/me_1754160839900.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const { ref, isVisible } = useScrollAnimation();
  
  const fullText = "Building Scalable Solutions, One Line of Code at a Time";
  
  // Reset animation when section becomes visible
  useEffect(() => {
    if (isVisible) {
      setDisplayText("");
      setCurrentIndex(0);
      setAnimationKey(prev => prev + 1);
    }
  }, [isVisible]);
  
  useEffect(() => {
    if (isVisible && currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText, isVisible, animationKey]);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="parallax-bg"></div>
      <div ref={ref} className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className={`space-y-6 fade-in ${isVisible ? 'visible' : ''}`}>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white min-h-[200px]">
            <span className="inline-block">
              {displayText.split("Code").map((part, index) => (
                <span key={index}>
                  {part}
                  {index === 0 && displayText.includes("Code") && (
                    <span className="text-blue-400">Code</span>
                  )}
                </span>
              ))}
            </span>
            <span className="animate-pulse text-blue-400">|</span>
          </h1>
          <p className={`text-xl text-gray-300 leading-relaxed slide-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            Full Stack Developer crafting clean, efficient web applications with modern technologies.
          </p>
          <div className={`bounce-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
            <Button
              onClick={scrollToProjects}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center space-x-2 glow-hover magnetic"
            >
              <span>View My Projects</span>
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
        
        <div className={`flex justify-center bounce-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.9s' }}>
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600 p-1 glow-hover">
              <img
                src={profileImage}
                alt="Toludayo - Full Stack Developer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Enhanced decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-float pulse-animation"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-float-delayed pulse-animation"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-cyan-400 rounded-full animate-float"></div>
            <div className="absolute top-1/4 -right-6 w-3 h-3 bg-pink-400 rounded-full animate-float-delayed"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
