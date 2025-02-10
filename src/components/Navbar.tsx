export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 w-full">
        <div className="container mx-auto">
          <div className="flex items-center justify-center h-16"> {/* Réduit la hauteur */}
            <ul className="flex gap-8 text-lg"> {/* Augmente la taille de la police */}
              <li>
                <a href="#about" className="hover:text-gray-500 transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-gray-500 transition-colors">
                Experiences
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gray-500 transition-colors">
                Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-gray-500 transition-colors">
                Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}