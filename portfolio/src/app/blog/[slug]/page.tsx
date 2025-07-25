import { blogPosts } from "@/data/blogPosts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <Link href="/blog" className="text-purple-600 hover:underline mb-4 inline-block">← Back to Blog</Link>
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex flex-col gap-6">
        <h1 className="text-3xl font-extrabold mb-2 text-purple-800">{post.title}</h1>
        {post.image && (
          <div className="w-full aspect-[16/9] rounded-lg overflow-hidden mb-2 bg-gray-100">
            <Image src={post.image} alt={post.title} width={600} height={340} className="object-cover w-full h-full" />
          </div>
        )}
        <div className="text-xs text-gray-400 mb-2">{post.date}</div>
        <p className="text-gray-700 text-lg">{post.summary}</p>
      </div>
    </main>
  );
} 