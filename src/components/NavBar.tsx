
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-purple-600">GamersArena</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/games" className="text-gray-700 hover:text-purple-600 font-medium">
              Игры
            </Link>
            <Link to="/tournaments" className="text-gray-700 hover:text-purple-600 font-medium">
              Турниры
            </Link>
            <Link to="/leaderboard" className="text-gray-700 hover:text-purple-600 font-medium">
              Рейтинг
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-3">
            <Button asChild variant="outline">
              <Link to="/login">Войти</Link>
            </Button>
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link to="/register">Регистрация</Link>
            </Button>
          </div>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/games" 
                className="text-gray-700 hover:text-purple-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Игры
              </Link>
              <Link 
                to="/tournaments" 
                className="text-gray-700 hover:text-purple-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Турниры
              </Link>
              <Link 
                to="/leaderboard" 
                className="text-gray-700 hover:text-purple-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Рейтинг
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button asChild variant="outline">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>Войти</Link>
                </Button>
                <Button asChild className="bg-purple-600 hover:bg-purple-700">
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>Регистрация</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
