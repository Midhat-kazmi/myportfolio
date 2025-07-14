import React from "react";

export const Projects = () => {
  return (
    <section className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          My <span className="text-blue-600">Projects</span>
        </h1>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Here's a showcase of some featured projects I've worked on recently.
        </p>

        {/* Example Project Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">Project Title</h2>
            <p className="text-gray-600 mb-4">
              Short description of your project goes here.
            </p>
            <a
              href="https://github.com/Midhat-kazmi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Code →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
