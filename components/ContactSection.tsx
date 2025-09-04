import React from 'react';
import { WhatsAppIcon } from './icons';

interface ContactSectionProps {
    whatsappNumber: string;
    message: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ whatsappNumber, message }) => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <section id="contact" className="py-20 bg-gray-800 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Pronto para resolver seus problemas de TI?</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                    Entre em contato agora mesmo para um orçamento rápido e sem compromisso. A solução que você precisa está a uma mensagem de distância.
                </p>
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                    <WhatsAppIcon className="h-7 w-7" />
                    Solicitar Orçamento no WhatsApp
                </a>
            </div>
        </section>
    );
};

export default ContactSection;