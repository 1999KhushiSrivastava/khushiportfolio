import { 
  CloudUpload, 
  Settings, 
  TrendingUp, 
  Shield, 
  GraduationCap, 
  Rocket, 
  Trophy 
} from "lucide-react";

export function ExperienceSection() {
  const currentExperience = {
    title: "Software Developer",
    company: "e-Mag Solutions",
    period: "Jan 2023 - Feb 2025",
    isActive: true,
    achievements: [
      {
        icon: CloudUpload,
        title: "Cloud Migration Leadership",
        description: "Led end-to-end AWS cloud migration using S3, Lambda, and Aurora DB, transforming legacy systems into an automated data pipeline that processes over 100K medical records. Achieved 50% efficiency improvement by integrating NodeJS, Python, ExpressJS, Postman, and OAuth for secure and scalable backend operations."
      },
      {
        icon: Settings,
        title: "API Architecture",
        description: "Architected enterprise-grade RESTful API infrastructure using AWS API Gateway, Express.js, and Cognito authentication, delivering secure microservices platform supporting 1,000+ concurrent healthcare professionals. Utilized Postman for API testing and SQL for database optimization."
      },
      {
        icon: TrendingUp,
        title: "Cost Optimization",
        description: "Spearheaded comprehensive data modeling strategy using Python and SQL for ETL automation, resulting in 60% operational cost reduction while maintaining strict data integrity and HIPAA compliance. Implemented secure authentication systems using OAuth protocols."
      },
      {
        icon: Shield,
        title: "Security Implementation",
        description: "Implemented robust security measures throughout the architecture, ensuring end-to-end encryption, role-based access control, and continuous compliance monitoring."
      }
    ],
    technologies: ["Node.js", "TypeScript", "Python", "Express.js", "AWS", "API Gateway", "Lambda", "Aurora RDS", "SQL", "Postman", "OAuth", "HIPAA Compliance"]
  };

  const trainingExperience = {
    title: "Backend Developer Trainee",
    company: "FunctionUp",
    period: "July 2022 - Dec 2022",
    isActive: false,
    achievements: [
      {
        icon: GraduationCap,
        title: "Intensive Training",
        description: "Trained in backend development with hands-on experience building scalable applications using Node.js, Express.js, TypeScript, and MongoDB; skilled in version control, collaboration, and code management using Git and GitHub."
      },
      {
        icon: Rocket,
        title: "Performance Optimization",
        description: "Proficient in integrating AWS S3 for secure storage solutions, and experienced with Redis and caching strategies to enhance application speed, scalability, and performance."
      },
      {
        icon: Trophy,
        title: "API Development",
        description: "Experienced in designing and implementing RESTful APIs with secure authentication (JWT, OAuth), tailored for diverse use cases including user management, data processing, and third-party integrations."
      }
    ],
    technologies: ["Node.js", "Express.js", "TypeScript", "MongoDB", "AWS S3", "Redis", "JWT", "OAuth", "Postman", "SQL"]
  };

  const ExperienceCard = ({ experience }: { experience: typeof currentExperience }) => (
    <div className="relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-lg card-hover border border-slate-200/50 dark:border-slate-600/50">
      <div className={`absolute top-8 left-8 w-4 h-4 rounded-full ${
        experience.isActive ? 'bg-green-500 animate-pulse' : 'bg-blue-500'
      }`}></div>
      <div className="ml-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {experience.title}
            </h3>
            <p className="text-lg text-primary font-medium">{experience.company}</p>
          </div>
          <div className="text-slate-600 dark:text-slate-300 font-medium">
            {experience.period}
          </div>
        </div>

        <div className="space-y-4">
          {experience.achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="flex items-start space-x-3">
                <Icon className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>{achievement.title}:</strong> {achievement.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {experience.technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                experience.isActive
                  ? 'bg-primary/10 text-primary'
                  : 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Building enterprise-grade solutions and leading cloud transformation initiatives
          </p>
        </div>

        <div className="space-y-8">
          <ExperienceCard experience={currentExperience} />
          <ExperienceCard experience={trainingExperience} />
        </div>
      </div>
    </section>
  );
}
