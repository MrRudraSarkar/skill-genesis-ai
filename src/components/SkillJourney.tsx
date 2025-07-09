
import { CheckCircle, Circle, Star, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const SkillJourney = () => {
  const skills = [
    {
      name: "Photography Fundamentals",
      progress: 85,
      status: "active",
      lessons: 12,
      completed: 10,
      difficulty: "Beginner",
    },
    {
      name: "Color Theory",
      progress: 45,
      status: "in-progress",
      lessons: 8,
      completed: 3,
      difficulty: "Intermediate",
    },
    {
      name: "Advanced Composition",
      progress: 0,
      status: "locked",
      lessons: 15,
      completed: 0,
      difficulty: "Advanced",
    },
  ];

  const achievements = [
    { name: "First Upload", icon: "📸", unlocked: true },
    { name: "Community Favorite", icon: "❤️", unlocked: true },
    { name: "Mentor Badge", icon: "🎓", unlocked: false },
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Your Creative Journey</h3>
          <TrendingUp className="w-5 h-5 text-purple-600" />
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">12</div>
            <div className="text-sm text-gray-600">Courses Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">156</div>
            <div className="text-sm text-gray-600">Hours Practiced</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">8</div>
            <div className="text-sm text-gray-600">Community Connections</div>
          </div>
        </div>

        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {skill.status === "active" ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : skill.status === "in-progress" ? (
                    <Circle className="w-5 h-5 text-blue-500" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-300" />
                  )}
                  <h4 className="font-medium text-gray-900">{skill.name}</h4>
                </div>
                <Badge variant="outline" className="text-xs">
                  {skill.difficulty}
                </Badge>
              </div>
              
              <Progress value={skill.progress} className="mb-2" />
              
              <div className="flex justify-between text-sm text-gray-600">
                <span>{skill.completed}/{skill.lessons} lessons</span>
                <span>{skill.progress}% complete</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Star className="w-5 h-5 text-yellow-500 mr-2" />
          Achievements
        </h3>
        
        <div className="grid grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`text-center p-3 rounded-lg border ${
                achievement.unlocked
                  ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="text-2xl mb-1">{achievement.icon}</div>
              <div
                className={`text-sm font-medium ${
                  achievement.unlocked ? "text-gray-900" : "text-gray-400"
                }`}
              >
                {achievement.name}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default SkillJourney;
