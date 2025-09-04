import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-400 py-6">
            <div className="container mx-auto px-6 text-center">
                <p>&copy; {currentYear} TecDev. Todos os direitos reservados.</p>
                <p className="text-sm mt-1">Serviços de tecnologia com qualidade e confiança.</p>

                {/* <p className="text-sm mt-1">CNPJ: 12.345.678/0001-90</p> */}
                 {/* <p className="text-sm mt-1">Desenvolvido por <a href="https://www.henqo.com.br" target="_blank" rel="noopener noreferrer" className="text-blue-600">Henqo Solutions</a></p> */}
            </div>
        </footer>
    );
};

export default Footer;