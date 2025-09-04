import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="lg:w-1/2">
                        <img 
                             src='/assets/images/manutencao.webp'
                            // src="https://picsum.photos/id/1018/800/600"
                            alt="Profissional de TI trabalhando em um PC"
                            className="rounded-xl shadow-2xl w-full h-auto object-cover"
                        />
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Por que nos escolher?</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Com anos de experiência no mercado, oferecemos um serviço transparente, ágil 
                            e focado na sua necessidade. Nosso objetivo é resolver seus problemas de
                             tecnologia de forma definitiva, com a máxima qualidade e confiança.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-blue-600 font-bold mr-3">✔</span>
                                <div>
                                    <h3 className="font-bold text-xl text-gray-800">Atendimento Personalizado</h3>
                                    <p className="text-gray-600">Entendo sua necessidade para oferecer a solução ideal e mais econômica.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 font-bold mr-3">✔</span>
                                <div>
                                    <h3 className="font-bold text-xl text-gray-800">Qualidade e Confiança</h3>
                                    <p className="text-gray-600">Utilizo as melhores práticas e ferramentas para garantir um serviço duradouro.</p>
                                </div>
                            </li>
                             <li className="flex items-start">
                                <span className="text-blue-600 font-bold mr-3">✔</span>
                                <div>
                                    <h3 className="font-bold text-xl text-gray-800">Agilidade e Pontualidade</h3>
                                    <p className="text-gray-600">Respeito o seu tempo, realizando o serviço de forma rápida e eficiente.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;