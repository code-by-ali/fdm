export default function ServiceCard({ title, desc }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 border-t-4 border-red-700">
      <h4 className="text-xl font-semibold text-gray-900">{title}</h4>
      <p className="mt-3 text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}
