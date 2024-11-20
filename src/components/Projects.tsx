import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  topics: string[];
  language: string;
}

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/aliii390/repos?sort=updated');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Here are some of my recent projects. All of these are open source and available on GitHub.
        </p>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <div key={repo.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {repo.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center text-gray-600">
                      <Star size={16} className="mr-1" />
                      {repo.stargazers_count}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {repo.description || 'No description available'}
                </p>
                {repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.topics.map((topic) => (
                      <span 
                        key={topic}
                        className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-600"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
                {repo.language && (
                  <div className="mb-4">
                    <span className="text-sm text-gray-600">
                      Built with <span className="font-semibold">{repo.language}</span>
                    </span>
                  </div>
                )}
                <div className="flex gap-4">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;