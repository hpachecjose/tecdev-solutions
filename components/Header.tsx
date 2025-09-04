import React from "react";

const Header: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors flex items-center"
        >
          <img
            src="/assets/images/logo_tecdev.jpg"
            alt="Logo TecDev"
            className="w-40 h-auto" // largura fixa, altura automática
          />
        </a>
        <nav className="flex items-center space-x-8">
          <a
            onClick={() => scrollTo("services")}
            className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer hidden md:block"
          >
            Serviços
          </a>
          <a
            onClick={() => scrollTo("about")}
            className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer hidden md:block"
          >
            Sobre nós
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Contato
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
