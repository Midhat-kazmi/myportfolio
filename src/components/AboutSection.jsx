import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-12 px-2 relative">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground text-sm">
              With over 5 years of experience in web development, I specialize in creating responsive, accessible, and performant web applications using modern technologies.
            </p>

            <p className="text-muted-foreground text-sm">
              I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 pt-2 justify-center">
              <a href="#contact" className="cosmic-button text-sm px-4 py-2">
                Get In Touch
              </a>
              <a
                href=""
                className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-sm"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="gradient-border p-4 card-hover">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base">Web Development</h4>
                  <p className="text-muted-foreground text-xs">
                    Creating responsive websites and web applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-4 card-hover">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base">UI/UX Design</h4>
                  <p className="text-muted-foreground text-xs">
                    Designing intuitive user interfaces and seamless user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-4 card-hover">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base">Project Management</h4>
                  <p className="text-muted-foreground text-xs">
                    Leading projects from conception to completion with agile methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};