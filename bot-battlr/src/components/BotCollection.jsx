import BotCard from "./BotCard";

export default function BotCollection({ bots, onEnlist }) {
  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} onClick={() => onEnlist(bot)} />
      ))}
    </div>
  );
}
