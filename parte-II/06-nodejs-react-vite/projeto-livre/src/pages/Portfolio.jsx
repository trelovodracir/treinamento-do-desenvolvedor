// src/pages/Portfolio.jsx
import useSEO from "../components/useSEO"; // Importa o hook para carregar o JSON
import SEO from "../components/SEO"; // Importa o componente de SEO

function Portfolio() {
  const seo = useSEO("portfolio"); // Obtém os dados de SEO para a página "portfolio"

  return (
    <>
      {/* O SEO precisa estar dentro de um nó pai */}
      <SEO seo={seo} />
      <div className="content">
        <h1>My Portfolio</h1>
        <p>Aqui terá o painel com os projetos e demais trabalhos desenvolvidos.</p>
        <p>{seo.description}</p>
      </div>
      </>
  );
}
  
  export default Portfolio;