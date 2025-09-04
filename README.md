

# Arrume a seguinte bagunça: \# 🖥️ Expert TI - Soluções em Tecnologia

<div align="center">
  <img src="assets/images/tecdev_logo.png" alt="Expert TI Logo" width="200"/>
  **Site profissional moderno para serviços de TI com foco em instalação de sistemas operacionais, software e manutenção de hardware.**
  [![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.2.0-purple.svg)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.12-cyan.svg)](https://tailwindcss.com/)
</div>

## 📋 Sobre o Projeto

Este é um site institucional desenvolvido para um técnico de TI especializado em soluções tecnológicas. O projeto apresenta uma interface moderna, responsiva e minimalista, focada na conversão de visitantes em clientes através de contato direto via WhatsApp.

### 🎯 Objetivo

Criar uma presença digital profissional que demonstre expertise técnica e facilite o contato com potenciais clientes, oferecendo uma experiência de usuário fluida e moderna.

## ✨ Características

- **🎨 Design Responsivo**: Interface adaptável para desktop, tablet e mobile
- **⚡ Performance Otimizada**: Construído com React 19 e Vite para carregamento rápido
- **📱 Integração WhatsApp**: Botão flutuante e links diretos para contato instantâneo
- **🎭 UI Moderna**: Interface limpa e profissional com Tailwind CSS
- **🔒 TypeScript**: Código tipado para maior confiabilidade e manutenibilidade
- **♿ Acessibilidade**: Componentes desenvolvidos seguindo boas práticas de acessibilidade


## 🛠️ Tecnologias Utilizadas

### Frontend

- **React 19.1.1** - Biblioteca para construção de interfaces
- **TypeScript 5.8.2** - Superset do JavaScript com tipagem estática
- **Vite 6.2.0** - Build tool moderno e rápido
- **Tailwind CSS 4.1.12** - Framework CSS utilitário


### Ferramentas de Desenvolvimento

- **PostCSS** - Processador CSS
- **Autoprefixer** - Adiciona prefixos CSS automaticamente
- **ESLint** - Linter para JavaScript/TypeScript


## 🚀 Serviços Oferecidos

### 💻 Instalação de Sistemas Operacionais

- Formatação e instalação de Windows, macOS e Linux
- Configuração inicial e otimização do sistema
- Backup e recuperação de dados


### 📦 Configuração de Software

- Instalação do Pacote Office
- Configuração de antivírus e segurança
- Instalação de drivers e softwares específicos
- Configuração de programas essenciais


### 🔧 Manutenção de Hardware

- Limpeza interna e externa
- Upgrade de memória RAM e SSD
- Troca de peças e componentes
- Otimização para máxima performance


## 🏗️ Estrutura do Projeto

```
expert-ti---soluções-em-tecnologia/
├── assets/
│   └── images/           # Imagens e logos
├── components/           # Componentes React
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── icons.tsx
│   ├── ServicesSection.tsx
│   └── WhatsAppButton.tsx
├── App.tsx              # Componente principal
├── index.tsx            # Ponto de entrada
├── index.html           # Template HTML
├── package.json         # Dependências e scripts
├── tsconfig.json        # Configuração TypeScript
├── vite.config.ts       # Configuração Vite
└── metadata.json        # Metadados do projeto
```


## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn


### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/expert-ti---soluções-em-tecnologia.git
cd expert-ti---soluções-em-tecnologia
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute em modo desenvolvimento**

```bash
npm run dev
```

4. **Acesse o projeto**

```
http://localhost:5173
```


### Build para Produção

```bash
# Gerar build otimizado
npm run build
# Visualizar build localmente
npm run preview
```


## ⚙️ Configuração

### WhatsApp

Para configurar o número do WhatsApp, edite o arquivo `App.tsx`:

```typescript
const whatsappNumber = "5527993111694"; // Substitua pelo seu número
const contactMessage = "Olá! Vi seu site e gostaria de solicitar um orçamento.";
```

**Importante**: Inclua o código do país (ex: 55 para Brasil) no número.

## 🎨 Personalização

### Cores

As cores principais podem ser personalizadas no arquivo de configuração do Tailwind CSS ou diretamente nos componentes.

### Conteúdo

- **Textos**: Edite os componentes em `components/`
- **Imagens**: Substitua as imagens em `assets/images/`
- **Serviços**: Modifique o array `services` em `ServicesSection.tsx`


## 📱 Funcionalidades

### Seções do Site

- **Header**: Navegação principal com logo
- **Hero Section**: Apresentação principal com call-to-action
- **Serviços**: Catálogo de serviços oferecidos
- **Sobre**: Informações sobre a empresa
- **Contato**: Formulário e informações de contato
- **Footer**: Links e informações adicionais
- **WhatsApp Button**: Botão flutuante para contato direto


### Recursos Técnicos

- Componentes reutilizáveis
- Props tipadas com TypeScript
- Responsividade mobile-first
- Animações e transições suaves
- SEO otimizado


## 🚀 Deploy

O projeto pode ser deployado em qualquer plataforma que suporte aplicações React:

- **Vercel**: Deploy automático via GitHub
- **Netlify**: Deploy com drag-and-drop
- **GitHub Pages**: Deploy gratuito para sites estáticos
- **Firebase Hosting**: Deploy do Google


### Deploy na Vercel (Recomendado)

1. Conecte seu repositório GitHub à Vercel
2. Configure o build command: `npm run build`
3. Configure o output directory: `dist`
4. Deploy automático a cada push

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**Expert TI - Soluções em Tecnologia**

- **WhatsApp**: [Entre em contato](https://wa.me/5527993111694)
- **Email**: [Seu email aqui]
- **Website**: [Seu domínio aqui]
---
<div align="center">
  <p>Desenvolvido com ❤️ para oferecer soluções tecnológicas de qualidade</p>
  <p>© 2024 Expert TI - Soluções em Tecnologia. Todos os direitos reservados.</p>
</div>

# 

Beleza 🚀! Eu organizei toda a documentação para ficar mais clara, limpa e padronizada em estilo de **README profissional**. Removi redundâncias, corrigi espaçamentos e alinhei a hierarquia dos títulos. Aqui está a versão arrumada:

***

# 🖥️ Expert TI - Soluções em Tecnologia

<div align="center">
  <img src="assets/images/tecdev_logo.png" alt="Expert TI Logo" width="200"/>
  
  <p><strong>Site profissional moderno para serviços de TI com foco em instalação de sistemas operacionais, software e manutenção de hardware.</strong></p>
  
  [
  [
  [
  [
</div>

***

## 📋 Sobre o Projeto

Website institucional desenvolvido para um técnico de TI especializado em soluções tecnológicas.
Possui **interface moderna, responsiva e minimalista**, com foco em conversão de visitantes em clientes por meio de contato direto via WhatsApp.

### 🎯 Objetivo

- Criar presença digital profissional
- Demonstrar expertise técnica
- Facilitar o contato de potenciais clientes
- Oferecer uma experiência fluida e moderna

***

## ✨ Características

- 🎨 **Design Responsivo**: Desktop, tablet e mobile
- ⚡ **Performance Otimizada**: Construído com React + Vite
- 📱 **Integração WhatsApp**: Botão flutuante e links diretos
- 🎭 **UI Moderna**: Layout limpo e profissional com Tailwind CSS
- 🔒 **TypeScript**: Código seguro e de fácil manutenção
- ♿ **Acessibilidade**: Seguindo boas práticas de UX

***

## 🛠️ Tecnologias Utilizadas

### Frontend

- React **19.1.1**
- TypeScript **5.8.2**
- Vite **6.2.0**
- Tailwind CSS **4.1.12**


### Ferramentas de Desenvolvimento

- PostCSS
- Autoprefixer
- ESLint

***

## 🚀 Serviços Oferecidos

### 💻 Instalação de Sistemas Operacionais

- Windows, macOS e Linux
- Configuração inicial e otimização
- Backup e recuperação de dados


### 📦 Configuração de Software

- Pacote Office
- Antivírus e segurança
- Drivers e softwares específicos
- Programas essenciais


### 🔧 Manutenção de Hardware

- Limpeza interna e externa
- Upgrade de memória RAM e SSD
- Troca de peças e componentes
- Otimização de performance

***

## 🏗️ Estrutura do Projeto

```
expert-ti---soluções-em-tecnologia/
├── assets/
│   └── images/           # Imagens e logos
├── components/           # Componentes React
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── icons.tsx
│   ├── ServicesSection.tsx
│   └── WhatsAppButton.tsx
├── App.tsx               # Principal
├── index.tsx             # Ponto de entrada
├── index.html            # Template HTML
├── package.json          # Dependências e scripts
├── tsconfig.json         # Configuração TS
├── vite.config.ts        # Configuração Vite
└── metadata.json         # Metadados
```


***

## ⚙️ Como Executar

### Pré-requisitos

- Node.js (≥ v18)
- npm ou yarn


### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/expert-ti---soluções-em-tecnologia.git
cd expert-ti---soluções-em-tecnologia

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

Acesse:
👉 `http://localhost:5173`

### Build para Produção

```bash
npm run build     # Gerar build otimizado
npm run preview   # Visualizar build localmente
```


***

## 🔧 Configuração

### WhatsApp

Edite `App.tsx`:

```ts
const whatsappNumber = "5527993111694"; // Código do país + número
const contactMessage = "Olá! Vi seu site e gostaria de solicitar um orçamento.";
```


***

## 🎨 Personalização

- **Cores**: Definidas no `tailwind.config.js`
- **Textos**: Diretamente nos componentes (`components/`)
- **Imagens**: Substitua em `assets/images/`
- **Serviços**: Editáveis em `ServicesSection.tsx`

***

## 📱 Funcionalidades

### Seções do Site

- Header
- Hero Section
- Serviços
- Sobre
- Contato
- Footer
- Botão WhatsApp


### Recursos Técnicos

- Componentes reutilizáveis
- Tipagem com TypeScript
- Layout **mobile-first**
- Animações suaves
- SEO otimizado

***

## 🚀 Deploy

Compatível com qualquer hospedagem de apps React:

- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**

***

## 🤝 Contribuição

1. Faça um **fork**
2. Crie uma **branch** (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças
4. Push para sua branch
5. Abra um Pull Request

***

## 📄 Licença

Este projeto está sob a licença **MIT** – veja [LICENSE](LICENSE).

***

## 📞 Contato

**Expert TI - Soluções em Tecnologia**
📱 WhatsApp: [Clique para conversar](https://wa.me/5527993111694)
📧 Email: *seu-email@dominio.com*
🌐 Website: *seu-dominio.com*

***

<div align="center">
  <p>💻 Desenvolvido com profissionalismo para oferecer <strong>soluções tecnológicas de qualidade</strong>.</p>
  <p>© 2024 Expert TI - Todos os direitos reservados.</p>
</div>

***

👉 Prontinho! Agora tá organizado no formato **README.md de projeto profissional no GitHub**.

Quer que eu também faça uma **versão mais curta e resumida** (pitch de apresentação para clientes/portfólio), ou prefere manter só esse README técnico completo?


