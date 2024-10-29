import { getBlogDetail } from "@/libs/client";
import BlogDetail from "@/components/blogDetail";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function BlogPage({ params }: PageProps) {
  const data = await getBlogDetail(params.id);
  return <BlogDetail data={data} />;
}