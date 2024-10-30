"use client";

import Image from "next/image";

interface eyecatch{
  width:number;
  height:number;
  url:string;
}

interface Blog {
  title: string;
  content: string;
  eyecatch?: eyecatch;
  category?: any; // string[]  tempolary
}

interface BlogContentProps {
  data: Blog;
}

export default function BlogContent({ data }: BlogContentProps) {
  console.log(data)
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* {data.eyecatch? 
      <Image src={data.eyecatch.url} height={data.eyecatch.height} width={data.eyecatch.width} alt="eyecatch"/> : <></>
} */}
      <h1 className="text-3xl font-bold mb-6">{data.title}</h1>
      {/* <p>{data.category.name}</p> */}
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{
          __html: data.content
        }}
      />
    </article>
  );
}