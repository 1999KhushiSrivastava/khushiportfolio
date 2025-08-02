import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin, Github, User } from "lucide-react";
import resumePdf from "@assets/khushi_resume_4_1754129897739.pdf";

export function HeroSection() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Khushi_Srivastava_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Khushi{" "}
                <span className="text-gradient">Srivastava</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300">
                Backend Developer & Cloud Solutions Architect
              </h2>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Backend Developer with 2+ years of experience in building scalable APIs and 
              cloud-native solutions using Node.js, Express.js, TypeScript, MongoDB, and AWS. 
              Proven track record in AWS cloud migration, RESTful API development, and secure 
              data handling for high-performance applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleContactClick}
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={handleDownloadResume}
                className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg font-medium"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="flex space-x-6">
              <a
                href="#"
                className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:rimghim220@gmail.com"
                className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="w-full h-full rounded-3xl gradient-bg p-1 animate-float">
                <div className="w-full h-full rounded-3xl bg-white dark:bg-slate-800 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-emerald-100 to-cyan-100 dark:from-emerald-900 dark:to-cyan-900 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-700 shadow-2xl">
                      <User className="h-16 w-16 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                      Khushi Srivastava
                    </p>
                  </div>
                </div>
              </div>
              {/* Enhanced decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-violet-400/30 to-rose-400/30 rounded-full animate-pulse-slow"></div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
