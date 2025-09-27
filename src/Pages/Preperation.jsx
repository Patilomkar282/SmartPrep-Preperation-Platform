import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Brain, Code, Target } from 'lucide-react';

export default function Preperation() {
  const navigate = useNavigate();

  const preparationCards = [
    {
      id: 'aptitude',
      title: 'Aptitude Test',
      description:
        'Master logical reasoning, quantitative aptitude, and verbal skills with comprehensive practice tests.',
      icon: Brain,
      route: '/aptitude',
      gradient: 'from-blue-600 to-indigo-700',
      hoverGradient: 'hover:from-blue-700 hover:to-indigo-800',
    },
    {
      id: 'coresub',
      title: 'Core Subject Preparation',
      description:
        'Strengthen your core computer science subjects with in-depth concepts and practical examples.',
      icon: Target,
      route: '/coresub',
      gradient: 'from-purple-600 to-violet-700',
      hoverGradient: 'hover:from-purple-700 hover:to-violet-800',
    },
    {
      id: 'dsa',
      title: 'DSA Prep',
      description:
        'Excel in Data Structures and Algorithms with curated problems and detailed solutions.',
      icon: Code,
      route: '/dsa',
      gradient: 'from-emerald-600 to-teal-700',
      hoverGradient: 'hover:from-emerald-700 hover:to-teal-800',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center">
              <Target className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent leading-tight">
            Preparation Modules
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Elevate your skills with our comprehensive preparation modules designed for academic and professional excellence
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {preparationCards.map((card, index) => {
            const IconComponent = card.icon;

            return (
              <div
                key={card.id}
                className="group relative cursor-pointer"
                onClick={() => navigate(card.route)} // navigate when the card is clicked
              >
                <div className="relative h-full bg-white rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-200/60 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-slate-300/30 hover:-translate-y-2">
                  
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-all duration-500 pointer-events-none`}
                  />

                  {/* Card Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-6">
                      <div
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${card.gradient} ${card.hoverGradient} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors duration-300">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-base leading-relaxed mb-8 flex-grow font-light">
                      {card.description}
                    </p>

                    {/* Explore Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // prevent card click from triggering
                        navigate(card.route);
                      }}
                      className={`mt-auto w-full bg-gradient-to-r ${card.gradient} ${card.hoverGradient} text-white rounded-xl py-3 px-6 font-semibold text-base transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 hover:scale-105 group-hover:shadow-lg`}
                    >
                      <span className="flex items-center gap-2">
                        Explore
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </button>
                  </div>

                  {/* Subtle border gradient on hover */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${card.gradient} p-[1px] opacity-0 group-hover:opacity-20 transition-all duration-500 pointer-events-none`}
                  >
                    <div className="w-full h-full bg-white rounded-3xl" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Accent */}
        <div className="mt-20 text-center">
          <div className="inline-block w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full" />
        </div>
      </div>
    </div>
  );
}
