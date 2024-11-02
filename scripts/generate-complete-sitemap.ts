import { vehicles } from '../src/data/vehicles';
import * as fs from 'fs';

const domain = 'https://autorepaircostcalculator.com';
const today = new Date().toISOString().split('T')[0];

function generateCompleteSitemap() {
  let urls = [];

  // Add main pages
  urls.push({
    loc: `${domain}/`,
    priority: '1.0',
    changefreq: 'daily'
  });

  urls.push({
    loc: `${domain}/brands`,
    priority: '0.9',
    changefreq: 'daily'
  });

  urls.push({
    loc: `${domain}/maintenance`,
    priority: '0.8',
    changefreq: 'weekly'
  });

  urls.push({
    loc: `${domain}/repairs`,
    priority: '0.8',
    changefreq: 'weekly'
  });

  // Add all brand, model, and year combinations
  Object.entries(vehicles).forEach(([brand, data]) => {
    // Brand page
    urls.push({
      loc: `${domain}/brands/${encodeURIComponent(brand.toLowerCase())}`,
      priority: '0.8',
      changefreq: 'weekly'
    });

    // Model pages for each brand
    data.models.forEach(model => {
      const modelSlug = model.toLowerCase().replace(/\s+/g, '-');
      
      // Brand/Model page
      urls.push({
        loc: `${domain}/brands/${encodeURIComponent(brand.toLowerCase())}/${modelSlug}`,
        priority: '0.7',
        changefreq: 'weekly'
      });

      // Brand/Model/Year pages
      data.years.forEach(year => {
        urls.push({
          loc: `${domain}/brands/${encodeURIComponent(brand.toLowerCase())}/${modelSlug}/${year}`,
          priority: '0.6',
          changefreq: 'monthly'
        });
      });
    });
  });

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
}

// Generate and save the sitemap
const sitemap = generateCompleteSitemap();
fs.writeFileSync('public/sitemap.xml', sitemap);

// Log statistics
const urlCount = (sitemap.match(/<url>/g) || []).length;
console.log(`Sitemap generated successfully with ${urlCount} URLs!`);