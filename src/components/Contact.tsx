
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';


const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Entrer en contact</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        Je suis toujours ouvert à de nouvelles opportunités et collaborations. N'hésitez pas à me contacter !
        </p>

        <div className="max-w-4xl mx-auto grid grid-cols-1  md:grid-cols-2 gap-8 md:flex md:ml-[8%] sm:flex  sm:ml-[25%] 2xl:ml-[20%]">
          <div className="bg-white rounded-lg shadow-md p-8 md:w-[90%] md:flex md:flex-col md:items-center sm:flex sm:flex-col sm:items-center ">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-blue-600 mr-4" size={24} />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:ali.said.errahmani@gmail.com" className="text-gray-600 hover:text-blue-600">
                    alli.said.errahmani@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="text-blue-600 mr-4" size={24} />
                <div>
                  <p className="font-medium">Localisation</p>
                  <p className="text-gray-600">Saint Etienne, France</p>
                </div>
              </div>
              <div className="flex items-center">
                <Linkedin className="text-blue-600 mr-4" size={24} />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/ali-said-errahmani-a41ba1295/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    /in/ali-said-errahmani
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Github className="text-blue-600 mr-4" size={24} />
                <div>
                  <p className="font-medium">GitHub</p>
                  <a 
                    href="https://github.com/aliii390" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    /aliii390
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-6">envoyer un message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Votre mail"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Votre message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Envoyer
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;