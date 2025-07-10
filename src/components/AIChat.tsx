
import { useState } from "react";
import { Send, Sparkles, Camera, Palette, BookOpen, Upload, X, Layout, Eye, Settings, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface Message {
  id: string;
  text: string;
  isAI: boolean;
  timestamp: Date;
  image?: string;
}

const AIChat = () => {
  const [message, setMessage] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isAnalysisExpanded, setIsAnalysisExpanded] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm your Creative Guide. I'm here to guide you through personalized skill journeys, provide feedback on your work, and connect you with the right community members. What would you like to explore today?",
      isAI: true,
      timestamp: new Date(),
    },
  ]);

  const creativeTools = [
    // Quick Actions
    { 
      icon: Camera, 
      title: "Photography Tips", 
      description: "Get professional photography guidance and composition advice",
      prompt: "Photography tips"
    },
    { 
      icon: Palette, 
      title: "Design Feedback", 
      description: "Receive constructive feedback on your creative designs",
      prompt: "Design feedback"
    },
    { 
      icon: BookOpen, 
      title: "Skill Journey", 
      description: "Personalized learning path recommendations for your growth",
      prompt: "Skill journey"
    },
    // Analysis Options
    {
      icon: Layout,
      title: "Composition Analysis",
      description: "AI-powered evaluation of visual balance, focal points, and spatial relationships",
      prompt: "Please provide a detailed composition analysis of my artwork, focusing on visual balance, focal points, and spatial relationships."
    },
    {
      icon: Eye,
      title: "Color Theory",
      description: "Professional insights on color harmony, contrast, and emotional impact",
      prompt: "Please analyze the color theory in my artwork, including color harmony, contrast, and emotional impact."
    },
    {
      icon: Settings,
      title: "Technical Critique",
      description: "Detailed feedback on technique, medium usage, and craftsmanship",
      prompt: "Please provide a technical critique of my artwork, focusing on technique, medium usage, and craftsmanship."
    }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeUploadedImage = () => {
    setUploadedImage(null);
  };

  const handleSend = () => {
    if (!message.trim() && !uploadedImage) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: message || (uploadedImage ? "Please provide feedback on my artwork" : ""),
      isAI: false,
      timestamp: new Date(),
      image: uploadedImage || undefined,
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage("");
    setUploadedImage(null);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: uploadedImage 
          ? "I can see your artwork! This is a wonderful piece. I notice great use of composition and color harmony. For feedback: consider experimenting with contrast in the focal areas to draw more attention. The technique shows skill - would you like specific suggestions for your next piece or guidance on a particular aspect?"
          : "That's a great question! Let me help you with that. Based on your interests, I'd recommend starting with foundational techniques and then moving to more advanced concepts. Would you like me to create a personalized learning path for you?",
        isAI: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <Card className="h-full flex flex-col bg-white/50 backdrop-blur-sm">
      <div className="p-4 border-b bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-purple-600" />
          <h3 className="font-semibold text-gray-900">Creative Guide</h3>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.isAI ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                msg.isAI
                  ? "bg-gray-100 text-gray-900"
                  : "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
              }`}
            >
              {msg.image && (
                <img 
                  src={msg.image} 
                  alt="Uploaded artwork" 
                  className="w-full max-w-48 h-auto rounded-lg mb-2"
                />
              )}
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        {uploadedImage && (
          <div className="mb-3 relative inline-block">
            <img 
              src={uploadedImage} 
              alt="Upload preview" 
              className="w-20 h-20 object-cover rounded-lg"
            />
            <Button
              size="sm"
              variant="destructive"
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0"
              onClick={removeUploadedImage}
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
        )}
        
        <div className="flex space-x-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask your Creative Guide..."
            className="flex-1"
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <Button variant="outline" className="h-10">
              <Upload className="w-4 h-4" />
            </Button>
          </label>

          <Button onClick={handleSend} className="bg-gradient-to-r from-purple-500 to-blue-500">
            <Send className="w-4 h-4" />
          </Button>
        </div>

        {/* Creative Tools */}
        <div className="mt-4 space-y-3 border-t pt-3">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center justify-between w-full p-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
            onClick={() => setIsAnalysisExpanded(!isAnalysisExpanded)}
          >
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Creative Tools</span>
            </div>
            {isAnalysisExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </Button>
          
          {isAnalysisExpanded ? (
            <div className="space-y-2">
              {creativeTools.map((tool, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="flex items-start space-x-3 h-auto p-3 text-left w-full hover:bg-purple-50 hover:border-purple-200 transition-colors"
                  onClick={() => setMessage(tool.prompt)}
                >
                  <tool.icon className="w-4 h-4 mt-0.5 text-purple-600 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium text-sm text-gray-900">{tool.title}</div>
                    <div className="text-xs text-gray-600 mt-1 leading-relaxed">{tool.description}</div>
                  </div>
                </Button>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {creativeTools.map((tool, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2 hover:bg-purple-50 hover:border-purple-200 transition-colors"
                  onClick={() => setMessage(tool.prompt)}
                >
                  <tool.icon className="w-3 h-3 text-purple-600" />
                  <span className="text-xs">{tool.title}</span>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default AIChat;
