export default function BotCard({ bot, onClick, showX, onX }) {
    return (
      <div
        className="bg-white p-4 shadow rounded-lg hover:scale-105 transition cursor-pointer relative"
        onClick={onClick}
      >
        <img src={bot.avatar_url} alt={bot.name} className="w-full h-48 object-cover rounded" />
        <h2 className="text-xl font-semibold mt-2">{bot.name}</h2>
        <p className="text-sm italic">{bot.catchphrase}</p>
        <div className="flex justify-between mt-2 text-sm">
          <span>⚔ {bot.damage}</span>
          <span>🛡 {bot.armor}</span>
          <span>❤️ {bot.health}</span>
        </div>
        <span className="absolute top-2 right-2 bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
          {bot.bot_class}
        </span>
        {showX && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onX();
            }}
            className="absolute top-2 left-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center"
          >
            ×
          </button>
        )}
      </div>
    );
  }
  