import { Mail, Phone, Github, Linkedin, } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-gray-400 mb-6">Ready to collaborate on your next project</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:anikdatta051@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
            <a href="tel:+8801707139089" className="text-gray-400 hover:text-white transition-colors">
              <Phone size={24} />
            </a>
            <a href="https://github.com/anik511" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/anik-datta-1051" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-400">&copy; 2025 Anik Datta. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
