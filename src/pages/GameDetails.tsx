
import { useParams, Link } from "react-router-dom";
import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Имитация базы данных с информацией об играх
const gamesData = [
  {
    id: "1",
    title: "Counter-Strike 2",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    players: "2-10",
    genre: "Шутер",
    description: "Counter-Strike 2 - это новейшая версия культового тактического шутера от первого лица. С улучшенной графикой и физикой, CS2 предлагает классический геймплей с новыми возможностями.",
    requirements: {
      minimal: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-4460 / AMD Ryzen 3 1200",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 960 / AMD Radeon R9 380",
        storage: "85 GB"
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-9700K / AMD Ryzen 5 3600X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 1660 Super / AMD Radeon RX 5600 XT",
        storage: "85 GB SSD"
      }
    },
    activeTournaments: 5,
    onlinePlayers: 423
  },
  {
    id: "2",
    title: "Dota 2",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    players: "2-10",
    genre: "MOBA",
    description: "Dota 2 - популярная MOBA игра, где две команды по 5 игроков сражаются за контроль над картой и уничтожение вражеской базы. Каждый игрок управляет уникальным героем с особыми способностями.",
    requirements: {
      minimal: {
        os: "Windows 7 или новее",
        processor: "Dual core от Intel или AMD (2.8 GHz)",
        memory: "4 GB RAM",
        graphics: "NVIDIA GeForce 8600/9600GT / AMD Radeon HD 2600/3600",
        storage: "60 GB"
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-4430 / AMD FX-6300",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 660 / AMD Radeon HD 7870",
        storage: "60 GB SSD"
      }
    },
    activeTournaments: 8,
    onlinePlayers: 657
  },
  {
    id: "3",
    title: "FIFA 24",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    players: "1-4",
    genre: "Спорт",
    description: "FIFA 24 - ведущий футбольный симулятор с реалистичной графикой, анимацией и физикой. Игра содержит множество лицензированных команд, стадионов и лиг со всего мира.",
    requirements: {
      minimal: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-6600K / AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 570",
        storage: "100 GB"
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-8700 / AMD Ryzen 7 2700X",
        memory: "12 GB RAM",
        graphics: "NVIDIA GeForce GTX 1660 / AMD Radeon RX 5600 XT",
        storage: "100 GB SSD"
      }
    },
    activeTournaments: 3,
    onlinePlayers: 189
  },
  {
    id: "4",
    title: "Fortnite",
    image: "https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    players: "1-100",
    genre: "Королевская битва",
    description: "Fortnite - популярная многопользовательская игра в жанре королевской битвы. Игроки сражаются на большой карте, где последний выживший побеждает. Отличительной особенностью является возможность строить укрепления.",
    requirements: {
      minimal: {
        os: "Windows 7/8/10 64-bit",
        processor: "Intel Core i3-3225 / AMD FX-4350",
        memory: "8 GB RAM",
        graphics: "Intel HD 4000 / AMD Radeon R5",
        storage: "50 GB"
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-7300U / AMD Ryzen 3 3300U",
        memory: "16 GB RAM",
        graphics: "NVIDIA GTX 960 / AMD R9 280",
        storage: "50 GB SSD"
      }
    },
    activeTournaments: 7,
    onlinePlayers: 834
  }
];

const GameDetails = () => {
  const { id } = useParams();
  const game = gamesData.find(g => g.id === id);

  if (!game) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
        <NavBar />
        <div className="container mx-auto py-20 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Игра не найдена</h1>
          <p className="mb-8">К сожалению, запрашиваемая игра не существует или была удалена.</p>
          <Link to="/games">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Вернуться к списку игр
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <NavBar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center mb-4">
          <Link to="/games" className="text-purple-600 hover:text-purple-800 mr-2">
            Игры
          </Link>
          <span className="text-gray-400 mx-2">/</span>
          <span className="text-gray-600">{game.title}</span>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-10">
          <div className="h-80 relative">
            <img 
              src={game.image} 
              alt={game.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-8">
                <h1 className="text-4xl font-bold text-white mb-2">{game.title}</h1>
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                    {game.genre}
                  </span>
                  <span className="text-white text-sm">
                    {game.players} игроков
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="mb-6">
                    <TabsTrigger value="overview">Обзор</TabsTrigger>
                    <TabsTrigger value="requirements">Требования</TabsTrigger>
                    <TabsTrigger value="tournaments">Турниры</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview">
                    <h2 className="text-2xl font-bold mb-4">Об игре</h2>
                    <p className="text-gray-700 mb-6">{game.description}</p>
                    
                    <h3 className="text-xl font-semibold mb-3">Особенности</h3>
                    <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                      <li>Многопользовательский режим с поддержкой до {game.players.split('-')[1]} игроков</li>
                      <li>Русскоязычный интерфейс и полная локализация</li>
                      <li>Регулярные обновления и новый контент</li>
                      <li>Система рейтинга и матчмейкинга</li>
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="requirements">
                    <h2 className="text-2xl font-bold mb-4">Системные требования</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-3">Минимальные</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li><span className="font-medium">ОС:</span> {game.requirements.minimal.os}</li>
                          <li><span className="font-medium">Процессор:</span> {game.requirements.minimal.processor}</li>
                          <li><span className="font-medium">Память:</span> {game.requirements.minimal.memory}</li>
                          <li><span className="font-medium">Видеокарта:</span> {game.requirements.minimal.graphics}</li>
                          <li><span className="font-medium">Хранилище:</span> {game.requirements.minimal.storage}</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-3">Рекомендуемые</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li><span className="font-medium">ОС:</span> {game.requirements.recommended.os}</li>
                          <li><span className="font-medium">Процессор:</span> {game.requirements.recommended.processor}</li>
                          <li><span className="font-medium">Память:</span> {game.requirements.recommended.memory}</li>
                          <li><span className="font-medium">Видеокарта:</span> {game.requirements.recommended.graphics}</li>
                          <li><span className="font-medium">Хранилище:</span> {game.requirements.recommended.storage}</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="tournaments">
                    <h2 className="text-2xl font-bold mb-4">Активные турниры</h2>
                    
                    {game.activeTournaments > 0 ? (
                      <div className="space-y-4 mb-6">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                            <div>
                              <h3 className="font-semibold text-lg">Еженедельный турнир #{i+1}</h3>
                              <p className="text-gray-600 text-sm">
                                Начало: {new Date(Date.now() + (i+1)*86400000).toLocaleDateString('ru-RU')} • Призовой фонд: {(i+1)*5000} ₽
                              </p>
                            </div>
                            <Button className="bg-purple-600 hover:bg-purple-700">
                              Регистрация
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-700 mb-6">
                        В настоящее время нет активных турниров для этой игры. Проверьте позже или создайте свой собственный турнир.
                      </p>
                    )}
                    
                    <Link to="/tournaments">
                      <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                        Смотреть все турниры
                      </Button>
                    </Link>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold mb-4">Статистика</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Активные турниры</span>
                        <span className="text-sm font-medium">{game.activeTournaments}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full" 
                          style={{ width: `${Math.min(100, game.activeTournaments * 10)}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Сейчас играют</span>
                        <span className="text-sm font-medium">{game.onlinePlayers}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${Math.min(100, game.onlinePlayers / 10)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Начать игру</h3>
                  <p className="text-gray-700 mb-6">
                    Готовы к сражению? Присоединяйтесь прямо сейчас и начните свой путь к вершине рейтинга!
                  </p>
                  
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 mb-3">
                    Играть сейчас
                  </Button>
                  
                  <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                    Найти команду
                  </Button>
                </div>
              </div>
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

export default GameDetails;
