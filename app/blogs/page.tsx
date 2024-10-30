import Link from 'next/link';
import { getBlogs } from '@/libs/client';
import { Blog } from '@/types/blog';
import BlogCard from '@/components/blogCard';

const BlogPage = async () => {
    const { contents } = await getBlogs();

    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
          <div className="space-y-4 space-x-5">
            {contents.map((blog: Blog) => (
            <Link href={`/blogs/${blog.id}`}>
              <BlogCard key={blog.id} 
              id={blog.id}
              title={blog.title}
              description={blog.description}
              />
            </Link>
            ))}
          </div>
      </div>
    );
};

export default BlogPage;