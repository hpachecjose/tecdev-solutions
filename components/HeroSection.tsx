import React from 'react';

interface HeroSectionProps {
    whatsappNumber: string;
    message: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ whatsappNumber, message }) => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <section
            id="home"
            className="relative bg-gray-100"
        >
            <div className="absolute inset-0 bg-white/50 z-0"></div>
            <div className="container mx-auto px-6 py-24 md:py-32 lg:py-40 relative z-10 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                        Soluções de TI <span className="text-blue-600">Rápidas e Confiáveis</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        Somos especilistas em instalação de sistemas operacionais, configuração de softwares e manutenção completa de hardware.
                    </p>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
                    >
                        Entrar em contato
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;