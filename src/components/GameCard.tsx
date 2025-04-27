
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Game {
  id: number;
  title: string;
  image: string;
  players: string;
  genre: string;
}

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={game.image} 
          alt={game.title} 
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-bold mb-2">{game.title}</h3>
        <div className="flex gap-4 text-sm text-gray-600 mb-3">
          <span>{game.genre}</span>
          <span>•</span>
          <span>{game.players} игроков</span>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 p-5">
        <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
          <Link to={`/games/${game.id}`}>Играть</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
