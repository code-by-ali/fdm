export default function ServiceCard({ title, desc, icon: Icon }) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 border-2 border-gray-200 hover:border-primary overflow-hidden hover:-translate-y-1">
      
      {/* Icon container with clean white background */}
      <div className="relative">
        <div className="inline-flex p-4 rounded-xl bg-gray-50 group-hover:bg-red-50 transition-all duration-300">
          <Icon className="w-8 h-8 text-primary transition-colors duration-300" />
        </div>
      </div>

      {/* Content */}
      <h4 className="relative mt-6 text-xl font-bold text-gray-900 transition-colors duration-300">
        {title}
      </h4>
      
      <p className="relative mt-4 text-base text-gray-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}