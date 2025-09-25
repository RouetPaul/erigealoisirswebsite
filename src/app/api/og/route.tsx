import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title =
    searchParams.get('title') ||
    'Erigea Loisirs — Le leader du loisir indoor multi-activité en Île-de-France';
  const date = searchParams.get('date') || '';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          background: '#0D6EFD',
          color: 'white',
          padding: '64px',
          fontSize: 48,
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700 }}>{title}</div>
        {date && <div style={{ marginTop: 16, fontSize: 28, opacity: 0.9 }}>{date}</div>}
        <div style={{ marginTop: 'auto', fontSize: 24, opacity: 0.9 }}>Erigea Loisirs</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
