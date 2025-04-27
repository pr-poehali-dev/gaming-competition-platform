
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GameCard } from "@/components/GameCard";
import { NavBar } from "@/components/NavBar";
import { useState } from "react";

const allGames = [
  {
    id: 1,
    title: "Counter-Strike 2",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    players: "2-10",
    genre: "Шутер"
  },
  {
    id: 2,
    title: "Dota 2",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
    players: "2-10",
    genre: "MOBA"
  },
  {
    id: 3,
    title: "FIFA 24",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    players: "1-4",
    genre: "Спорт"
  },
  {
    id: 4,
    title: "Fortnite",
    image: "https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    players: "1-100",
    genre: "Королевская битва"
  },
  {
    id: 5,
    title: "Minecraft",
    image: "https://images.unsplash.com/photo-1587573454015-db23db5a7a34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    players: "1-∞",
    genre: "Песочница"
  },
  {
    id: 6,
    title: "League of Legends",
    image: "https://images.unsplash.com/photo-1626240130051-68871c71e8a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    players: "2-10",
    genre: "MOBA"
  }
];

const Games = () => {
  const [filter, setFilter] = useState("");
  
  const filteredGames = filter 
    ? allGames.filter(game => 
        game.title.toLowerCase().includes(filter.toLowerCase()) || 
        game.genre.toLowerCase().includes(filter.toLowerCase())
      )
    : allGames;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <NavBar />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Все игры</h1>
        
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Поиск игр по названию или жанру..."
              className="w-full py-3 px-4 rounded-lg border bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            <div className="absolute right-3 top-3 text-gray-400">
              🔍
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <Button 
            variant={filter === "" ? "default" : "outline"} 
            onClick={() => setFilter("")}
            className={filter === "" ? "bg-purple-600 hover:bg-purple-700" : ""}
          >
            Все
          </Button>
          <Button 
            variant={filter === "Шутер" ? "default" : "outline"} 
            onClick={() => setFilter("Шутер")}
            className={filter === "Шутер" ? "bg-purple-600 hover:bg-purple-700" : ""}
          >
            Шутеры
          </Button>
          <Button 
            variant={filter === "MOBA" ? "default" : "outline"} 
            onClick={() => setFilter("MOBA")}
            className={filter === "MOBA" ? "bg-purple-600 hover:bg-purple-700" : ""}
          >
            MOBA
          </Button>
          <Button 
            variant={filter === "Спорт" ? "default" : "outline"} 
            onClick={() => setFilter("Спорт")}
            className={filter === "Спорт" ? "bg-purple-600 hover:bg-purple-700" : ""}
          >
            Спортивные
          </Button>
        </div>
        
        {filteredGames.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">По вашему запросу ничего не найдено</h3>
            <p className="text-gray-600 mb-4">Попробуйте изменить параметры поиска</p>
            <Button onClick={() => setFilter("")} className="bg-purple-600 hover:bg-purple-700">
              Показать все игры
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        )}
      </div>
      
      <footer className="bg-gray-800 text-white py-10 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>© 2025 GamersArena. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Games;
