import { vehicles } from '../src/data/vehicles';
import * as fs from 'fs';
import path from 'path';

const domain = 'https://autorepaircostcalculator.com';
const today = new Date().toISOString().split('T')[0];
const URLS_PER_SITEMAP = 4000;

function createSitemapEntry(url: string, priority: string, changefreq: string): string {
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function generateSitemap(urls: string[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;
}

function generateSitemapIndex(sitemapFiles: string[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapFiles.map(file => `  <sitemap>
    <loc>${domain}/${file}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;
}

function generateSitemaps() {
  const urls: string[] = [];

  // Add main pages
  urls.push(createSitemapEntry(`${domain}/`, '1.0', 'daily'));
  urls.push(createSitemapEntry(`${domain}/brands`, '0.9', 'daily'));
  urls.push(createSitemapEntry(`${domain}/maintenance`, '0.8', 'weekly'));
  urls.push(createSitemapEntry(`${domain}/repairs`, '0.8', 'weekly'));

  // Add brand pages
  Object.keys(vehicles).forEach(brand => {
    urls.push(createSitemapEntry(
      `${domain}/brands/${encodeURIComponent(brand.toLowerCase())}`,
      '0.8',
      'weekly'
    ));
  });

  // Add model pages
  Object.entries(vehicles).forEach(([brand, data]) => {
    data.models.forEach(model => {
      const modelSlug = model.toLowerCase().replace(/\s+/g, '-');
      urls.push(createSitemapEntry(
        `${domain}/brands/${encodeURIComponent(brand.toLowerCase())}/${modelSlug}`,
        '0.7',
        'weekly'
      ));
    });
  });

  // Add year pages
  Object.entries(vehicles).forEach(([brand, data]) => {
    data.models.forEach(model => {
      const modelSlug = model.toLowerCase().replace(/\s+/g, '-');
      data.years.forEach(year => {
        urls.push(createSitemapEntry(
          `${domain}/brands/${encodeURIComponent(brand.toLowerCase())}/${modelSlug}/${year}`,
          '0.6',
          'monthly'
        ));
      });
    });
  });

  // Create sitemaps directory
  const sitemapsDir = path.join('public', 'sitemaps');
  if (!fs.existsSync(sitemapsDir)) {
    fs.mkdirSync(sitemapsDir, { recursive: true });
  }

  // Split URLs into multiple sitemaps if needed
  const sitemapFiles: string[] = [];
  for (let i = 0; i < urls.length; i += URLS_PER_SITEMAP) {
    const chunk = urls.slice(i, i + URLS_PER_SITEMAP);
    const sitemapNumber = Math.floor(i / URLS_PER_SITEMAP) + 1;
    const filename = `sitemaps/sitemap-${sitemapNumber}.xml`;
    
    fs.writeFileSync(
      path.join('public', filename),
      generateSitemap(chunk)
    );
    
    sitemapFiles.push(filename);
  }

  // Create sitemap index if we have multiple sitemaps
  if (sitemapFiles.length > 1) {
    fs.writeFileSync(
      path.join('public', 'sitemap.xml'),
      generateSitemapIndex(sitemapFiles)
    );
  } else {
    // If we have only one sitemap, use it directly
    fs.copyFileSync(
      path.join('public', sitemapFiles[0]),
      path.join('public', 'sitemap.xml')
    );
  }

  // Generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${domain}/sitemap.xml`;

  fs.writeFileSync(path.join('public', 'robots.txt'), robotsTxt);

  // Log statistics
  console.log(`Generated sitemap with ${urls.length} URLs in ${sitemapFiles.length} file(s)`);
  sitemapFiles.forEach((file, index) => {
    const urlCount = index === sitemapFiles.length - 1
      ? urls.length % URLS_PER_SITEMAP || URLS_PER_SITEMAP
      : URLS_PER_SITEMAP;
    console.log(`${file}: ${urlCount} URLs`);
  });
}

// Generate sitemaps
generateSitemaps();