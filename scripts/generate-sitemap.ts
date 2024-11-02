import { vehicles } from '../src/data/vehicles';
import * as fs from 'fs';

const domain = 'https://autorepaircostcalculator.com';
const today = new Date().toISOString().split('T')[0];

function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main Pages -->
  <url>
    <loc>${domain}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${domain}/brands</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${domain}/maintenance</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${domain}/repairs</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;

  // Add URLs for each brand, model, and year
  Object.entries(vehicles).forEach(([brand, data]) => {
    // Brand page
    sitemap += `  <url>
    <loc>${domain}/brands/${encodeURIComponent(brand.toLowerCase())}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>\n`;

    // Model pages
    data.models.forEach(model => {
      const modelSlug = model.toLowerCase().replace(/\s+/g, '-');
      sitemap += `  <url>
    <loc>${domain}/brands/${encodeURIComponent(brand.toLowerCase())}/${modelSlug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>\n`;

      // Year pages for each model
      data.years.forEach(year => {
        sitemap += `  <url>
    <loc>${domain}/brands/${encodeURIComponent(brand.toLowerCase())}/${modelSlug}/${year}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>\n`;
      });
    });
  });

  sitemap += '</urlset>';
  return sitemap;
}

// Generate and save the sitemap
const sitemap = generateSitemap();
fs.writeFileSync('public/sitemap.xml', sitemap);
console.log('Sitemap generated successfully!');