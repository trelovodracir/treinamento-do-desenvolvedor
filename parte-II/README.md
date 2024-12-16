# Treinamento do Desenvolvedor - Parte II - React em JS + TailwindCSS + SWC + Vite + React Router v7 + React Helmet

**Criado em:** 16-dez-2024 *(faltam 9 dias para o aniversário de 297 do nascimento de Isaac Newton!)*
**Ano**: 296 a.N. (After Newton) - Merry Newton"mass"!
**Criado por**: Ricardo Cezar Volert

Antes de mais tudo, quero que se você está lendo isso por ter encontrado sem querer, saiba que se trata da segunda parte de meus estudos sobre JavaScript e que este material não precisa fazer sentido para você, pois são minhas anotações, mas de alguma forma está carregada de exemplos para possibilitar projetos futuros.

Confesso que seria um hipócrita se falar que não utilizei auxilio de AI para o desenvolvimento desta primeira parte, mas confesso que todo material foi testado e está sendo estudado em peso para o desenvolvimento de aplicações futuras, inclusive com novas atualizações em novas partes, e dando lugar a explorar outras linguagens.

... na parte I, foi tratado sobre HTML, CSS, Bootstrap no HTML, Tailwind no HTML, JavaScript, Node.JS, API RESTful e Express. Ele é um bom ponto de partida para ver algumas coisas sobre FrontEnd e a criação de server JavaScript na runtime node, através do Express que é ótimo para BackEnd.

Agora, esta nova parte do **Tutorial de Treinamento Desenvolvedor** é focada em complementos sobre JavaScript, focando em FrontEnd, principalmente em SEO, Acessibilidade e Rotas. Nisso serão utilizados:
- React: Biblioteca
- TailwindCSS: framework CSS (necessita do `postcss` e  `autoprefixer`)
- Vite: Ferramenta de Build e DEV
- SWC: Transpilador
- React Router v7: biblioteca que permite gerenciar a navegação entre páginas ou componentes no React. Ele possibilita criar um site **SPA (Single Page Application)**, onde a navegação entre "páginas" ocorre sem recarregar o navegador.
- React Helmet: biblioteca que permite gerenciar as meta tags do HTML

> **Observação:** Estava previsto neste caderno abordar também sobre banco de dados, mais especificamente o MongoDB (Banco de Dados NoSQL) e o PostgreSQL (Banco de Dados SQL). Infelizmente, este conteúdo deverá ser adiado, pois devido a quantidade de detalhes das ferramentas, permanecerão em *stand-by*.

> Este material foi desenvolvido sem gastar um centavo em cursos. Diferentemente dos que paguei e não acessei, via de exemplo Alura, Udemy, etc.

---
# React (Frontend) versus Express (Backend)

Anteriormente foi utilizado o **Express**: um framework minimalista para construir **servidores web** e **APIs** em Node.JS, focado no backend, que facilita o gerenciamento de rotas, middleware, e integrações com bancos de dados e outras APIs. Além disso:
- Ideal para criar APIs RESTful, serviços backend e servidores que fornecem dados para um frontend.
- Quanto a arquitetura:
	- Baseado em middleware e rotas.
    - Permite manipular requisições HTTP (GET, POST, PUT, DELETE, etc.).
    - Integrações com bancos de dados e outras ferramentas são feitas usando bibliotecas externas.
    - É mais abrangente no backend, podendo lidar com lógica de negócios, segurança, autenticação, etc.
- **Express** não tem sintaxe especial. Trabalha diretamente com JavaScript e lida principalmente com objetos de requisição e resposta.

Agora, vamos iniciar com **React** que é uma biblioteca JavaScript usada para construir **interfaces de usuário (UIs)** dinâmicas e interativas, especialmente em aplicações de página única (SPAs - Single Page Applications). É focada no Frontend e rrabalha principalmente com a renderização de componentes no navegador.
- Quanto a sua arquitetura:
	- Baseado em componentes reutilizáveis que representam partes da UI.
	- Utiliza o **Virtual DOM** para atualizações eficientes.
	- Geralmente trabalha com bibliotecas complementares como React Router para roteamento e Redux/Context API para gerenciamento de estado.
	- É apenas a "camada de visão" no padrão MVC (Model-View-Controller).
