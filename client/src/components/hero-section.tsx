import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin, Github, User } from "lucide-react";

export function HeroSection() {
  const handleDownloadResume = () => {
    // In a real implementation, this would trigger a download of the actual resume
    const link = document.createElement('a');
    link.href = '#'; // Would be the actual resume URL
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
              Passionate Backend Developer with expertise in Node.js, AWS cloud
              services, and scalable system architecture. Currently building
              enterprise-grade solutions at e-Mag Solutions, focusing on
              healthcare data processing and secure API development.
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
              <div className="w-full h-full rounded-3xl gradient-bg p-1">
                <div className="w-full h-full rounded-3xl bg-white dark:bg-slate-800 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
                      <User className="h-16 w-16 text-slate-400 dark:text-slate-500" />
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Professional Photo
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
