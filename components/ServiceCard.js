export default function ServiceCard({ title, desc }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 sm:p-8 border-t-4 border-red-700">
      <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
        {title}
      </h4>
      <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
