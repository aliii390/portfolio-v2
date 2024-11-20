// import React from "react";
import { Code, Database, Globe } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
    },
    { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "SQL"] },
    { category: "Tools", items: ["Git", "VS Code",  "Figma"] },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About Me
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Passionné par le développement web, voici les compétences que j'ai
          acquises.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
            <p className="text-gray-600">
              En tant que développeur frontend débutant, je me spécialise dans
              la création d'interfaces utilisateur réactives et intuitives en
              utilisant les technologies web modernes.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
            <p className="text-gray-600">
              Writing maintainable, efficient, and well-documented code
              following best practices.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Backend Integration</h3>
            <p className="text-gray-600">
              Building robust APIs and managing databases for full-stack
              applications.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillSet) => (
            <div key={skillSet.category} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                {skillSet.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillSet.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;