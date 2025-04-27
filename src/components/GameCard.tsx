
import { Link } from "react-router-dom";

type Game = {
  id: number;
  title: string;
  image: string;
  players: string;
  genre: string;
};

type GameCardProps = {
  game: Game;
};

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Link to={`/games/${game.id}`} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-md transition transform hover:scale-105 hover:shadow-lg">
        <div className="relative h-48">
          <img 
            src={game.image} 
            alt={game.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
            {game.genre}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1 group-hover:text-purple-600 transition">{game.title}</h3>
          <p className="text-gray-600 text-sm">Игроков: {game.players}</p>
          
          <div className="mt-4 text-purple-600 text-sm font-medium">
            Подробнее
          </div>
        </div>
      </div>
    </Link>
  );
};
