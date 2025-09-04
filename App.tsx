import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
    // IMPORTANTE: Substitua pelo número de WhatsApp real, incluindo o código do país (ex: 55 para Brasil).
    const whatsappNumber = "5527993111694"; 
    const contactMessage = "Olá! Vi seu site e gostaria de solicitar um orçamento.";

    return (
        <div className="relative overflow-x-hidden">
            <Header />
            <main>
                <HeroSection whatsappNumber={whatsappNumber} message={contactMessage} />
                <ServicesSection />
                <AboutSection />
                <ContactSection whatsappNumber={whatsappNumber} message={contactMessage} />
            </main>
            <Footer />
            <WhatsAppButton phoneNumber={whatsappNumber} message={contactMessage} />
        </div>
    );
};

export default App;