import { GraduationCap, Award } from "lucide-react";

export function EducationSection() {
  const education = {
    degree: "Master of Computer Application (MCA)",
    institution: "Dr. Ram Manohar Lohia Avadh University, Ayodhya",
    period: "2020 - 2022",
    percentage: "75%",
  };

  const certifications = [
    {
      title: "HackerRank Certifications",
      details: "Node.js (Basic), JavaScript (Basic & Intermediate)",
      color: "green",
    },
    {
      title: "Scaler Certification",
      details: "Node.js Development",
      color: "blue",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-xl p-6 shadow-lg card-hover border border-violet-200/50 dark:border-violet-700/50">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{education.degree}</h3>
                    <p className="text-primary font-medium mb-2">
                      {education.institution}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 dark:text-slate-300">
                        {education.period}
                      </span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {education.percentage}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-rose-50 to-amber-50 dark:from-rose-900/20 dark:to-amber-900/20 rounded-xl p-6 shadow-lg card-hover border border-rose-200/50 dark:border-rose-700/50"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 ${
                        cert.color === "green"
                          ? "bg-green-100 dark:bg-green-900"
                          : "bg-blue-100 dark:bg-blue-900"
                      } rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <Award
                        className={`h-6 w-6 ${
                          cert.color === "green"
                            ? "text-green-600 dark:text-green-400"
                            : "text-blue-600 dark:text-blue-400"
                        }`}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{cert.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        {cert.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
