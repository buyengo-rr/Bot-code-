import BotCard from "./BotCard";

export default function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">🛡️ Your Bot Army</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {army.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={() => onRelease(bot)}
            showX={true}
            onX={() => onDischarge(bot)}
          />
        ))}
      </div>
    </div>
  );
}
