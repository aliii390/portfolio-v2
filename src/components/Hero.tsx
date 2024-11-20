// import React from "react";
import aliImage from './image/ali.png';
import { TypeAnimation } from "react-type-animation";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="container mx-auto px-4 py-20 text-center">
        <img
        src={aliImage}
          alt="Ali SAID ERRAHMANI"
          className="w-32 h-32 rounded-full mx-auto mb-8 shadow-lg"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Ali SAID ERRAHMANI
        </h1>
        <div className="text-xl md:text-2xl text-gray-600 mb-8 h-8">
          <TypeAnimation
            sequence={[
              "Développeur Web Junior",
              2000,
              "Bienvenue ",
              2000,
              "Sur mon portfolio :)",
              2000,
            ]}
            repeat={Infinity}
          />
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Passionné par la création d'applications web à la fois esthétiques et
          fonctionnelles, je suis constamment en quête d'apprentissage et
          d'exploration de nouvelles technologies pour concevoir des solutions
          toujours plus performantes.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
          >
          Contact
          </a>
        </div>
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="text-gray-400" size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
