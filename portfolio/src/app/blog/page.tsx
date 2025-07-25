import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import BlogPreview from "@/components/BlogPreview";

export default function Blog() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <BlogPreview {...post} />
          </Link>
        ))}
      </div>
    </main>
  );
} 