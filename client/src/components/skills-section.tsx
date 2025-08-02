import { useEffect, useRef, useState } from "react";
import { 
  Code2, 
  Wrench, 
  Cloud, 
  Database,
  Zap,
  Server,
  Shield,
  Globe,
  Users,
  Gauge
} from "lucide-react";

interface SkillBarProps {
  label: string;
  percentage: number;
}

function SkillBar({ label, percentage }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => {
            setAnimatedWidth(percentage);
          }, 100);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [percentage, isVisible]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{label}</span>
        <span className="text-primary">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
        <div
          className="bg-primary h-2 rounded-full transition-all duration-2000 ease-out"
          style={{ width: `${animatedWidth}%` }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Python", level: 75 },
      ],
    },
    {
      title: "Frameworks",
      icon: Wrench,
      skills: [
        { name: "Node.js", level: 95 },
        { name: "Express.js", level: 90 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 85 },
        { name: "Git/GitHub", level: 90 },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Redis", level: 80 },
      ],
    },
  ];

  const awsServices = [
    { name: "S3", icon: Database, color: "text-orange-500" },
    { name: "Lambda", icon: Zap, color: "text-yellow-500" },
    { name: "Aurora", icon: Database, color: "text-blue-500" },
    { name: "API Gateway", icon: Globe, color: "text-emerald-500" },
    { name: "Cognito", icon: Users, color: "text-violet-500" },
    { name: "Redis", icon: Gauge, color: "text-rose-500" },
  ];

  const additionalSkills = [
    "RESTful API", "OAuth", "JWT", "MVC Architecture", "HIPAA Compliance", "Git/GitHub", "Postman", "DBeaver"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable backend solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="space-y-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      label={skill.name}
                      percentage={skill.level}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* AWS Services */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            AWS Services Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {awsServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-700 p-4 rounded-lg border border-slate-200/50 dark:border-slate-600/50 text-center shadow-lg card-hover"
                >
                  <Icon className={`text-3xl ${service.color} mb-2 mx-auto`} />
                  <div className="font-medium">{service.name}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-cyan-100 dark:from-emerald-900/30 dark:to-cyan-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium text-sm border border-emerald-200/50 dark:border-emerald-700/50 hover:shadow-md transition-shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
