import { getBlogDetail } from "@/libs/client";
import BlogDetail from "@/components/blogDetail";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPage(props: PageProps) {
  const params = await props.params;
  const data = await getBlogDetail(params.id);
  return <BlogDetail data={data} />;
}