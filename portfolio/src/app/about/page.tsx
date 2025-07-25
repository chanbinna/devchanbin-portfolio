import Image from "next/image";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-extrabold mb-8 text-blue-800 text-center">About Me</h1>
      <section className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center mb-12 border border-gray-100">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-200 shadow mb-4">
          <Image src="/images/profile.jpg" alt="Chanbin profile" width={96} height={96} className="object-cover w-full h-full" />
        </div>
        <p className="text-gray-700 text-lg text-center max-w-2xl">
          Hi, I'm <span className="font-bold text-blue-700">Chanbin</span>, a freelance developer passionate about building modern web experiences for creators, startups, and small businesses. I value clean code, great design, and fast delivery.
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow border border-blue-100">
          <h2 className="text-xl font-semibold mb-4 text-blue-700 flex items-center gap-2">⚡ Skills & Tools</h2>
          <ul className="flex flex-wrap gap-3 text-lg">
            <li>⚛️ React</li>
            <li>🔗 Next.js</li>
            <li>🎨 Tailwind CSS</li>
            <li>🟢 Node.js</li>
            <li>🐍 Python</li>
            <li>🗄️ MongoDB</li>
            <li>🐘 PostgreSQL</li>
            <li>📝 Strapi</li>
            <li>📝 Payload</li>
            <li>☁️ Vercel</li>
            <li>🔧 Git</li>
          </ul>
        </section>
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 shadow border border-purple-100">
          <h2 className="text-xl font-semibold mb-4 text-purple-700 flex items-center gap-2">🗓️ Timeline</h2>
          <ul className="border-l-2 border-blue-200 pl-4 space-y-4">
            <li>
              <div className="font-bold text-blue-800">2024 – Present</div>
              <div>Freelance Web Developer (devchanbin)</div>
            </li>
            <li>
              <div className="font-bold text-blue-800">2022 – 2024</div>
              <div>Full Stack Developer, Startup Projects</div>
            </li>
            <li>
              <div className="font-bold text-blue-800">2020 – 2022</div>
              <div>Computer Science Student</div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
} 