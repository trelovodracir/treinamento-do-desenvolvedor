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
