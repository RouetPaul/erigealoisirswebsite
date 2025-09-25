export function GET() {
  return new Response(
    ['User-agent: *', 'Allow: /', 'Sitemap: https://www.erigea-loisirs.example/sitemap.xml'].join(
      '\n'
    ),
    { headers: { 'Content-Type': 'text/plain' } }
  );
}
