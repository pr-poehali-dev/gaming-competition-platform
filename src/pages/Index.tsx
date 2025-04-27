
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GameCard } from "@/components/GameCard";
import { NavBar } from "@/components/NavBar";

const popularGames = [
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
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <NavBar />
      
      <section className="container mx-auto px-4 pt-20 pb-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Играйте с друзьями в свои любимые игры
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Присоединяйтесь к тысячам геймеров на нашей платформе. Создавайте турниры, 
            находите соперников и выигрывайте вместе с нами!
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link to="/register">Начать игру</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/games">Все игры</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Популярные игры</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button asChild variant="outline">
            <Link to="/games">Смотреть все игры</Link>
          </Button>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-16 bg-white rounded-lg shadow-sm my-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 text-purple-600 text-xl">✓</span>
                <p>Защищенный аккаунт с двухэтапной аутентификацией</p>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-purple-600 text-xl">✓</span>
                <p>Прозрачная система рейтинга и матчмейкинга</p>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-purple-600 text-xl">✓</span>
                <p>Регулярные турниры и призы для победителей</p>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Быстрая регистрация</h3>
            <p className="mb-4">Создайте аккаунт за несколько секунд и начните играть прямо сейчас!</p>
            <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
              <Link to="/register">Зарегистрироваться</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>© 2025 GamersArena. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
