// src/pages/AboutMe.jsx
import useSEO from "../components/useSEO"; // Importa o hook para carregar o JSON
import SEO from "../components/SEO"; // Importa o componente de SEO

function AboutMe() {
  const seo = useSEO("aboutMe"); // Obtém os dados de SEO para a página "about-me"

  return (
    <>
      {/* O SEO precisa estar dentro de um nó pai */}
      <SEO seo={seo} />
      <div className="content">
        <h1>About Me</h1>
        <p>Aqui será inserido um texto sobre mim e sobre as etapas de minha vida.</p>
        <p>{seo.description}</p>
      </div>
      </>
  );
}
  
  export default AboutMe;