- **React** usa JSX (JavaScript XML), uma extensão de sintaxe que mistura JavaScript com HTML-like para construir componentes.

Se então React é voltado para o visual e Express é para o backend, então o ideal é integrar ambos em uma aplicação:
- React no frontend para gerenciar a UI.
- Express no backend para fornecer dados e lógica de negócios via API.
- Por exemplo, um aplicativo React consome dados de um servidor Express por meio de endpoints HTTP.

| Característica | React                     | Express                       |
| -------------- | ------------------------- | ----------------------------- |
| **Tipo**       | Biblioteca frontend       | Framework backend             |
| **Foco**       | Interface de usuário      | Servidor web/APIs             |
| **Baseado em** | Componentes e Virtual DOM | Middleware e rotas            |
| **Uso comum**  | SPAs e UIs interativas    | APIs RESTful e lógica backend |
| **Execução**   | Navegador                 | Servidor (Node.js)            |
# React (biblioteca)

- Uma vez que temos um ambiente de execução JavaScript do lado do servidor (`node`), precisamos de uma biblioteca JavaScript para criar a interface de usuário (UI) no frontend e é aqui que entra o React. 
- O React atualiza automaticamente partes da interface do usuário sem recarregar a página inteira.
- **MOBILE**: O React inspirou o React-Native que possibilita a criação de aplicativos móveis nativos para Android e iOS utilizando JavaScript (traduzindo os componentes React para elementos nativos, como botões e listas).
- **WEB**: Quando queremos renderizar componentes React no DOM do navegador, utilizamos o React-DOM, podendo transformar os componentes React em elementos HTML reais que aparecem na página. Ele permite que React funcione diretamente no navegador, conectando os componentes React ao DOM da página.
# Vite (ferramenta de build e dev)
- O Vite é uma **ferramenta de build e desenvolvimento** moderna para projetos JavaScript e frameworks como React, Vue e Svelte. Ele usa **ES Modules (ESM)** para carregar arquivos de forma rápida e eficiente durante o desenvolvimento, substituindo ferramentas mais antigas como Webpack.
- Ele atualiza mudanças quase instantaneamente no navegador (desenvolvimento rápido). Cria versões otimizadas para produção de aplicativos React, Vue, etc. (build eficiente)

# Resumo comparativo

| **Ferramenta**   | **Tipo**                | **Uso principal**                                                               |
| ---------------- | ----------------------- | ------------------------------------------------------------------------------- |
| **Node.js**      | Runtime                 | Executar JavaScript no backend ou fora do navegador.                            |
| **React**        | Biblioteca              | Criar interfaces de usuário no frontend.                                        |
| **React Native** | Framework               | Criar aplicativos móveis nativos com React.                                     |
| **React DOM**    | Biblioteca (React)      | Renderizar componentes React no DOM do navegador (frontend).                    |
| **Vite**         | Ferramenta de Build/Dev | Facilitar o desenvolvimento e build de projetos frontend modernos (React, etc). |

O **Vite** tem ganhado muita popularidade nos últimos anos porque resolve vários problemas de desempenho e complexidade que surgiram com ferramentas tradicionais como **Webpack** ou **Create React App (CRA)**.

## Exemplo: Básico de React com Vite (utilizando transpilador SWC)

