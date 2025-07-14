import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
    >
      <div className="container max-w-3xl mx-auto text-center z-10 bg-white/70 backdrop-blur-lg rounded-xl shadow-lg p-8">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="block opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 animate-fade-in-delay-1">
              Midhat
            </span>
            <span className="block text-gray-700 font-light opacity-0 animate-fade-in-delay-2">
              Web Developer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mx-auto opacity-0 animate-fade-in-delay-3">
            I craft beautiful, modern web experiences using the latest technologies.<br />
            Passionate about front-end, I build interfaces that are both stunning and functional.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-500 mb-2">Scroll</span>
        <ArrowDown className="h-6 w-6 text-blue-500" />
      </div>
    </section>
  );
};