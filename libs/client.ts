
import { createClient } from 'microcms-js-sdk';
import { Blog } from '@/types/blog';


export const client = createClient({
    serviceDomain:process.env.NEXT_SERVICE_DOMAIN!,
    apiKey: process.env.NEXT_API_KEY!,
});

export const getBlogs = async () => {
    try {
        const response = await client.getList<Blog>({
        endpoint: 'blogs',
        customRequestInit: {
            cache: "no-store",
        },
        });
        return response;
} catch (error) {
    console.error('Error:', error);
    throw new Error('Failed');
}
};

export const getBlogDetail = async (contentId: string) => {
try {
    const response = await client.getListDetail<Blog>({
    endpoint: 'blogs',
    contentId,
    customRequestInit: {
        cache: "no-store",
    },
    });
    return response;
} catch (error) {
    console.error('Error fetching blog detail:', error);
    throw new Error(`Failed to fetch blog with ID: ${contentId}`);
}
};