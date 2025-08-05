import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Quote() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="parallax-bg"></div>
      <div ref={ref} className="max-w-4xl mx-auto px-6 text-center">
        <blockquote className={`text-3xl md:text-4xl font-light leading-relaxed text-gray-300 fade-in ${isVisible ? 'visible' : ''}`}>
          <span className="text-6xl text-blue-400 leading-none pulse-animation">"</span>
          The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One is understanding.
          <span className="text-6xl text-blue-400 leading-none pulse-animation">"</span>
        </blockquote>
        <cite className={`block mt-8 text-lg text-blue-400 font-medium slide-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          — Proverbs 9:10
        </cite>
      </div>
    </section>
  );
}
