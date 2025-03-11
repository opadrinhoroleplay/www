import React from 'react';
import { 
  siGithub, 
  siInstagram, 
  siFacebook, 
  siDiscord 
} from 'simple-icons';

const Footer = () => {
  return (
    <footer className="bg-neutral-900/50 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4">
            <img 
              src="logo.png" 
              alt="O Padrinho Logo" 
              className="w-8 h-auto filter brightness-100 contrast-125" 
              style={{ imageRendering: 'auto' }}
            />
            <div className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Padrinho Roleplay. Todos os direitos reservados.
            </div>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/opadrinhorp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-400 transition-colors"
            >
              <svg role="img" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d={siFacebook.path} />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/opadrinhoroleplay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-400 transition-colors"
            >
              <svg role="img" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d={siInstagram.path} />
              </svg>
            </a>
            {/* Chat */}
            <a
              href="http://chat.opadrinhoroleplay.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-400 transition-colors"
            >
              <svg role="img" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d={siDiscord.path} />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/opadrinhoroleplay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-400 transition-colors"
            >
              <svg role="img" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d={siGithub.path} />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-6 text-slate-400 text-sm text-center">Vem seguir-nos nas redes sociais e faz parte da nossa comunidade!</div>
      </div>
    </footer>
  );
};

export default Footer;