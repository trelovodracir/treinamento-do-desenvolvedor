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