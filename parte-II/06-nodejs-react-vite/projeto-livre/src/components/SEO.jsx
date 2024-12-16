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