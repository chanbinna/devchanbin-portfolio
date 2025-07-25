import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <Link href="/portfolio" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Portfolio</Link>
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex flex-col gap-6">
        <h1 className="text-3xl font-extrabold mb-2 text-blue-800">{project.title}</h1>
        {project.image && (
          <div className="w-full aspect-[16/9] rounded-lg overflow-hidden mb-2 bg-gray-100">
            <Image src={project.image} alt={project.title} width={600} height={340} className="object-cover w-full h-full" />
          </div>
        )}
        <p className="text-gray-700 mb-2 text-lg">{project.description}</p>
        <div className="mb-2">
          <span className="font-semibold text-blue-700">Stack:</span> {project.stack.join(", ")}
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-xs">#{tag}</span>
          ))}
        </div>
        <div className="flex gap-4 mt-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener" className="text-blue-600 hover:underline">GitHub</a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener" className="text-blue-600 hover:underline">Live Site</a>
          )}
        </div>
      </div>
    </main>
  );
} 