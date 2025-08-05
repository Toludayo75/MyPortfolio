import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Certifications() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="parallax-bg"></div>
      <div ref={ref} className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white fade-in ${isVisible ? 'visible' : ''}`}>
            Professional Certifications
          </h2>
          <p className={`text-xl text-gray-300 slide-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            Validated expertise in cybersecurity and technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className={`bg-card border-border hover:bg-blue-600/20 transition-colors group glow-hover transform-3d stagger-animation ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Google Cybersecurity Professional Certificate</h3>
              <p className="text-gray-300 leading-relaxed">
                Comprehensive cybersecurity training covering threat detection, incident response, 
                and security best practices. Hands-on experience with industry-standard tools and frameworks.
              </p>
            </CardContent>
          </Card>
          
          <Card className={`bg-card border-border hover:bg-green-600/20 transition-colors group glow-hover transform-3d stagger-animation ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Cybersecurity Junior</h3>
              <p className="text-gray-300 leading-relaxed">
                Specialized in penetration testing, vulnerability assessment, and security analysis 
                using tools like Nmap and Metasploit for comprehensive security evaluations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}