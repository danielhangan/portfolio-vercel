import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

export async function BlogPosts() {
  const allBlogs = await getBlogPosts();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Posts</h2>
      <div className="space-y-4">
        {allBlogs
          .sort((a, b) => {
            if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="text-neutral-100 tracking-tight">{post.metadata.title}</p>
                <p className="text-sm text-neutral-400">
                  {formatDate(post.metadata.publishedAt, true)}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
