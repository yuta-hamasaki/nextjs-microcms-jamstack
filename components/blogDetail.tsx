"use client";

interface Blog {
  title: string;
  content: string;
}

interface BlogContentProps {
  data: Blog;
}

export default function BlogContent({ data }: BlogContentProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{data.title}</h1>
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{
          __html: data.content
        }}
      />
    </article>
  );
}