import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Medverify",
    description: "A hospital verification system that ensures accurate patient record tracking and cross-checks medical data. Built with Flask and MySQL, it improves data integrity for healthcare professionals.",
    technologies: ["Flask", "MySQL", "Bootstrap"],
    icon: "🔬",
    // TODO: Replace with actual GitHub repository URL for Medverify project
    githubUrl: "https://github.com/Toludayo75/Medverify",
    // TODO: Replace with actual live demo URL for Medverify project
    liveUrl: "https://medverify.onrender.com/"
  },
  {
    id: 2,
    title: "Foodies Hub",
    description: "A full-featured food discovery and ordering app built for local vendors. Includes user login, food category filtering, and cart management. Built with React, Node.js, and Express.",
    technologies: ["React", "Node.js", "Express"],
    Login credentials:
    - Admin: admin@foodapp.com / admin123
    - Rider: rider@foodapp.com / rider123
    - Customer: test@example.com / password123
    icon: "🍽️",
    // TODO: Replace with actual GitHub repository URL for Foodies Hub project
    githubUrl: "https://github.com/Toludayo75/Foodies-Hub",
    // TODO: Replace with actual live demo URL for Foodies Hub project
    liveUrl: "https://foodies-hub-nevu.onrender.com"
  },
  {
    id: 3,
    title: "Allergen Alert",
    description: "A mobile-first application that helps users identify potential allergens in food products. Originally built as a web app using React, Node.js, and PostgreSQL, converted to mobile using Capacitor.",
    technologies: ["React", "Node.js", "PostgreSQL", "Capacitor"],
    icon: "📱",
    // TODO: Replace with actual GitHub repository URL for Allergen Alert mobile project
    githubUrl: "#",
    // TODO: Replace with actual live demo URL for Allergen Alert project
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Allergen Web",
    description: "A web application that helps users identify allergens in food products by scanning or entering ingredient information. Features user authentication and personalized allergen detection.",
    technologies: ["HTML", "CSS", "JavaScript", "Flask"],
    icon: "🌐",
    // TODO: Replace with actual GitHub repository URL for Allergen Web project
    githubUrl: "https://github.com/Toludayo75/final-allergen",
    // TODO: Replace with actual live demo URL for Allergen Web project
    liveUrl: "#"
  },
  {
    id: 5,
    title: "PhysioScheduler",
    description: "A scheduling and duty management system built for physiotherapy departments. Includes authentication, role-based access, and a dynamic calendar interface for shift coordination.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    icon: "⏱️",
    // TODO: Replace with actual GitHub repository URL for PhysioScheduler project
    githubUrl: "https://github.com/theyeesha/physioreact",
    // TODO: Replace with actual live demo URL for PhysioScheduler project
    liveUrl: "https://physioreact.onrender.com"
  },
  {
    id: 6,
    title: "Jubilee Hospital Website",
    description: "A fully responsive hospital website designed to improve patient engagement. Features online appointment booking, doctor profiles, and service descriptions with embedded maps.",
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: "🏥",
    // TODO: Replace with actual GitHub repository URL for Jubilee Hospital Website project
    githubUrl: "https://github.com/Toludayo75/Jubilee-Hospital",
    // TODO: Replace with actual live demo URL for Jubilee Hospital Website project
    liveUrl: "https://jubilee-hospital.netlify.app/"
  },
  {
    id: 7,
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce solution with product catalog, shopping cart, payment integration, and admin dashboard. Built with React, Express, and MongoDB.",
    technologies: ["React", "Express", "MongoDB", "Stripe"],
    icon: "🛒",
    // TODO: Replace with actual GitHub repository URL for E-Commerce Platform project
    githubUrl: "#",
    // TODO: Replace with actual live demo URL for E-Commerce Platform project
    liveUrl: "#"
  },
  {
    id: 8,
    title: "Task Management System",
    description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking. Built with React, Socket.io, and Node.js.",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    icon: "📋",
    // TODO: Replace with actual GitHub repository URL for Task Management System project
    githubUrl: "#",
    // TODO: Replace with actual live demo URL for Task Management System project
    liveUrl: "#"
  },
  {
    id: 9,
    title: "Weather Dashboard",
    description: "A comprehensive weather application with location-based forecasts, interactive maps, and weather alerts. Integrates with multiple weather APIs for accurate data.",
    technologies: ["React", "Weather APIs", "Chart.js", "Geolocation"],
    icon: "🌤️",
    // TODO: Replace with actual GitHub repository URL for Weather Dashboard project
    githubUrl: "#",
    // TODO: Replace with actual live demo URL for Weather Dashboard project
    liveUrl: "#"
  },
  {
    id: 10,
    title: "Farouq Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills. Features smooth animations, dark mode, and optimized performance. Built with React and Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    icon: "💼",
    // TODO: Replace with actual GitHub repository URL for Portfolio Website project
    githubUrl: "https://github.com/Toludayo75/Farouq-Portfolio",
    // TODO: Replace with actual live demo URL for Portfolio Website project
    liveUrl: "https://farouqportfolio.netlify.app/"
  }
];

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="projects" className="py-20 bg-card/30 relative overflow-hidden">
      <div className="parallax-bg"></div>
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white fade-in ${isVisible ? 'visible' : ''}`}>
            Featured Projects
          </h2>
          <p className={`text-xl text-gray-300 slide-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            A showcase of my latest work in full-stack development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`bg-card border-border hover-lift glow-hover stagger-animation ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4 pulse-animation">{project.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs glow-hover">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 p-0 magnetic">
                        <Github size={16} className="mr-1" />
                        GitHub
                      </Button>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 p-0 magnetic">
                        <ExternalLink size={16} className="mr-1" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-12 bounce-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '1s' }}>
          <Button
            variant="outline"
            size="lg"
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 glow-hover magnetic"
          >
            <span>View All Projects</span>
            <Github className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}