- O projeto estará em `06-nodejs-react-vite/` sendo que será criado projeto `react-basic`
```shell
$ npm create vite@latest react-basic
```
- Primeiramente, será criado o diretório `react-basic` e nisso ele perguntará primeiramente qual seria o **framework** (Vanilla, Vue, React, Preact, Lit, Svelte, Solid, Qwik, Angular, Others) e qual seria a variante (TypeScript, TypeScript + SWC, JavaScript, JavaScript + SWC, React Router v7)
- Em primeiro momento foi escolhido **React** como framework e o **JavaScript + SWC** como a variante. O SWC é um transpilador escrito em RUST e muito mais rápido e moderno que o Babel.
- Após isso, o terminal fornece as seguintes instruções para serem executadas:
```shell
cd react-basic
npm install
npm run dev
```
- Isso irá colocar para funcionar o servidor na porta 5173.
- Na página visualizada pelo browser, é dito `Edit src/App.jsx and save to test HMR`, isso indica que está rodando o projeto com um ambiente de **desenvolvimento** configurado para **Hot Module Replacement (HMR)**. O HMR é uma funcionalidade que permite a atualização instantânea da interface do usuário quando você faz alterações no código, sem precisar recarregar a página inteira.
- Entretanto, a próxima etapa é adicionar uma nova página à sua aplicação e criar um link para ela usando o **React Router v7**
```shell
npm install react-router-dom@7
```
- É possível este comando **sem interromper o servidor**, desde que o servidor de desenvolvimento do Vite esteja rodando. O Vite tem a capacidade de **atualizar a dependência** sem a necessidade de reiniciar o servidor, o que facilita bastante o fluxo de trabalho.
- O Vite irá **detectar a mudança** e atualizar os arquivos necessários enquanto mantém o servidor rodando, sem a necessidade de reiniciar manualmente.
- Agora precisamos configurar o `React Router`, ou melhor, configurar as rotas.
	- Vamos criar `src/About.jsx` com: 
```javascript
function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>Welcome to the About page!</p>
    </div>
  );
}

export default About;
```
- Agora vamos ao `src/App.jsx` e vamos adicionar a seguinte linha de `import`:
```javascript
import About from './About';  // Aqui, você está importando o componente About
```
além disso também precisamos acrescentar:
```javascript
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Importando React Router
```
e onde era `<>` ou `</>` foi substituído por `<Router>` e `</Router>` respectivamente
e foi acrescentado um menu de navegação `nav`:
```js
      {/* Links de navegação */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Link para a página Home */}
          </li>
          <li>
            <Link to="/about">About</Link> {/* Link para a página About */}
          </li>
        </ul>
      </nav>
```
e foi necessário criar as rotas com:
```js
{/* Definir as rotas */}
<Routes>
  <Route path="/" element={<Home />} /> {/* Rota para a Home */}
  <Route path="/about" element={<About />} /> {/* Rota para a About */}
</Routes>
```
e como agora `/` é a home-page, precisamos colocar um conteúdo inicial nela, logo adicionamos antes de `export default App`:
```js
// Página inicial (Home)
function Home() {
  return <h2>Home Page</h2>;
}
```

Logo o arquivo original `src/App.jsx` que era:
```js
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React with SWC!)</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
```

- Acabou tornando-se o seguinte código:
```js
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Importando React Router
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import About from './About'; // Importando a página About

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React with SWC!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Links de navegação */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Link para a página Home */}
          </li>
          <li>
            <Link to="/about">About</Link> {/* Link para a página About */}
          </li>
        </ul>
      </nav>

      {/* Definir as rotas */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Rota para a Home */}
        <Route path="/about" element={<About />} /> {/* Rota para a About */}
      </Routes>
    </Router>
  );
}

// Página inicial (Home)
function Home() {
  return <h2>Home Page</h2>;
}

export default App;

```
1. **Importações**:
    - O **`BrowserRouter`** (renomeado para **`Router`**) é utilizado para envolver o código que precisa de navegação, como as rotas e links.
    - **`Link`**: Usado para criar links que permitem a navegação entre as páginas sem recarregar a página inteira.
    - **`Routes`**: O novo componente que substitui o **`Switch`** no React Router v7, definindo as rotas da aplicação.
    - **`About`**: O componente que representa a nova página que você criou.
2. **Links de Navegação**:
    - Adicionamos uma **`nav`** com dois links: **"Home"** e **"About"**.
    - O **`<Link to="/">Home</Link>`** navega para a página inicial e o **`<Link to="/about">About</Link>`** navega para a página "About".
