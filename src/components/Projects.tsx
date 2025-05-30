import { useEffect, useState } from "react";
import { Github, Star } from "lucide-react";
import aliPortfolioImage from "./image/test.png";
import tpMeteo from "./image/meteo.png";
import drump from "./image/drumpad.png";
import chatbot from "./image/chatbot.png";
import book from "./image/bookm.png";
import hasard from "./image/hasard.png";
import luxury from "./image/luxury.png";

// ExternalLink,

interface Repository {
  owner: string;
  repo: string;
  link: string;
  image: string;
  website: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  description: string;
}

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://gh-pinned-repos-tsj7ta5xfhep.deno.dev/?username=aliii390"
        );
        const datas = await response.json();

        datas.forEach((data: Repository) => {
          if (data.repo === "Ali-Portfolio") {
            data.image = aliPortfolioImage;
            data.website = "https://aliii390.github.io/Ali-Portfolio/";
          }

          if (data.repo === "BookMarket-refacto") {
            data.image = book;
            data.language = "Php";
            data.website =
              "https://ali-bookmarket.pro4.garage404.com/public/pageUn.php";
            data.link = "https://github.com/aliii390/BookMarket-refacto";
          }

          if (data.repo === "ChatBot") {
            data.image = chatbot;
            data.language = "HTML CSS, Python , Flask";
            data.website = "https://github.com/aliii390/ChattBot";
          }

          if (data.repo === "SoundBoard") {
            data.image = drump;
            data.language = "HTML CSS , Javascript";
            data.website = "https://aliii390.github.io/SoundBoard/";
            data.link = "https://github.com/aliii390/SoundBoard";
          }

          if (data.repo === "tp-meteo") {
            data.image = tpMeteo;
            data.website = "https://tp-meteo.vercel.app/";
            data.link = "https://github.com/aliii390/tp-meteo";
          }
          if (data.repo === "Hasard404") {
            data.image = hasard;
            data.language = "HTML CSS, Javascript";
            data.website = "https://aliii390.github.io/hasar404/";
            data.link = "https://github.com/aliii390/hasar404";
          }
          if (data.repo === "LuxuryService") {
            data.image = luxury;
            data.language = "Symfony";
            data.website = "https://ali-luxury.pro4.garage404.com";
            data.link = "https://github.com/aliii390/LuxuryService";
          }
        });

        setRepos(datas);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // js pour les images

  // const projectImages = document.querySelectorAll('.projets');

  // projectImages?.forEach((image) => {
  //   console.log(image);

  // })

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 "
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-white md:text-4xl font-bold text-center mb-4">
          Mes projets
        </h2>
        <p className="text-white text-center max-w-2xl mx-auto mb-12">
          Voici quelques-uns de mes récents projets. Tous ces éléments sont open
          source et disponibles sur GitHub.
        </p>

        {/* if ? else : */}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <article
                key={repo.repo}
                className=" bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6  "
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {repo.repo}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center text-gray-600">
                      <Star size={16} className="mr-1" />
                      {repo.stars}
                    </span>
                  </div>
                </div>

                {/* partie image */}
                <div className="w-full h-[250px] mb-3  flex items-center justify-center overflow-hidden group relative">
                  <a target="_blank" href={repo.website}>
                    <img
                      src={repo.image}
                      alt=""
                      className="absolute top-0 left-0 w-full h-auto group-hover:animate-scroll"
                    />
                  </a>
                </div>

                {/* && = if */}
                <p className="text-white text-sm w-80">{repo.description}</p>

                {repo.language && (
                  <div className="mb-4">
                    <span className="text-sm text-white">
                      <span style={{ color: repo.languageColor }}>●</span>{" "}
                      <span className="font-semibold">{repo.language}</span>
                    </span>
                  </div>
                )}

                <div className="flex gap-4">
                  <a
                    href={repo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-blue-600 transition-colors"
                  >
                    <Github size={16} className="mr-1 text-white" />
                    Code
                  </a>
                </div>
              </article>
            ))}
          </section>
        )}
      </div>
    </section>
  );
};

export default Projects;
