export function Card({ title, description, children }) {
    return (
      <div className="p-4 shadow-md rounded-2xl bg-white">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        {children}
      </div>
    );
  }
  