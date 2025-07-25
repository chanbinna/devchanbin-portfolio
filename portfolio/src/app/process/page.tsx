import ProcessStep from "@/components/ProcessStep";

const steps = [
  {
    title: "Free Consultation",
    description: "Discuss your needs and goals in a no-pressure call or email.",
    icon: "💬",
  },
  {
    title: "Proposal & Quote",
    description: "Receive a clear proposal and pricing for your project.",
    icon: "📝",
  },
  {
    title: "Development",
    description: "I build your website or app, with regular updates and feedback.",
    icon: "💻",
  },
  {
    title: "Delivery & Support",
    description: "Launch, handoff, and optional ongoing maintenance.",
    icon: "🚀",
  },
];

export default function Process() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-extrabold mb-8 text-blue-800 text-center">My Process</h1>
      <ol className="relative border-l-4 border-blue-200 pl-8 space-y-12">
        {steps.map((step, i) => (
          <li key={step.title} className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-purple-100 text-2xl shadow border-2 border-blue-200 -ml-16 mt-1">{step.icon}</div>
            <div>
              <div className="font-semibold text-lg text-blue-700 mb-1">{step.title}</div>
              <div className="text-gray-700">{step.description}</div>
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
} 