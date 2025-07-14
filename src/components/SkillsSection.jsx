import { useState } from "react";

const skills = [
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Git/GitHub", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-white text-primary border-gray-300 hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white rounded-xl p-4 shadow hover:shadow-md transition duration-300 text-center text-sm font-semibold text-gray-700"
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