3. **Rotas**:
    - Usamos **`<Routes>`** para definir as rotas.
    - **`<Route path="/" element={<Home />} />`** mapeia a rota raiz (home).
    - **`<Route path="/about" element={<About />} />`** mapeia a rota `/about` para a página "About".
4. **Componente Home**:
    - O componente **`Home`** foi adicionado para ser exibido na rota principal (`/`), como uma página inicial simples.

**Resultados**
- Agora tem um sistema de navegação com duas páginas: **Home** e **About**.
- Quando você clica em **Home**, verá o título "Home Page".
- Quando você clica em **About**, verá o título "About Page" que vem do **`About.jsx`**.

---
## Projeto: `projeto-livre`
### Criação de Projeto no NodeJS v22.12.0 usando JS + React 18.3.1 + SWC + Vite 6.0.1 + React-Router v7 (react-router-dom) + TailwindCSS
- Vamos reaproveitar o código anterior
- O projeto estará em `06-nodejs-react-vite/` sendo que será criado projeto `projeto-livre`
```shell
npm create vite@latest projeto-livre
cd projeto-livre
npm install
npm run dev
npm install react-router-dom@7
```

#### O que vamos fazer aqui?

- [x] Adicionar o TailwindCSS
- [x] Criaremos um site limpo com páginas: Home, About me, My Resume, My Timeline, My Github Repository, Portifolio, Contact
- [x] Deixaremos ele obedecendo as boas práticas e com muito HTML5 e CSS3
	- [x] verificar como editar titulos e informações para diferentes paginas
	- [x] SEO e acessibilidade
	- [x] mudar o idioma na tag HTML para pt-BR
	- [x] colocar favicon
	- [x] metadados, etc.
- [x]  Na página My Resume, na verdade ele será um link para o meu Linkedin
- [x]  Na My Github Repository será um link para o Github

#### Execução do projeto

##### Instalação do TailwindCSS
```shell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
- Nisso serão criados os arquivos: `tailwind.config.js`  e `postcss.config.js`
##### Configuração do TailwindCSS para ele funcionar

- Primeiramente, o arquivo `postcss.config.js` não precisa ser alterado e tem a seguinte estrutura:
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

- Agora, em `src/index.css`, o mesmo acaba recebendo no topo do arquivo o seguinte conteúdo:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Aproveitei por questão de teste e removi o restante dos conteúdos de `src/App.css` e `src/index.css`.

- Quanto ao arquivo `vite.config.js`, o mesmo precisa ser alterado sendo que originalmente ele é:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
```
e o resultado dessa alteração ficou como:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
```

- Quanto ao `index.html`, nada precisou ser feito e o mesmo não precisou receber um CSS sequer, mas deixei ele com `lang=pt-BR` e adicionei o meu nome ao contrário na entre as tags de `title` ficando como:
```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Meu portfólio pessoal.">
    <title>Trelov Odracir</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- Já o `tailwind.config.js` teve seu campo content preenchido, ficando o arquivo como:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- Como este era um teste, por ultimo, mas não menos importante, eu removi o conteúdo padrão da `src/App.js` de:
```js
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
```
para apenas:
```js
import './App.css'

function App() {

  return (
    <>
      <h1 className="text-3xl text-center font-bold text-red-900">
        Oi mundão!
      </h1>
    </>
  )
}

export default App
```

**Resultado:** Isso me deixou com uma tela branca para iniciar meus trabalhos, e um texto chamado "Oi mundão!" em vermelho, centralizado e topo da página que apresenta background limpo/branco! Com isso, a primeira etapa prevista no projeto está concluída. Neste momento agora, iniciaremos a construção do nav e das demais rotas e links neste projeto.
#### Construção de componentes
- Cada página será um componente individual.
- A `Home` usará um layout personalizado com vídeo em tela cheia, enquanto as demais páginas compartilharão cabeçalho e rodapé comuns.
- Usarei o `react-router-dom` para gerenciar as rotas.
- Serão criadas os seguintes diretórios dentro de `src/`: `components`, `layouts`, `pages`
```css
src/
  components/
    Header.jsx
    Footer.jsx
  layouts/
    HomeLayout.jsx
    DefaultLayout.jsx
  pages/
    Home.css
    Home.jsx
    AboutMe.jsx
    MyTimeline.jsx
    Portfolio.jsx
    Contact.jsx
  App.jsx
  index.css
  main.jsx
```

