export default function SortBar({ sortBy, setSortBy }) {
    return (
      <div className="flex justify-center mb-4 space-x-4">
        {["none", "health", "damage", "armor"].map(option => (
          <button
            key={option}
            onClick={() => setSortBy(option)}
            className={`px-4 py-2 rounded ${
              sortBy === option ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Sort by {option}
          </button>
        ))}
      </div>
    );
  }
  