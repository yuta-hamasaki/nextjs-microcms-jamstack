import Link from 'next/link';
import { getBlogs } from '@/libs/client';
import { Blog } from '@/types/blog';

const BlogPage = async () => {
    const { contents } = await getBlogs();

    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
          <ul className="space-y-2">
            {contents.map((blog: Blog) => (
              <li key={blog.id} className="hover:underline">
                <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
              </li>
            ))}
          </ul>
      </div>
    );
};

export default BlogPage;