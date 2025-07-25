import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/TestimonialCard";
import Image from "next/image";

export default function Testimonials() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-extrabold mb-8 text-purple-800 text-center">Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg p-6 border border-purple-100 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-purple-200 shadow mb-2">
              <Image src={t.image || "/images/profile.jpg"} alt={t.name} width={64} height={64} className="object-cover w-full h-full" />
            </div>
            <blockquote className="italic text-lg text-gray-700 mb-2">“{t.text}”</blockquote>
            <div className="font-bold text-purple-700">{t.name}</div>
            <div className="text-sm text-gray-500">{t.role}</div>
          </div>
        ))}
      </div>
    </main>
  );
} 