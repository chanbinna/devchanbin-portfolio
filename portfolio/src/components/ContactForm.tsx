export default function ContactForm() {
  return (
    <form className="bg-white rounded shadow p-6 flex flex-col gap-4">
      <input type="text" name="name" placeholder="Your Name" required className="border p-2 rounded" />
      <input type="email" name="email" placeholder="Your Email" required className="border p-2 rounded" />
      <textarea name="message" placeholder="Your Message" required className="border p-2 rounded" rows={4}></textarea>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Send Message</button>
    </form>
  );
} 