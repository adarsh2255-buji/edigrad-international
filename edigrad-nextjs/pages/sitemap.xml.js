export async function getServerSideProps({ res }) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
      <loc>https://www.edigrad.com/sitemap-0.xml</loc>
    </sitemap>
  </sitemapindex>`;

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function SitemapIndex() {
  return null;
}
