import { vehicles } from '../src/data/vehicles';
import * as fs from 'fs';
import path from 'path';

const domain = 'https://autorepaircostcalculator.com';
const today = new Date().toISOString().split('T')[0];
const URLS_PER_SITEMAP = 4000;

interface SitemapUrl {
  loc: string;
  lastmod: string;
  priority: string;
  changefreq: string;
  images?: Array<{
    loc: string;
    title: string;
  }>;
}

function generateSitemapXml(urls: SitemapUrl[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="${domain}/sitemap.xsl"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd"
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => {
    let imageXml = '';
    if (url.images && url.images.length > 0) {
      imageXml = url.images.map(img => `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
    </image:image>`).join('');
    }
    return `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <priority>${url.priority}</priority>
    <changefreq>${url.changefreq}</changefreq>${imageXml}
  </url>`;
  }).join('\n')}
</urlset>`;
}

function generateSitemapIndex(sitemapFiles: Array<{ filename: string; lastmod: string }>): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="${domain}/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapFiles.map(file => `  <sitemap>
    <loc>${domain}/${file.filename}</loc>
    <lastmod>${file.lastmod}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;
}

function generateSitemaps() {
  let allUrls: SitemapUrl[] = [];

  // Add main pages
  allUrls.push(
    {
      loc: `${domain}/`,
      lastmod: today,
      priority: '1.0',
      changefreq: 'daily'
    },
    {
      loc: `${domain}/brands`,
      lastmod: today,
      priority: '0.9',
      changefreq: 'daily'
    },
    {
      loc: `${domain}/maintenance`,
      lastmod: today,
      priority: '0.8',
      changefreq: 'weekly'
    },
    {
      loc: `${domain}/repairs`,
      lastmod: today,
      priority: '0.8',
      changefreq: 'weekly'
    }
  );

  // Add all brand pages first (highest priority after main pages)
  Object.entries(vehicles).forEach(([brand]) => {
    allUrls.push({
      loc: `${domain}/brands/${encodeURIComponent(brand.toLowerCase())}`,
      lastmod: today,
      priority: '0.8',
      changefreq: 'weekly'
    });
  });

  // Add model pages next
  Object.entries(vehicles).forEach(([brand, data]) => {
    data.models.forEach(model => {
      const modelSlug = model.toLowerCase().replace(/\s+/g, '-');
      allUrls.push({
        loc: `${domain}/brands/${encodeURIComponent(brand.toLowerCase())}/${modelSlug}`,
        lastmod: today,
        priority: '0.7',
        changefreq: 'weekly'
      });
    });
  });

  // Add year pages last (most numerous)
  Object.entries(vehicles).forEach(([brand, data]) => {
    data.models.forEach(model => {
      const modelSlug = model.toLowerCase().replace(/\s+/g, '-');
      data.years.forEach(year => {
        allUrls.push({
          loc: `${domain}/brands/${encodeURIComponent(brand.toLowerCase())}/${modelSlug}/${year}`,
          lastmod: today,
          priority: '0.6',
          changefreq: 'monthly'
        });
      });
    });
  });

  // Create sitemaps directory
  const sitemapsDir = path.join('public', 'sitemaps');
  if (!fs.existsSync(sitemapsDir)) {
    fs.mkdirSync(sitemapsDir, { recursive: true });
  }

  // Split URLs into chunks and create sitemap files
  const sitemapFiles: Array<{ filename: string; lastmod: string }> = [];
  for (let i = 0; i < allUrls.length; i += URLS_PER_SITEMAP) {
    const chunk = allUrls.slice(i, i + URLS_PER_SITEMAP);
    const sitemapNumber = Math.floor(i / URLS_PER_SITEMAP) + 1;
    const filename = `sitemaps/sitemap-${sitemapNumber}.xml`;
    
    fs.writeFileSync(
      path.join('public', filename),
      generateSitemapXml(chunk)
    );
    
    sitemapFiles.push({
      filename,
      lastmod: today
    });
  }

  // Create sitemap index file
  fs.writeFileSync(
    path.join('public', 'sitemap.xml'),
    generateSitemapIndex(sitemapFiles)
  );

  // Generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${domain}/sitemap.xml`;

  fs.writeFileSync(path.join('public', 'robots.txt'), robotsTxt);

  // Log statistics
  console.log(`Generated ${sitemapFiles.length} sitemaps with ${allUrls.length} total URLs:`);
  sitemapFiles.forEach((file, index) => {
    const urlCount = index === sitemapFiles.length - 1
      ? allUrls.length % URLS_PER_SITEMAP || URLS_PER_SITEMAP
      : URLS_PER_SITEMAP;
    console.log(`${file.filename}: ${urlCount} URLs`);
  });
}

// Generate all sitemaps
generateSitemaps();