
import { Users, MessageSquare, Heart, Share2, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

const CommunityConnections = () => {
  const suggestedMentors = [
    {
      name: "Sarah Chen",
      specialty: "Portrait Photography",
      experience: "8 years",
      rating: 4.9,
      students: 2400,
      avatar: "SC",
    },
    {
      name: "Miguel Rodriguez",
      specialty: "Color Grading",
      experience: "12 years",
      rating: 4.8,
      students: 1800,
      avatar: "MR",
    },
  ];

  const recentWork = [
    {
      author: "Alex Kim",
      title: "Urban Light Study",
      likes: 156,
      comments: 23,
      views: 890,
      skill: "Photography",
    },
    {
      author: "Luna Park",
      title: "Minimalist Brand Identity",
      likes: 234,
      comments: 45,
      views: 1200,
      skill: "Design",
    },
    {
      author: "Jordan Smith",
      title: "Motion Graphics Experiment",
      likes: 89,
      comments: 12,
      views: 456,
      skill: "Animation",
    },
  ];

  const studyGroups = [
    {
      name: "Daily Photo Challenge",
      members: 24,
      activity: "Active now",
      focus: "Photography Practice",
    },
    {
      name: "Design Critique Circle",
      members: 18,
      activity: "2 hours ago",
      focus: "Peer Reviews",
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Users className="w-5 h-5 text-blue-600 mr-2" />
          Suggested Mentors
        </h3>
        
        <div className="space-y-4">
          {suggestedMentors.map((mentor, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Avatar className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center font-semibold">
                  {mentor.avatar}
                </Avatar>
                <div>
                  <h4 className="font-medium text-gray-900">{mentor.name}</h4>
                  <p className="text-sm text-gray-600">{mentor.specialty}</p>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span>{mentor.experience}</span>
                    <span>•</span>
                    <span>⭐ {mentor.rating}</span>
                    <span>•</span>
                    <span>{mentor.students} students</span>
                  </div>
                </div>
              </div>
              <Button size="sm" className="bg-gradient-to-r from-purple-500 to-blue-500">
                Connect
              </Button>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Heart className="w-5 h-5 text-red-500 mr-2" />
          Community Highlights
        </h3>
        
        <div className="space-y-4">
          {recentWork.map((work, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium text-gray-900">{work.title}</h4>
                  <p className="text-sm text-gray-600">by {work.author}</p>
                </div>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {work.skill}
                </span>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>{work.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageSquare className="w-4 h-4" />
                  <span>{work.comments}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{work.views}</span>
                </div>
                <Button variant="ghost" size="sm" className="ml-auto">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Study Groups</h3>
        
        <div className="space-y-3">
          {studyGroups.map((group, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{group.name}</h4>
                <p className="text-sm text-gray-600">{group.focus}</p>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span>{group.members} members</span>
                  <span>•</span>
                  <span>{group.activity}</span>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Join
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default CommunityConnections;
