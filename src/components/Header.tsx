
import { MessageCircle, User, Settings, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">D</span>
        </div>
        <h1 className="text-xl font-bold text-gray-900">Creative Assistant</h1>
      </div>
      
      <div className="flex items-center space-x-3">
        <Button variant="ghost" size="sm">
          <Bell className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <Settings className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <User className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
