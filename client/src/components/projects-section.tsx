import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ShoppingCart, Book, GraduationCap, Users, Shield, TrendingUp, Key, Database, UserCheck, University, Cloud, Gauge } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Shopping Cart",
      description: "Secure e-commerce platform with user authentication, product catalog management, interactive shopping cart, and automated order processing. Improved transaction efficiency by 30%.",
      icon: ShoppingCart,
      gradient: "from-blue-500 to-purple-600",
      features: [
        { icon: Users, text: "10,000+ Active Users" },
        { icon: Shield, text: "Advanced Encryption Protocols" },
        { icon: TrendingUp, text: "30% Efficiency Improvement" },
      ],
      technologies: ["JavaScript", "Node.js", "MongoDB", "AWS S3"],
      featured: true,
    },
    {
      title: "Book Management System",
      description: "Secure backend for a Goodreads-like platform with RESTful APIs for user management, book cataloging, and reviews. Features JWT authentication and optimized CRUD operations.",
      icon: Book,
      gradient: "from-green-500 to-blue-600",
      features: [
        { icon: Key, text: "JWT Authentication" },
        { icon: Database, text: "Optimized CRUD Operations" },
        { icon: UserCheck, text: "Role Management System" },
      ],
      technologies: ["JavaScript", "Node.js", "MongoDB", "AWS S3"],
      featured: false,
    },
    {
      title: "Open to Intern Platform",
      description: "Backend for college internship platform with APIs for managing colleges and interns. Features AWS S3 integration for secure logo storage and optimized media handling.",
      icon: GraduationCap,
      gradient: "from-purple-500 to-pink-600",
      features: [
        { icon: University, text: "College Management APIs" },
        { icon: Cloud, text: "AWS S3 Integration" },
        { icon: Gauge, text: "Optimized Performance" },
      ],
      technologies: ["JavaScript", "Node.js", "MongoDB", "AWS S3"],
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A showcase of my technical expertise through real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift"
              >
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center`}>
                  <Icon className="text-5xl text-white" />
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {project.features.map((feature, featureIndex) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <FeatureIcon className="h-4 w-4 text-primary" />
                          <span className="text-slate-600 dark:text-slate-300">
                            {feature.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
