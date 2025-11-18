export async function getServerSideProps({ res }) {
  const sitemap0 = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://www.edigrad.com</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
  </urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap0);
  res.end();

  return { props: {} };
}

export default function Sitemap0() {
  return null;
}
