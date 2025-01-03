// import React from "react";
import { Code, Database, Globe } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    },
    { category: "Backend", items: [ "Php"  ,"SQL"] },
    { category: "Tools", items: ["Git", "VS Code",  "Figma" , "Github" , "Trello" , "PhpMyAdmin"] },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-800 via-blue-900 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          A Propos De Moi
        </h2>
        <p className="text-white text-center max-w-2xl mx-auto mb-12">
          Passionné par le développement web, voici les compétences que j'ai
          acquises.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 ">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
              <Globe className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Développement Frontend</h3>
            <p className="text-white">
              En tant que développeur frontend débutant, je me spécialise dans
              la création d'interfaces utilisateur réactives et intuitives en
              utilisant les technologies web modernes.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
              <Code className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Code propre</h3>
            <p className="text-white">
            Rédaction de code maintenable, efficace et bien documenté selon les meilleures pratiques
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
              <Database className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Intégration back-end</h3>
            <p className="text-white">
            Créer des API robustes et gérer des bases de données pour les applications full-stack
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {skills.map((skillSet) => (
            <div key={skillSet.category} className="bg-white rounded-lg p-6">
              <h3 className="text-xl text-black font-semibold mb-4">
                {skillSet.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillSet.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-lg hover:bg-blue-100 hover:text-gray-600  cursor-pointer"
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
