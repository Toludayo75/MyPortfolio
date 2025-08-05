import { Card, CardContent } from "@/components/ui/card";
import { 
  SiReact, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiFlask,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { Shield, Terminal } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "React", icon: SiReact, color: "hover:bg-blue-600", category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "hover:bg-yellow-600", category: "Frontend" },
  { name: "HTML5", icon: SiHtml5, color: "hover:bg-orange-600", category: "Frontend" },
  { name: "CSS3", icon: SiCss3, color: "hover:bg-blue-600", category: "Frontend" },
  { name: "Tailwind", icon: SiTailwindcss, color: "hover:bg-cyan-600", category: "Frontend" },
  
  // Backend
  { name: "Node.js", icon: SiNodedotjs, color: "hover:bg-green-600", category: "Backend" },
  { name: "Python", icon: SiPython, color: "hover:bg-blue-600", category: "Backend" },
  { name: "Flask", icon: SiFlask, color: "hover:bg-gray-600", category: "Backend" },
  { name: "Express", icon: SiExpress, color: "hover:bg-yellow-600", category: "Backend" },
  
  // Database
  { name: "PostgreSQL", icon: SiPostgresql, color: "hover:bg-blue-600", category: "Database" },
  { name: "MySQL", icon: SiMysql, color: "hover:bg-orange-600", category: "Database" },
  { name: "MongoDB", icon: SiMongodb, color: "hover:bg-green-600", category: "Database" },
  
  // Cybersecurity
  { name: "Nmap", icon: Terminal, color: "hover:bg-red-600", category: "Cybersecurity" },
  { name: "Metasploit", icon: Shield, color: "hover:bg-purple-600", category: "Cybersecurity" },
  
  // Tools
  { name: "Git", icon: SiGit, color: "hover:bg-red-600", category: "Tools" },
  { name: "GitHub", icon: SiGithub, color: "hover:bg-purple-600", category: "Tools" },
  { name: "VS Code", icon: VscCode, color: "hover:bg-blue-600", category: "Tools" }
];

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="parallax-bg"></div>
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white fade-in ${isVisible ? 'visible' : ''}`}>
            Tech Stack
          </h2>
          <p className={`text-xl text-gray-300 slide-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            Technologies I work with daily
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card 
                key={skill.name} 
                className={`bg-card border-border transition-all duration-300 group ${skill.color} glow-hover stagger-animation transform-3d ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${0.1 * index}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 flex justify-center">
                    <IconComponent className="w-10 h-10 text-gray-300 group-hover:text-white transition-colors pulse-animation" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
