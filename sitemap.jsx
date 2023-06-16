// sitemap.js

const fs = require('fs');
const { create } = require('xmlbuilder2');

const routes = [
  '/',
  '/teslascanner/1',
  '/teslascanner/2',
  '/teslascanner/3',
  '/teslascanner/4',
  '/checkout',
  '/orderpage',
];

const baseUrl = 'https://teslascanner.com';

const sitemap = create({ version: '1.0', encoding: 'UTF-8' })
  .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

routes.forEach((route) => {
  const url = `${baseUrl}${route}`;
  sitemap.ele('url').ele('loc').txt(url);
});

const sitemapXml = sitemap.end({ prettyPrint: true });

fs.writeFileSync('./public/sitemapfix.xml', sitemapXml, 'utf8');