##### Componentes das páginas (`src/pages/`)

- Primeiramente, vamos aos componentes das páginas, para a Home será:
```js
// src/pages/Home.jsx
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1>Seja bem-vindo ao meu site!</h1>
      </div>
    </div>
  );
}

export default Home;
```
- Já para as demais serão a mesma cara:
```js
// src/pages/AboutMe.jsx
function AboutMe() {
    return (
      <div className="content">
        <h1>About Me</h1>
        <p>Aqui será inserido um texto sobre mim e sobre as etapas de minha vida.</p>
      </div>
    );
}

export default AboutMe;
```
##### Layouts

- Agora, será criado os layouts existentes, sendo um para a Home e o outro que será o padrão aplicado para as demais páginas (`src/layouts/`)

```js
// src/layouts/HomeLayout.jsx
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

function HomeLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Renderiza o componente correspondente à rota */}
      </main>
    </>
  );
}

export default HomeLayout;
```

```js
// src/layouts/DefaultLayout.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

function DefaultLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Renderiza o componente correspondente à rota */}
      </main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
```

##### Components Cabeçalho e Rodapé

- Agora, será criado os conteúdos de cabeçalho e rodapé que só não estarão presentes na home (`src/components/`)

- Cabeçalho
```js
function Header() {
    return (
      <header className="header">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-me">About Me</a></li>
            <li><a href="https://linkedin.com/in/ricardovolert">My Resume</a></li>
            <li><a href="/my-timeline">My Timeline</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="https://github.com/trelovodracir/">My Repository</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
}
  
export default Header;
```

- Rodapé
```js
function Footer() {
    return (
      <footer className="footer">
        <p>© 2025 Trelov Odracir</p>
        <a href="https://linkedin.com/in/ricardovolert">My Resume</a> | <a href="https://github.com/trelovodracir/">My Repository</a>
      </footer>
    );
}
  
export default Footer;
```

### Folhas de Estilos

- Agora serão adicionados ou modificados os estilos CSS:
	- Para o `src/App.css` deixarei ele em branco
	- Para o `src/index.css` deixarei apenas com:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

header nav ul {
    list-style-type: none;
    padding: 0;
  }
  
header nav ul li {
display: inline;
margin: 0 15px;
}

header nav ul li a {
text-decoration: none;
color: #333;
}

header nav ul li a:hover {
color: #007bff;
}

.content {
    text-align: center;
    padding: 20px;
}

