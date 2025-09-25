type Props = {
  children: React.ReactNode;
  author?: string;
  source?: string;
};

export function Quote({ children, author, source }: Props) {
  return (
    <figure className="rounded-xl border border-neutral-200 bg-white p-6">
      <blockquote className="text-lg">{children}</blockquote>
      {(author || source) && (
        <figcaption className="mt-2 text-sm text-neutral-600">
          {author && <span>{author}</span>} {source && <span>— {source}</span>}
        </figcaption>
      )}
    </figure>
  );
}
