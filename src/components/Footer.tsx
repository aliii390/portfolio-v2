import React from 'react';
import { Heart } from 'lucide-react';
import Chip from '@mui/joy/Chip';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-200 mb-4 md:mb-0">
            © {new Date().getFullYear()} Ali SAID ERRAHMANI. Portfolio
          </p>
          <p className="flex items-center text-slate-200">
              Merci de votre visite !
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;