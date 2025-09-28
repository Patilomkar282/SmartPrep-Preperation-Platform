import React from 'react';
import { Calendar, Clock, Users, Video, ArrowRight, BookOpen } from 'lucide-react';

const GroupDiscussions = () => {
  // Static mock data for group discussions
  const discussions = [
    {
      id: 1,
      title: "Current Affairs & General Knowledge Discussion",
      date: "2024-01-15",
      time: "10:00 AM",
      duration: "45 mins",
      participants: 12,
      topic: "Recent Economic Policies and Their Impact",
      meetLink: "https://meet.google.com/abc-defg-hij",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Technology & Innovation Round",
      date: "2024-01-16", 
      time: "2:00 PM",
      duration: "60 mins",
      participants: 15,
      topic: "AI and Future of Work",
      meetLink: "https://meet.google.com/xyz-uvwx-123",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Leadership & Management Discussion",
      date: "2024-01-17",
      time: "11:00 AM", 
      duration: "45 mins",
      participants: 10,
      topic: "Effective Team Leadership in Corporate Environment",
      meetLink: "https://meet.google.com/lmn-opqr-456",
      status: "upcoming"
    },
    {
      id: 4,
      title: "Social Issues & Ethics Debate",
      date: "2024-01-18",
      time: "3:30 PM",
      duration: "50 mins", 
      participants: 14,
      topic: "Sustainable Development and Corporate Responsibility",
      meetLink: "https://meet.google.com/rst-uvwx-789",
      status: "upcoming"
    },
    {
      id: 5,
      title: "Industry Analysis & Trends",
      date: "2024-01-19",
      time: "9:30 AM",
      duration: "55 mins",
      participants: 18,
      topic: "Startup Ecosystem in India",
      meetLink: "https://meet.google.com/def-ghi-012",
      status: "upcoming"
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  };

  const handleJoinMeeting = (meetLink, title) => {
    window.open(meetLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-2xl">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              Group Discussion Preparation
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Join interactive group discussions designed to enhance your communication skills 
              and prepare you for placement interviews
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Section */}
        <div className="grid ml-80 grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-slate-600">Upcoming Sessions</p>
                <p className="text-2xl font-bold text-slate-900">{discussions.length}</p>
              </div>
            </div>
          </div>
          
        
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-slate-600">Total Hours</p>
                <p className="text-2xl font-bold text-slate-900">4.5</p>
              </div>
            </div>
          </div>
        </div>

        {/* Discussion Sessions */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Scheduled Sessions</h2>
          
          <div className="grid gap-6">
            {discussions.map((discussion, index) => (
              <div
                key={discussion.id}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1 min-w-0">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                            Session {index + 1}
                          </div>
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">
                            {discussion.status}
                          </span>
                        </div>
                      </div>

                      {/* Title and Topic */}
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {discussion.title}
                      </h3>
                      <p className="text-slate-600 mb-6">
                        <span className="font-medium">Discussion Topic:</span> {discussion.topic}
                      </p>

                      {/* Details Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-slate-400" />
                          <div>
                            <p className="text-xs text-slate-500">Date</p>
                            <p className="text-sm font-medium text-slate-900">
                              {formatDate(discussion.date)}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-slate-400" />
                          <div>
                            <p className="text-xs text-slate-500">Time</p>
                            <p className="text-sm font-medium text-slate-900">
                              {discussion.time}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-slate-400" />
                          <div>
                            <p className="text-xs text-slate-500">Duration</p>
                            <p className="text-sm font-medium text-slate-900">
                              {discussion.duration}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-slate-400" />
                          <div>
                            <p className="text-xs text-slate-500">Participants</p>
                            <p className="text-sm font-medium text-slate-900">
                              {discussion.participants} students
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Join Button */}
                    <div className="flex-shrink-0 lg:ml-8">
                      <button
                        onClick={() => handleJoinMeeting(discussion.meetLink, discussion.title)}
                        className="w-full lg:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group"
                      >
                        <Video className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                        Join Meeting
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              💡 Group Discussion Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold mb-2">Stay Focused</h4>
                <p className="text-blue-100 text-sm">Keep your points relevant to the topic and avoid going off-track</p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="font-semibold mb-2">Be Respectful</h4>
                <p className="text-blue-100 text-sm">Listen to others and acknowledge their viewpoints before presenting yours</p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h4 className="font-semibold mb-2">Speak Clearly</h4>
                <p className="text-blue-100 text-sm">Articulate your thoughts clearly and maintain appropriate volume</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDiscussions;