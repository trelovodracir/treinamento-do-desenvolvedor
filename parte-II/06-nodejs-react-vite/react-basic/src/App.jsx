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
