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