import { listPress } from '@/lib/press';

export function GET() {
  const base = 'https://www.erigea-loisirs.example';
  const items = listPress();
  const urls = [
    `${base}/`,
    `${base}/fr`,
    `${base}/fr/press`,
    ...items.map((p) => `${base}/${p.lang ?? 'fr'}/press/${p.slug}`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `<url><loc>${u}</loc></url>`)
    .join('\n')}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
