import React from 'react';
import { useNavigate } from 'react-router-dom';

const CoreSubjects = () => {
  const navigate = useNavigate();

  const subjects = [
    {
      id: 'oop',
      title: 'Object-Oriented Programming',
      description: 'Master classes, inheritance, polymorphism, and design patterns. Essential for technical interviews at top tech companies and fundamental to modern software development.',
      route: '/ooplearning'
    },
    {
      id: 'dbms',
      title: 'Database Management Systems',
      description: 'Learn SQL, normalization, indexing, and transaction management. Critical for backend roles and frequently tested in technical rounds across all major companies.',
      route: '/dbmslearning'
    },
    {
      id: 'os',
      title: 'Operating Systems',
      description: 'Understand processes, threads, memory management, Scheduling Algorithms, IPC and file systems. Core knowledge for system programming roles and popular in technical interviews.',
      route: '/oslearning'
    },
    {
      id: 'cn',
      title: 'Computer Networks',
      description: 'Grasp protocols, network layers, and distributed systems concepts. Vital for full-stack development and increasingly important in cloud-native applications.',
      route: '/cnlearning'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Core Subjects for Placements
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master these fundamental computer science concepts to excel in technical interviews 
            and secure your dream placement at top-tier companies.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {subjects.map((subject, index) => (
            <div
              key={subject.id}
              className={`group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 backdrop-blur-sm`}
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                  subject.id === 'oop' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                  subject.id === 'dbms' ? 'bg-gradient-to-r from-green-500 to-emerald-600' :
                  subject.id === 'os' ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                  'bg-gradient-to-r from-blue-500 to-cyan-500'
                }`}>
                  {subject.id === 'oop' && (
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  )}
                  {subject.id === 'dbms' && (
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  )}
                  {subject.id === 'os' && (
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {subject.id === 'cn' && (
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {subject.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-8 group-hover:text-gray-700 transition-colors">
                  {subject.description}
                </p>

                {/* Button */}
                <button
                  onClick={() => navigate(subject.route)}
                  className={`inline-flex items-center justify-center w-full px-6 py-3.5 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                    subject.id === 'oop' ? 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 shadow-lg shadow-purple-500/25' :
                    subject.id === 'dbms' ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg shadow-green-500/25' :
                    subject.id === 'os' ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg shadow-orange-500/25' :
                    'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/25'
                  }`}
                >
                  <span>Start Learning</span>
                  <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">
              Interactive learning paths designed for placement success
            </span>
          </div>
        </div>
      </div>

      {/* Keyframes for animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CoreSubjects;
