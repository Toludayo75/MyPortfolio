import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="about" className="py-20 bg-card/30 relative overflow-hidden">
      <div className="parallax-bg"></div>
      <div ref={ref} className="max-w-4xl mx-auto px-6 text-center">
        <h2 className={`text-4xl md:text-6xl font-bold mb-12 text-white fade-in ${isVisible ? 'visible' : ''}`}>
          Innovation. Precision. <span className="text-blue-400">Excellence</span>
        </h2>
        <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-6">
          <p className={`slide-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            I'm Toludayo, a full stack developer and cybersecurity junior who enjoys turning complex problems into simple, intuitive solutions. I work with modern technologies like React, Node.js, Flask, and Python to build secure, full-featured applications — both frontend and backend.
          </p>
          <p className={`slide-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
            Whether it's building an interactive UI, architecting RESTful APIs, or conducting security assessments with tools like Nmap and Metasploit, I care about performance, maintainability, and user experience. Every line of code is crafted with purpose and precision.
          </p>
          <p className={`slide-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
            With my Google Cybersecurity Professional Certificate, I bring a security-first mindset to development, ensuring applications are not just functional but also protected against common vulnerabilities.
          </p>
          <p className={`text-blue-400 font-medium bounce-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
            I'm currently open to remote roles, freelance projects, and collaborations in web development, software engineering, and cybersecurity.
          </p>
        </div>
      </div>
    </section>
  );
}
