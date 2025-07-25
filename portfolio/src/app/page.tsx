import Link from "next/link";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blogPosts";
import ProjectCard from "@/components/ProjectCard";
import BlogPreview from "@/components/BlogPreview";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-4">
      {/* Hero Section */}
      <section className="relative text-center mb-20 py-16 rounded-3xl bg-gradient-to-br from-blue-50 via-white to-purple-100 shadow-lg overflow-hidden">
        <div className="flex flex-col items-center gap-4">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg mb-2">
            <Image src="/images/profile.jpg" alt="Chanbin profile" width={112} height={112} className="object-cover w-full h-full" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Web developer helping startups and creators ship fast.</h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-4 max-w-2xl">Hi, I'm Chanbin. I build modern, scalable websites and web apps for creators, startups, and small businesses.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-2">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">Work with Me</Link>
            <Link href="/portfolio" className="bg-white border border-blue-200 text-blue-700 px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-50 hover:scale-105 transition">View Portfolio</Link>
          </div>
          <div className="flex justify-center gap-4 mt-2 text-xl">
            <a href="https://github.com/devchanbin" target="_blank" rel="noopener" className="hover:text-blue-600 transition"><span aria-label="GitHub" role="img">🐙</span></a>
            <a href="https://linkedin.com/in/devchanbin" target="_blank" rel="noopener" className="hover:text-blue-600 transition"><span aria-label="LinkedIn" role="img">💼</span></a>
          </div>
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-40 bg-purple-200 opacity-30 rounded-full blur-2xl z-0" />
      </section>
      {/* Featured Projects */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
        <div className="text-right mt-4">
          <Link href="/portfolio" className="text-blue-600 hover:underline font-semibold">See all projects →</Link>
        </div>
      </section>
      {/* Blog Teasers */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6 text-purple-700">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {blogPosts.slice(0, 2).map((post) => (
            <BlogPreview key={post.slug} {...post} />
          ))}
        </div>
        <div className="text-right mt-4">
          <Link href="/blog" className="text-purple-600 hover:underline font-semibold">Read the blog →</Link>
        </div>
      </section>
      {/* CTA Banner for Clients */}
      <section className="bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-2xl p-8 text-center shadow-lg">
        <h3 className="text-2xl font-bold mb-2 text-blue-800">Looking for a freelance developer?</h3>
        <p className="mb-4 text-gray-700">Let’s build something great together. Get a free consultation and quote for your project.</p>
        <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">Get in Touch</Link>
      </section>
    </main>
  );
}
