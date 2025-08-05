import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
// RESUME DOCUMENT: Link to Toluwase's actual resume PDF for download functionality
// Update this path when resume needs to be replaced
import resumePdf from '@assets/image_1754162450132.png';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  
  // RESUME DOWNLOAD: Function to download Toluwase's resume
  // Replace resumePdf with actual PDF file when available
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Toluwase_Ayomide_Emmanuel_Resume.png'; // Change to .pdf when PDF is available
    link.click();
  };
  
  return (
    <section id="contact" className="py-20 bg-card/30 relative overflow-hidden">
      <div className="parallax-bg"></div>
      <div ref={ref} className="max-w-4xl mx-auto px-6 text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-white fade-in ${isVisible ? 'visible' : ''}`}>
          Let's Work Together
        </h2>
        <p className={`text-xl text-gray-300 mb-12 slide-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className={`bg-card border-border hover:bg-blue-600/20 transition-colors group glow-hover stagger-animation ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <CardContent className="p-6 text-center">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4 pulse-animation" />
              <h3 className="text-lg font-semibold mb-2 text-white">Email</h3>
              <a 
                href="mailto:ayomidetoluwase75@gmail.com" 
                className="text-gray-300 hover:text-blue-400 transition-colors magnetic"
              >
                ayomidetoluwase75@gmail.com
              </a>
            </CardContent>
          </Card>
          
          <Card className={`bg-card border-border hover:bg-blue-600/20 transition-colors group glow-hover stagger-animation ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
            <CardContent className="p-6 text-center">
              <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4 pulse-animation" />
              <h3 className="text-lg font-semibold mb-2 text-white">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/toluwase-ayomide-052514251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors magnetic"
              >
                linkedin.com/in/toluwase-ayomide
              </a>
            </CardContent>
          </Card>
          
          <Card className={`bg-card border-border hover:bg-blue-600/20 transition-colors group glow-hover stagger-animation ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
            <CardContent className="p-6 text-center">
              <Github className="w-8 h-8 text-blue-400 mx-auto mb-4 pulse-animation" />
              <h3 className="text-lg font-semibold mb-2 text-white">GitHub</h3>
              <a 
                href="https://github.com/Toludayo75" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors magnetic"
              >
                github.com/Toludayo75
              </a>
            </CardContent>
          </Card>
        </div>
        
        <div className={`flex justify-center space-x-6 bounce-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.7s' }}>
          <Button size="icon" className="bg-blue-600 hover:bg-blue-500 rounded-full glow-hover magnetic">
            <a href="https://www.linkedin.com/in/toluwase-ayomide-052514251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button size="icon" className="bg-gray-600 hover:bg-gray-500 rounded-full glow-hover magnetic">
            <a href="https://github.com/Toludayo75" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button 
            size="icon" 
            className="bg-red-600 hover:bg-red-500 rounded-full glow-hover magnetic"
            onClick={handleResumeDownload}
          >
            <FileText className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
