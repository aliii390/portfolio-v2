import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-gray-800">
            Ali<span className="text-blue-600">.dev</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">
              Acceuil
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              A Propos
            </a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">
              Projets
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
            <div className="flex items-center gap-4">
              <a href="https://github.com/aliii390" target="_blank" rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/ali-said-errahmani" target="_blank" rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:ali.said.errahmani@gmail.com" 
                className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">
              Acceuil
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              A Propos
            </a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">
              Projets
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
            <div className="flex items-center gap-4 pt-4 border-t">
              <a href="https://github.com/aliii390" target="_blank" rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/ali-said-errahmani" target="_blank" rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:ali.said.errahmani@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;