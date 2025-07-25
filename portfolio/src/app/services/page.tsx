import Link from "next/link";
import { services } from "@/data/services";

const icons = ["🚀", "🌐", "🏢", "🛠️"];

export default function Services() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-extrabold mb-8 text-blue-800 text-center">Services & Pricing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {services.map((service, i) => (
          <div key={service.name} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg p-6 border border-blue-100 flex flex-col gap-2">
            <div className="text-3xl mb-2">{icons[i % icons.length]}</div>
            <h3 className="font-bold text-xl mb-1 text-blue-800">{service.name}</h3>
            <p className="text-gray-700 mb-2 text-sm">{service.description}</p>
            <ul className="mb-2 list-disc list-inside text-sm text-gray-700">
              {service.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <span className="font-semibold text-lg text-purple-700">{service.price}</span>
            <div className="mt-2">
              <Link href="/contact" className="text-blue-600 hover:underline">Get a Quote</Link>
            </div>
          </div>
        ))}
      </div>
      {/* FAQ Section */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-100 max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">FAQ</h2>
          <div className="mb-2">
            <div className="font-semibold">Is design included?</div>
            <div className="text-gray-700">Basic design and branding are included. For advanced design, custom quotes are available.</div>
          </div>
          <div className="mb-2">
            <div className="font-semibold">Is maintenance available?</div>
            <div className="text-gray-700">Yes, monthly maintenance packages are available upon request.</div>
          </div>
        </div>
      </section>
      <section className="text-center">
        <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">Contact for a Custom Quote</Link>
      </section>
    </main>
  );
} 