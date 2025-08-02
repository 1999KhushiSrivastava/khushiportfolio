import { Server, Cloud, Database, Shield } from "lucide-react";

export function AboutSection() {
  const stats = [
    { value: "100K+", label: "Medical Records Processed" },
    { value: "1,000+", label: "Concurrent Users Supported" },
    { value: "95%", label: "Code Coverage Achieved" },
    { value: "60%", label: "Cost Reduction" },
  ];

  const capabilities = [
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Building scalable APIs and microservices using Node.js, Express.js, and modern JavaScript frameworks",
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description:
        "Designing and implementing AWS cloud solutions including S3, Lambda, Aurora, and API Gateway",
    },
    {
      icon: Database,
      title: "Database Management",
      description:
        "Expert in MongoDB, MySQL, PostgreSQL, and Redis for efficient data storage and retrieval",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Implementing robust security measures and ensuring HIPAA compliance for sensitive data",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Dedicated Backend Developer with a passion for creating robust,
            scalable solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              With a Master's in Computer Application from Dr. Ram Manohar Lohia
              Avadh University, I've specialized in backend development with 2+ years
              of experience in building scalable APIs and cloud-native solutions using 
              Node.js, Express.js, TypeScript, MongoDB, and AWS.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              At e-Mag Solutions, I lead cloud migration projects and develop RESTful APIs 
              that serve thousands of concurrent users. I'm passionate about implementing 
              secure authentication systems with JWT and OAuth, and building robust, 
              high-performance applications with strict data integrity standards.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20 rounded-lg card-hover border border-emerald-200/50 dark:border-emerald-700/50"
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">What I Do Best</h3>
            <div className="space-y-4">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{capability.title}</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
