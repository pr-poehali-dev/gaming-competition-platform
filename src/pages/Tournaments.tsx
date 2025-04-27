
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NavBar } from "@/components/NavBar";
import { CalendarIcon, Trophy, Users, Clock } from "lucide-react";

const tournaments = [
  {
    id: 1,
    title: "Весенний турнир по CS2",
    game: "Counter-Strike 2",
    startDate: "2025-05-15",
    prizePool: "500 000 ₽",
    participants: 32,
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Dota 2 Summer Cup",
    game: "Dota 2",
    startDate: "2025-06-01",
    prizePool: "1 000 000 ₽",
    participants: 16,
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "FIFA 24 Champions League",
    game: "FIFA 24",
    startDate: "2025-05-10",
    prizePool: "300 000 ₽",
    participants: 64,
    status: "registration",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Valorant Winter Tournament",
    game: "Valorant",
    startDate: "2025-07-20",
    prizePool: "750 000 ₽",
    participants: 24,
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Tournaments = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredTournaments = (status: string) => {
    return tournaments
      .filter(tournament => 
        tournament.status === status && 
        (tournament.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
         tournament.game.toLowerCase().includes(searchQuery.toLowerCase()))
      );
  };
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Турниры</h1>
            <p className="text-gray-600 mt-2">Участвуйте в соревнованиях и выигрывайте призы</p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Создать турнир
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="max-w-md mx-auto md:mx-0">
            <Input
              placeholder="Поиск турниров по названию или игре..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mb-4"
            />
          </div>
          
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="registration">Регистрация открыта</TabsTrigger>
              <TabsTrigger value="upcoming">Предстоящие</TabsTrigger>
              <TabsTrigger value="ongoing">Текущие</TabsTrigger>
              <TabsTrigger value="finished">Завершенные</TabsTrigger>
            </TabsList>
            
            {["registration", "upcoming", "ongoing", "finished"].map((status) => (
              <TabsContent key={status} value={status}>
                {filteredTournaments(status).length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTournaments(status).map((tournament) => (
                      <div key={tournament.id} className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={tournament.image} 
                            alt={tournament.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold mb-2">{tournament.title}</h3>
                          <p className="text-sm text-gray-600 mb-1">{tournament.game}</p>
                          
                          <div className="mt-4 space-y-2">
                            <div className="flex items-center text-sm">
                              <CalendarIcon size={16} className="mr-2 text-gray-500" />
                              <span>{formatDate(tournament.startDate)}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Trophy size={16} className="mr-2 text-gray-500" />
                              <span>Призовой фонд: {tournament.prizePool}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Users size={16} className="mr-2 text-gray-500" />
                              <span>Участников: {tournament.participants}</span>
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                              <Link to={`/tournaments/${tournament.id}`}>
                                {status === "registration" ? "Зарегистрироваться" : "Подробнее"}
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Clock className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Турниров не найдено
                    </h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      {searchQuery 
                        ? "Попробуйте изменить параметры поиска" 
                        : "В данный момент нет турниров в этой категории. Загляните позже"}
                    </p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-6 border border-purple-100">
          <h2 className="text-xl font-semibold mb-4">Как работают турниры</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-purple-600 font-semibold">1</span>
              </div>
              <h3 className="font-medium mb-2">Регистрация</h3>
              <p className="text-sm text-gray-600">Выберите турнир и зарегистрируйтесь. Следуйте инструкциям и подтвердите участие.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-purple-600 font-semibold">2</span>
              </div>
              <h3 className="font-medium mb-2">Участие</h3>
              <p className="text-sm text-gray-600">Следуйте расписанию матчей, вовремя присоединяйтесь к лобби и играйте по правилам.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-purple-600 font-semibold">3</span>
              </div>
              <h3 className="font-medium mb-2">Награды</h3>
              <p className="text-sm text-gray-600">Побеждайте в матчах, поднимайтесь по сетке и получайте призы за высокие места.</p>
            </div>
          </div>
        </div>
      </div>
      
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

export default Tournaments;
