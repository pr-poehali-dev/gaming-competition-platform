
import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Search, Trophy, Medal, Award } from "lucide-react";

// Типы данных
interface Player {
  id: number;
  rank: number;
  name: string;
  avatar: string;
  rating: number;
  wins: number;
  losses: number;
  winRate: number;
  games: number[];
}

const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [gameFilter, setGameFilter] = useState("all");

  // Примерные данные для таблицы лидеров
  const players: Player[] = [
    {
      id: 1,
      rank: 1,
      name: "КиберДракон",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      rating: 2850,
      wins: 342,
      losses: 87,
      winRate: 79.7,
      games: [1, 2, 4]
    },
    {
      id: 2,
      rank: 2,
      name: "ТёмныйВоин",
      avatar: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      rating: 2740,
      wins: 298,
      losses: 102,
      winRate: 74.5,
      games: [1, 3, 5]
    },
    {
      id: 3,
      rank: 3,
      name: "ИгроваяФея",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      rating: 2695,
      wins: 276,
      losses: 93,
      winRate: 74.8,
      games: [2, 4, 5]
    },
    {
      id: 4,
      rank: 4,
      name: "ЛегендарныйВолк",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      rating: 2620,
      wins: 264,
      losses: 112,
      winRate: 70.2,
      games: [1, 2, 3]
    },
    {
      id: 5,
      rank: 5,
      name: "ЧемпионXX",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      rating: 2580,
      wins: 248,
      losses: 128,
      winRate: 66.0,
      games: [3, 4, 5]
    },
    {
      id: 6,
      rank: 6,
      name: "КапитанГеймер",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      rating: 2530,
      wins: 232,
      losses: 105,
      winRate: 68.8,
      games: [1, 4, 5]
    },
  ];

  // Фильтрация игроков
  const filteredPlayers = players.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGame = gameFilter === "all" ? true : player.games.includes(parseInt(gameFilter));
    return matchesSearch && matchesGame;
  });

  // Рендер значков для топ-3 игроков
  const renderRankBadge = (rank: number) => {
    if (rank === 1) return <Trophy className="h-5 w-5 text-yellow-500" />;
    if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />;
    if (rank === 3) return <Award className="h-5 w-5 text-amber-700" />;
    return <span className="font-bold">{rank}</span>;
  };

  return (
    <>
      <NavBar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Таблица лидеров</h1>
          <p className="text-gray-600">Лучшие игроки нашей платформы по рейтингу и статистике побед</p>
        </div>

        <Tabs defaultValue="global" className="mb-6">
          <TabsList className="mb-4">
            <TabsTrigger value="global">Общий рейтинг</TabsTrigger>
            <TabsTrigger value="monthly">За месяц</TabsTrigger>
            <TabsTrigger value="weekly">За неделю</TabsTrigger>
            <TabsTrigger value="friends">Друзья</TabsTrigger>
          </TabsList>
          
          <TabsContent value="global" className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative w-full md:w-1/3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  placeholder="Поиск игрока..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="w-full md:w-1/4">
                <Select value={gameFilter} onValueChange={setGameFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите игру" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все игры</SelectItem>
                    <SelectItem value="1">Counter-Strike 2</SelectItem>
                    <SelectItem value="2">Dota 2</SelectItem>
                    <SelectItem value="3">Valorant</SelectItem>
                    <SelectItem value="4">League of Legends</SelectItem>
                    <SelectItem value="5">Apex Legends</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ранг
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Игрок
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Рейтинг
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Победы
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Поражения
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Винрейт
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredPlayers.map((player) => (
                      <tr key={player.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center justify-center w-8 h-8">
                            {renderRankBadge(player.rank)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <Avatar>
                                <AvatarImage src={player.avatar} alt={player.name} />
                                <AvatarFallback>{player.name.slice(0, 2)}</AvatarFallback>
                              </Avatar>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{player.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-semibold text-purple-700">{player.rating}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-green-600">{player.wins}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-red-600">{player.losses}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm">{player.winRate}%</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {filteredPlayers.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">По вашему запросу игроков не найдено</p>
                <Button 
                  variant="outline" 
                  className="mt-2"
                  onClick={() => {
                    setSearchTerm("");
                    setGameFilter("all");
                  }}
                >
                  Сбросить фильтры
                </Button>
              </div>
            )}
            
            <div className="mt-8 bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-lg font-semibold mb-2">Как повысить свой рейтинг?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Участвуйте в турнирах - победы в них дают больше рейтинга</li>
                <li>Выигрывайте матчи против игроков с более высоким рейтингом</li>
                <li>Играйте регулярно - поддерживайте активность</li>
                <li>Улучшайте винрейт - он влияет на получаемый за победу рейтинг</li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="monthly">
            <div className="p-8 text-center">
              <p className="text-gray-500">Статистика за текущий месяц обновляется...</p>
            </div>
          </TabsContent>
          
          <TabsContent value="weekly">
            <div className="p-8 text-center">
              <p className="text-gray-500">Статистика за текущую неделю обновляется...</p>
            </div>
          </TabsContent>
          
          <TabsContent value="friends">
            <div className="p-8 text-center">
              <p className="text-gray-500">Войдите в аккаунт, чтобы увидеть рейтинг друзей</p>
              <Button asChild className="mt-4 bg-purple-600 hover:bg-purple-700">
                <a href="/login">Войти</a>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
};

export default Leaderboard;
