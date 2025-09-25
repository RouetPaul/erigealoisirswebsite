import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type PressFrontmatter = {
  title: string;
  slug: string;
  datePublished: string; // ISO
  excerpt: string;
  hero?: string;
  attachment?: string;
  tags?: string[];
  lang?: string;
};

export type PressDoc = {
  frontmatter: PressFrontmatter;
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), 'content', 'press');

export function listPress(lang?: string): PressFrontmatter[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
  const items = files.map((file) => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8');
    const { data } = matter(raw);
    return data as PressFrontmatter;
  });
  return items
    .filter((it) => (lang ? it.lang === lang : true))
    .sort((a, b) => (a.datePublished > b.datePublished ? -1 : 1));
}

export function getPressBySlug(slug: string): PressDoc | null {
  if (!fs.existsSync(CONTENT_DIR)) return null;
  const file = [path.join(CONTENT_DIR, `${slug}.md`), path.join(CONTENT_DIR, `${slug}.mdx`)].find(
    fs.existsSync
  );
  if (!file) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  return { frontmatter: data as PressFrontmatter, content };
}
