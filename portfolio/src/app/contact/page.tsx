export default function Contact() {
  return (
    <main className="max-w-xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-extrabold mb-8 text-blue-800 text-center">Contact</h1>
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex flex-col gap-6">
        <form className="flex flex-col gap-4" action="https://formspree.io/f/mwkgyyqg" method="POST">
          <div className="flex items-center gap-2">
            <span className="text-blue-600 text-xl">👤</span>
            <input type="text" name="name" placeholder="Your Name" required className="border p-2 rounded flex-1" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-600 text-xl">✉️</span>
            <input type="email" name="email" placeholder="Your Email" required className="border p-2 rounded flex-1" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-600 text-xl">💬</span>
            <textarea name="message" placeholder="Your Message" required className="border p-2 rounded flex-1" rows={4}></textarea>
          </div>
          <button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">Send Message</button>
        </form>
        <div className="flex justify-center gap-6 mt-4 text-2xl">
          <a href="mailto:devchanbin01@gmail.com" className="hover:text-blue-600 transition" aria-label="Email">✉️</a>
          <a href="https://github.com/devchanbin" target="_blank" rel="noopener" className="hover:text-blue-600 transition" aria-label="GitHub">🐙</a>
          <a href="https://linkedin.com/in/devchanbin" target="_blank" rel="noopener" className="hover:text-blue-600 transition" aria-label="LinkedIn">💼</a>
        </div>
      </div>
    </main>
  );
} 