footer {
    text-align: center;
    padding: 20px;
}
```
- Será adicionado um `src/pages/Home.css`
```css
.home-container {
  text-align: center;
  padding: 20px;
}
```

### Personalização do SEO

Agora, considerando que há necessidades de deixar páginas com conteúdos diferenciados em seu `<head>` como Título e demais informações para SEO, vamos personalizar o código com estas informações utilizando o `react-helmet`

- Vamos acessar o diretório raiz do projeto e instalar o `react-helmet` com o comando:
```shell
npm install react-helmet
```

- Agora, vamos adicionar um arquivo SEO em formato JSON `src/assets/seo.json`
```json
{
  "home": {
    "title": "Página Inicial",
    "description": "Bem-vindo ao meu site! Aqui você encontra meu portfólio, experiências e muito mais.",
    "keywords": "portfólio, desenvolvedor, projetos",
    "themeColor": "#000000",
    "og": {
      "title": "Meu Portfólio",
      "type": "website",
      "url": "https://meusite.com",
      "image": "https://meusite.com/assets/images/home-og-image.jpg"
    }
  },
  "aboutMe": {
    "title": "Sobre Mim",
    "description": "Conheça mais sobre minha trajetória profissional e habilidades.",
    "keywords": "sobre mim, carreira, desenvolvedor",
    "themeColor": "#123456",
    "og": {
      "title": "Sobre Mim - Meu Portfólio",
      "type": "website",
      "url": "https://meusite.com/sobre",
      "image": "https://meusite.com/assets/images/about-og-image.jpg"
    }
  },
  "contact": {
    "title": "Contato",
    "description": "Entre em contato para parcerias, projetos ou oportunidades.",
    "keywords": "contato, email, redes sociais",
    "themeColor": "#654321",
    "og": {
      "title": "Contato - Meu Portfólio",
      "type": "website",
      "url": "https://meusite.com/contato",
      "image": "https://meusite.com/assets/images/contact-og-image.jpg"
    }
  },
  "portfolio": {
    "title": "Portfólio",
    "description": "Explore meus projetos e veja minhas habilidades em ação.",
    "keywords": "portfólio, projetos, experiência",
    "themeColor": "#FF5733",
    "og": {
      "title": "Portfólio - Meu Portfólio",
      "type": "website",
      "url": "https://meusite.com/portfolio",
      "image": "https://meusite.com/assets/images/portfolio-og-image.jpg"
    }
  },
  "myTimeline": {
    "title": "Minha Jornada",
    "description": "Veja minha linha do tempo com experiências profissionais e pessoais.",
    "keywords": "linha do tempo, carreira, experiências",
    "themeColor": "#C70039",
    "og": {
      "title": "Minha Jornada - Meu Portfólio",
      "type": "website",
      "url": "https://meusite.com/timeline",
      "image": "https://meusite.com/assets/images/timeline-og-image.jpg"
    }
  }
}
```

- Vamos criar um HOOK para buscar os dados no JSON através do `src/components/useSEO.jsx`
```js
import seoData from "../assets/seo.json";

const useSEO = (pageKey) => {
  if (!pageKey) {
    console.warn("Page key não fornecida para o hook useSEO.");
    return {};
  }

  const seo = seoData[pageKey];

  if (!seo) {
    console.warn(`SEO não encontrado para a página: ${pageKey}`);
    return {};
  }

  return seo;
};

export default useSEO;
```

- Agora, vamos criar um componente reutilizável `src/components/SEO.jsx` que renderiza as tags no `<head>` usando o `react-helmet`. Ele espera que o desenvolvedor passe os dados de SEO como uma propriedade.
```js
import { Helmet } from "react-helmet";

const SEO = ({ seo }) => {
  const {
    title = "Título Padrão",
    description = "Descrição padrão",
    keywords = "",
    themeColor = "#FFFFFF",
    manifest,
    og = {},
  } = seo;

  const ogTitle = og.title || title;
  const ogUrl = og.url || window.location.href; // URL padrão como fallback
  const ogImage = og.image || "";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="theme-color" content={themeColor} />
      {manifest && <link rel="manifest" href={manifest} />}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:type" content={og.type || "website"} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: title,
          description,
          url: ogUrl,
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
```

- Página que usa o Hook e o Componente: No componente de cada página (ex.: `src/pages/Home.js`), será usado o hook para obter os dados da página e passa isso para o componente `SEO`. 
	- Para que o componente funcione corretamente, precisamos ajustar a estrutura do retorno no componente Home (e dos demais nas demais paginas em `src/pages/`). 
	- Em React, todos os elementos dentro do retorno de um componente precisam estar encapsulados dentro de um único nó pai.

Assim, originalmente `src/pages/Home.js`é:
```js
// src/pages/Home.jsx
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1>Seja bem-vindo ao meu site!</h1>
      </div>
    </div>
  );
}

export default Home;
```

depois de modificar o mesmo, tem-se:
```js
// src/pages/Home.jsx
import './Home.css';
import useSEO from "../components/useSEO"; // Importa o hook para carregar o JSON
import SEO from "../components/SEO"; // Importa o componente de SEO

