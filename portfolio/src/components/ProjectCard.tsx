import Image from "next/image";

export default function ProjectCard({ title, description, image, stack, tags }: { title: string; description: string; image?: string; stack?: string[]; tags?: string[] }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col gap-3 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition cursor-pointer">
      {image && (
        <div className="w-full aspect-[16/9] rounded-lg overflow-hidden mb-2 bg-gray-100">
          <Image src={image} alt={title} width={400} height={225} className="object-cover w-full h-full" />
        </div>
      )}
      <h3 className="font-bold text-xl mb-1 text-blue-800">{title}</h3>
      <p className="text-gray-700 mb-2 text-sm">{description}</p>
      {stack && (
        <div className="flex flex-wrap gap-2 text-xs mb-1">
          {stack.map((tech) => (
            <span key={tech} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">{tech}</span>
          ))}
        </div>
      )}
      {tags && (
        <div className="flex flex-wrap gap-1 text-xs">
          {tags.map((tag) => (
            <span key={tag} className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">#{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
} 