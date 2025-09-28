import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AptiQuiz from './AptiQuiz'; // Assuming AptiQuiz component exists

const AptitudeSection = () => {
  const [activeQuiz, setActiveQuiz] = useState(null); // 'logical', 'verbal', 'quantitative', or null
  const navigate = useNavigate();

  const sections = [
    {
      id: 'logical',
      title: 'Logical Reasoning',
      description: 'Test your analytical thinking and problem-solving abilities through pattern recognition and logical deduction.',
      subtopics: [
        'Pattern Recognition & Sequences',
        'Logical Deduction & Inference', 
        'Analytical Reasoning',
        'Critical Thinking Problems',
        'Spatial & Visual Logic'
      ],
      gradientHeader: 'from-blue-600 via-blue-500 to-cyan-400',
      backgroundStyle: 'bg-gradient-to-br from-blue-50/50 to-cyan-50/30',
      buttonGradient: 'from-blue-600 to-cyan-500',
      buttonHover: 'hover:from-blue-700 hover:to-cyan-600',
      prepareRoute: '/logical'
    },
    {
      id: 'verbal',
      title: 'Verbal Ability',
      description: 'Evaluate your command of language, reading comprehension, and communication skills.',
      subtopics: [
        'Reading Comprehension',
        'Grammar & Sentence Correction',
        'Vocabulary & Word Usage',
        'Verbal Analogies',
        'Critical Reasoning in Text'
      ],
      gradientHeader: 'from-purple-600 via-purple-500 to-pink-400',
      backgroundStyle: 'bg-gradient-to-br from-purple-50/50 to-pink-50/30',
      buttonGradient: 'from-purple-600 to-pink-500',
      buttonHover: 'hover:from-purple-700 hover:to-pink-600',
      prepareRoute: '/verbal'
    },
    {
      id: 'quantitative',
      title: 'Quantitative Analysis',
      description: 'Assess your mathematical reasoning, numerical ability, and data interpretation skills.',
      subtopics: [
        'Arithmetic & Number Theory',
        'Algebra & Equations',
        'Geometry & Mensuration',
        'Data Interpretation',
        'Statistical Analysis'
      ],
      gradientHeader: 'from-emerald-600 via-green-500 to-teal-400',
      backgroundStyle: 'bg-gradient-to-br from-emerald-50/50 to-teal-50/30',
      buttonGradient: 'from-emerald-600 to-teal-500',
      buttonHover: 'hover:from-emerald-700 hover:to-teal-600',
      prepareRoute: '/quant'
    }
  ];

  const handleStartTest = (sectionId) => {
    setActiveQuiz(sectionId);
  };
  
  const handleBackToSections = () => {
    setActiveQuiz(null);
  };

  if (activeQuiz) {
    return <AptiQuiz sectionId={activeQuiz} onBack={handleBackToSections} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Aptitude Preparation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Challenge yourself across three core areas of cognitive ability. 
            Each section is designed to evaluate different aspects of your intellectual capabilities.
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${section.backgroundStyle} border border-white/20`}
            >
              {/* Gradient Header */}
              <div className={`bg-gradient-to-r ${section.gradientHeader} px-8 py-8 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                    {section.title}
                  </h2>
                  <div className="w-12 h-1 bg-white/30 rounded-full"></div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              </div>

              {/* Content */}
              <div className="px-8 py-8">
                <p className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
                  {section.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-gray-900 font-semibold text-lg mb-4">
                    Key Areas Covered:
                  </h3>
                  <ul className="space-y-3">
                    {section.subtopics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.gradientHeader} mt-2 mr-3 flex-shrink-0`}></div>
                        <span className="text-gray-700 font-medium leading-relaxed">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Prepare Button */}
                  <button
                    onClick={() => navigate(section.prepareRoute)}
                    className={`flex-1 bg-white text-${section.gradientHeader.includes('blue') ? 'blue-600' : section.gradientHeader.includes('purple') ? 'purple-600' : 'emerald-600'} font-semibold py-4 px-6 rounded-xl border border-gray-300 shadow hover:shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-30 text-lg tracking-wide`}
                  >
                    Prepare
                  </button>

                  {/* Start Assessment Button */}
                  <button
                    onClick={() => handleStartTest(section.id)}
                    className={`flex-1 bg-gradient-to-r ${section.buttonGradient} ${section.buttonHover} text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-30 text-lg tracking-wide`}
                  >
                    <span className="flex items-center justify-center">
                      Start Assessment
                      <svg 
                        className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${section.gradientHeader} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-6">
            Ready to discover your cognitive strengths?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-sm text-gray-500 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Estimated time: 45-60 minutes per section
            </div>
            <div className="text-sm text-gray-500 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Instant results and detailed analysis
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AptitudeSection;
