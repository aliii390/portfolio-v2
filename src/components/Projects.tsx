import React, { useEffect, useState } from "react";
import { Github, Star } from "lucide-react";
import aliImage from "./image/ali.png";
import freezeImage from "./image/freeze1.png";
import aliPortfolioImage from "./image/test.png";


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

        datas.forEach((data) => {
          if (data.repo === "Ali-Portfolio") {
            data.image = aliPortfolioImage;
            data.website = "https://aliii390.github.io/Ali-Portfolio/";
          }

          if (data.repo === "assistant-vocal") {
            data.image = freezeImage;
          }

          if (data.repo === "QR-Code") {
            data.image = aliImage;
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
    <section id="projects" className="py-20 bg-gray ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-black md:text-4xl font-bold text-center mb-4">
          Mes projets
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
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
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6  "
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
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

                <div className="w-full h-[250px] mb-3 border flex items-center justify-center overflow-hidden group relative">
                  <a href={repo.website}>
                    <img
                      src={repo.image}
                      alt=""
                      className="absolute top-0 left-0 w-full h-auto group-hover:animate-scroll"
                    />
                  </a>
                </div>

                {/* && = if */}

                {repo.language && (
                  <div className="mb-4">
                    <span className="text-sm text-gray-600">
                      Codez en{" "}
                      <span className="font-semibold">{repo.language}</span>
                    </span>
                  </div>
                )}

                <div className="flex gap-4">
                  <a
                    href={repo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github size={16} className="mr-1" />
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
