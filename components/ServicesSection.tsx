import React from 'react';
import { OperatingSystemIcon, SoftwareIcon, HardwareIcon } from './icons';

const services = [
    {
        icon: <OperatingSystemIcon className="h-10 w-10 text-white" />,
        title: "Instalação de Sistemas",
        description: "Formatação e instalação de Windows, macOS e Linux. Deixo seu computador pronto para uso, rápido e seguro."
    },
    {
        icon: <SoftwareIcon className="h-10 w-10 text-white" />,
        title: "Instalação de Software",
        description: "Instalação e configuração de programas essenciais como Pacote Office, antivírus, drivers e softwares específicos."
    },
    {
        icon: <HardwareIcon className="h-10 w-10 text-white" />,
        title: "Manutenção de Hardware",
        description: "Limpeza interna, upgrade de memória RAM e SSD, troca de peças e otimização para máxima performance."
    }
];

const ServiceCard: React.FC<{ service: typeof services[0] }> = ({ service }) => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-600 mb-6 mx-auto">
                {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">{service.title}</h3>
            <p className="text-gray-600 text-center">{service.description}</p>
        </div>
    );
};

const ServicesSection: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Nossos Serviços</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Soluções completas para garantir o melhor desempenho do seu equipamento.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;