import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ShoppingCart, Book, GraduationCap, Users, Shield, TrendingUp, Key, Database, UserCheck, University, Cloud, Gauge } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Shopping Cart",
      description: "Developed and deployed a secure e-commerce platform, integrating user authentication, product catalog management, interactive shopping cart, and automated order processing, improving transaction efficiency by 30% and securing sensitive data for over 10,000 active users through advanced encryption protocols.",
      icon: ShoppingCart,
      gradient: "from-emerald-500 to-teal-600",
      features: [
        { icon: Users, text: "10,000+ Active Users" },
        { icon: Shield, text: "Advanced Encryption Protocols" },
        { icon: TrendingUp, text: "30% Efficiency Improvement" },
      ],
      technologies: ["JavaScript", "Node.js", "MongoDB", "AWS S3"],
      featured: true,
      githubUrl: "https://github.com/khushi-srivastava/e-commerce-project",
      liveUrl: "#"
    },
    {
      title: "Comprehensive Author and Book Management System",
      description: "Designed and deployed a scalable RESTful API using TypeScript, Node.js, Express, and MongoDB, enabling full CRUD operations for authors and books; improved data integrity and security with TypeScript interfaces and Mongoose schemas, reducing data errors by 40% and accelerating integration by 30%.",
      icon: Book,
      gradient: "from-violet-500 to-purple-600",
      features: [
        { icon: Key, text: "TypeScript Interfaces" },
        { icon: Database, text: "Mongoose Schemas" },
        { icon: UserCheck, text: "40% Error Reduction" },
      ],
      technologies: ["TypeScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "REST API", "MVC Architecture"],
      featured: false,
      githubUrl: "https://github.com/khushi-srivastava/book-management-system",
      liveUrl: "#"
    },
    {
      title: "Open to Intern Platform",
      description: "Developed the backend for a college internship platform, creating APIs for managing colleges and interns. Integrated AWS S3 for secure and efficient storage and retrieval of college logos, ensuring seamless access to visual assets. Optimized performance and scalability while maintaining a user-centric approach for media handling.",
      icon: GraduationCap,
      gradient: "from-rose-500 to-pink-600",
      features: [
        { icon: University, text: "College Management APIs" },
        { icon: Cloud, text: "AWS S3 Integration" },
        { icon: Gauge, text: "Optimized Performance" },
      ],
      technologies: ["JavaScript", "Node.js", "MongoDB", "AWS S3"],
      featured: false,
      githubUrl: "https://github.com/khushi-srivastava/open-to-intern",
      liveUrl: "#"
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
                className="group bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl overflow-hidden shadow-lg card-hover border border-slate-200/50 dark:border-slate-600/50"
              >
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center overflow-hidden`}>
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

                  {!project.featured && (
                    <div className="flex space-x-3">
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
