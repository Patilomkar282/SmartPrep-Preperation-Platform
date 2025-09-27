import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProgressDashboard() {
  // Static demo data
  const profileCompletion = 45;
  const skillsCount = 0;

  const getCompletionMessage = () => {
    return "Welcome! Let's build your profile together";
  };

  const getCompletionColor = () => {
    return "text-gray-600";
  };

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl text-gray-900">Profile Progress</CardTitle>
                <p className={`text-sm font-medium ${getCompletionColor()}`}>
                  {getCompletionMessage()}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">Completion</span>
                <span className="text-2xl font-bold text-gray-900">{profileCompletion}%</span>
              </div>
              <Progress 
                value={profileCompletion} 
                className="h-3 bg-gray-200"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Profile completion status</span>
                <span>{skillsCount} skills added</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}