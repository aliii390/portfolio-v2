import { Mail, MapPin, Github, Linkedin , FileDown } from 'lucide-react';
import cv from "./image/cv.pdf";

export default function ContactSection() {
  return (
    <div className="min-h-[70vh] bg-gradient-to-b from-gray-900 via-gray-850 to-gray-900 py-8 px-6 sm:px-8 lg:px-16">
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Contactez-moi
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Une question ? Un projet ? N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8  w-full max-w-md">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-white">
                <Mail className="h-6 w-6 text-purple-400" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:alli.said.errahmani@gmail.com" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
                  alli.said.errahmani@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-white">
                <MapPin className="h-6 w-6 text-purple-400" />
                <div>
                  <p className="font-medium">Localisation</p>
                  <p className="text-sm text-gray-300">Saint-Etienne, France</p>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <a target='_blank' href="https://github.com/aliii390" className="p-2 bg-white/5 rounded-full hover:bg-purple-400/20 transition-colors">
                  <Github className="h-6 w-6 text-white" />
                </a>
                <a target='_blank' href="https://www.linkedin.com/in/ali-said-errahmani-a41ba1295/" className="p-2 bg-white/5 rounded-full hover:bg-purple-400/20 transition-colors">
                  <Linkedin className="h-6 w-6 text-white" />
                </a>
                <a href={cv}  target='_blank' className="p-2 bg-white/5 rounded-full hover:bg-purple-400/20 transition-colors">
                    <FileDown className="h-6 w-6 text-white" />
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