function Home() {
  const seo = useSEO("home"); // Obtém os dados de SEO para a página "/"

  return (
    <>
      {/* O SEO precisa estar dentro de um nó pai */}
      <SEO seo={seo} />
      <div className="home-container">
        <div className="overlay">
          <h1>Seja bem-vindo ao meu site!</h1>
          <p>{seo.description}</p>
        </div>
      </div>
    </>
  );
}

export default Home;
```

logo, as demais paginas em `src/pages` também serão modificados para ter a mesma estrutura, por exemplo, `src/pages/MyTimeline.jsx`:
```js
// src/pages/MyTimeline.jsx
import useSEO from "../components/useSEO"; // Importa o hook para carregar o JSON
import SEO from "../components/SEO"; // Importa o componente de SEO

function MyTimeline() {
  const seo = useSEO("myTimeline"); // Obtém os dados de SEO para a página "my-timeline"

  return (
    <>
      {/* O SEO precisa estar dentro de um nó pai */}
      <SEO seo={seo} />
      <div className="content">
        <h1>My Timeline</h1>
        <p>Aqui, eu colocarei um mix de jobs, educação, trabalhos e demais projetos, identificados por uma linha temporal.</p>
        <p>{seo.description}</p>
      </div>
      </>
  );
}
  
  export default MyTimeline;
```

- Perceba que o uso do SEO, também foi aproveitado dentro das páginas no conteúdo disponibilizado ao cliente, através de `<p>{seo.description}</p>` .

---
# O que foi feito aqui:

Bem, temos uma estrutura inicial que agora pode ser trabalhada o seu FrontEnd de forma adequada, com rotas (react-router-dom) e meta-dados (react-helmet) muito bem definidos para um site pessoal e que ainda não possuí uma base de dados SQL ou NoSQL. Implementamos o TailwindCSS e foi optado para utilizar um transpilador moderno que é o SWC. Foi utilizado layouts diferentes e nisso trabalhei com componentes, hooks e assets.

---
# Próximas etapas:

Os passos mais naturais para o site do `projeto-livre` seriam um dos dois: 
1. Elaborar uma análise de objetivos e requisitos, planejamento visual e funcional de UI/UX criando um Kanban de ideias e funcionalidades desejadas e passando isso no Figma para criar o protótipo (wireframe) com fluxo funcional e implementar isso no projeto, criando tasks agora em um Kanban de DEV, com um backlog para To do, In progress, Deploy e Done; ou
2. Partir para o melhor estilo de Webdeveloper/Webmaster e começar a escrever tudo loucamente no código do site, sem um projeto necessariamente estruturado ou planejado.

Logicamente, o caminho ideal com praticas modernas deveria ser a opção 1, uma vez que um Webmaster teria dificuldades de manter, planejar o sistema, bem como teria problemas de qualidade por não ter testes e revisão, bem como teria problemas de falta de rastreabilidade, ficando difícil o que está pendente ou quem fez o que ou ainda está pendente

Logo as etapas seriam:
- Definir objetivos e requisitos
- Planejamento visual e funcional
- Organização de Tarefas (Kanban)
- Desenvolvimento incremental e modular
- Testes e validação
- Deploy e feedback

Uma vez que hoje em dia, em grandes projetos, é necessário:
- Utilizar **metodologias ágeis** (Scrum ou Kanban, dependendo do time).
- Fazer **code reviews** rigorosos (em pares ou por sêniores).
- Investir pesado em testes automatizados e monitoramento.
- Trabalhar com **CI/CD (Continuous Integration/Continuous Deployment)** para deploys frequentes e seguros.

Portanto, naturalmente o correto seria interromper este treinamento, momentaneamente para o desenvolvimento de uma página seguindo tais etapas acima, mas tentarei relatar o que ocorrer, entretanto, provavelmente eu vá fazer um repositório para testar o desenvolvimento.
