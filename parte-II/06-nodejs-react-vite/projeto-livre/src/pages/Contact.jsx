// src/pages/Contact.jsx
import useSEO from "../components/useSEO"; // Importa o hook para carregar o JSON
import SEO from "../components/SEO"; // Importa o componente de SEO

function Contact() {
  const seo = useSEO("contact"); // Obtém os dados de SEO para a página "contact" 
  
  return (
    <>
      {/* O SEO precisa estar dentro de um nó pai */}
      <SEO seo={seo} />
      <div className="content">
        <h1>Contact</h1>
        <p>Aqui será inserido um formulário de contato com o meu e-mail pessoal.</p>
        <p>{seo.description}</p>
      </div>
      </>
  );
}
  
  export default Contact;