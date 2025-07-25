export default function ProcessStep() {
  return (
    <div className="flex items-center gap-4">
      <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold">1</div>
      <div>
        <div className="font-semibold">Step Title</div>
        <div className="text-gray-600 text-sm">Step description goes here.</div>
      </div>
    </div>
  );
} 