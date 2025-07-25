import Image from "next/image";

export default function BlogPreview({ title, summary, date, image }: { title: string; summary: string; date?: string; image?: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col gap-2 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition cursor-pointer">
      {image && (
        <div className="w-full aspect-[16/9] rounded-lg overflow-hidden mb-2 bg-gray-100">
          <Image src={image} alt={title} width={400} height={225} className="object-cover w-full h-full" />
        </div>
      )}
      <h3 className="font-bold text-lg mb-1 text-purple-800">{title}</h3>
      {date && <div className="text-xs text-gray-400 mb-1">{date}</div>}
      <p className="text-gray-700 mb-2 text-sm">{summary}</p>
    </div>
  );
} 