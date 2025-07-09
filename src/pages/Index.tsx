import { useState } from "react";
import Header from "@/components/Header";
import AIChat from "@/components/AIChat";
import SkillJourney from "@/components/SkillJourney";
import CommunityConnections from "@/components/CommunityConnections";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, MessageCircle } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("chat");

  const tabs = [
    { id: "chat", label: "Creative Guide", icon: MessageCircle },
    { id: "journey", label: "My Journey", icon: BookOpen },
    { id: "community", label: "Community", icon: Users },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "chat":
        return <AIChat />;
      case "journey":
        return <SkillJourney />;
      case "community":
        return <CommunityConnections />;
      default:
        return <AIChat />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Navigation</h2>
              <div className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <Button
                      key={tab.id}
                      variant={activeTab === tab.id ? "default" : "ghost"}
                      className={`w-full justify-start ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-purple-500 to-blue-500"
                          : ""
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {tab.label}
                    </Button>
                  );
                })}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Quick Tip</h3>
                <p className="text-sm text-gray-600">
                  Start a conversation with your Creative Guide to get personalized learning recommendations!
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="h-[calc(100vh-180px)]">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
