import { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import SortBar from "./components/SortBar";

export default function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [sortBy, setSortBy] = useState("none");

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then(res => res.json())
      .then(setBots);
  }, []);

  const enlistBot = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    });
    setArmy(army.filter(b => b.id !== bot.id));
    setBots(bots.filter(b => b.id !== bot.id));
  };

  const sortedBots = [...bots].sort((a, b) => {
    if (sortBy === "health") return b.health - a.health;
    if (sortBy === "damage") return b.damage - a.damage;
    if (sortBy === "armor") return b.armor - a.armor;
    return 0;
  });

  return (
    <div className="p-6 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-4">🤖 Bot Battlr</h1>
      <YourBotArmy army={army} onRelease={releaseBot} onDischarge={dischargeBot} />
      <SortBar sortBy={sortBy} setSortBy={setSortBy} />
      <BotCollection bots={sortedBots} onEnlist={enlistBot} />
    </div>
  );
}
