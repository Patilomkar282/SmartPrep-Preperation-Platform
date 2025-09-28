
import React, { useState, useEffect } from "react";
import { Briefcase,Shield} from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  Users, 
  BookOpen, 
  Award, 
  Target, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Mic,
  Video,
  Brain,
  TrendingUp,
  Star,
  Quote
} from "lucide-react";

// Feature data is defined outside the component to ensure it's a stable reference
// and prevent unnecessary re-renders or useEffect re-executions.
const services = [
    {
      icon: "🧠",
      title: "AI Learning Modules",
      description: "Aptitude, coding, and technical interview preparation powered by artificial intelligence",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "👥",
      title: "Alumni Mentorship",
      description: "Get personalized guidance from successful alumni in your field",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "🎯",
      title: "Expert Webinars",
      description: "Live sessions with industry experts and placement officers",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "💼",
      title: "Smart Job Board",
      description: "Daily updated fresher-friendly job opportunities tailored for you",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "📄",
      title: "Resume Analysis",
      description: "AI-powered resume optimization and job matching algorithms",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: "🚀",
      title: "Automated Scheduling",
      description: "Smart scheduling for mentorship sessions and webinar bookings",
      gradient: "from-teal-500 to-blue-500"
    }
  ];
 const problems = [
    "Lack of structured placement preparation",
    "No access to industry mentors",
    "Limited knowledge of current job market",
    "Weak technical interview skills",
    "Poorly optimized resumes"
  ];

  const solutions = [
    "AI-powered personalized learning paths",
    "Direct access to successful alumni",
    "Daily updated job opportunities",
    "Mock interviews with real-time feedback",
    "Automated resume analysis & optimization"
  ];
const features = [
  {
    icon: Mic,
    title: "AI-Powered Mock Interviews",
    description: "Real-time voice interaction with instant feedback and performance analysis",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: BookOpen,
    title: "Comprehensive Learning",
    description: "Aptitude, DSA, and core CS subjects with practice problems",
    color: "from-purple-500 to-pink-400"
  },
  {
    icon: Users,
    title: "Alumni Mentorship",
    description: "Connect with successful alumni for guidance and career advice",
    color: "from-green-500 to-emerald-400"
  },
  {
    icon: Target,
    title: "Job Matching",
    description: "Smart resume analysis with job compatibility scoring",
    color: "from-orange-500 to-red-400"
  }
];

const stats = [
  { number: "50K+", label: "Students Placed", icon: Users },
  { number: "95%", label: "Success Rate", icon: TrendingUp },
  { number: "500+", label: "Partner Companies", icon: Target },
  { number: "1000+", label: "Mock Interviews Daily", icon: Mic }
];

const successStories = [
  {
    name: "Priya Sharma",
    company: "Google",
    package: "₹45 LPA",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    quote: "SmartPrep's mock interviews prepared me for the real Google interview. The AI feedback was incredibly detailed!"
  },
  {
    name: "Rahul Patel",
    company: "Microsoft",
    package: "₹38 LPA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote: "The DSA preparation module and mentorship program helped me crack Microsoft's coding rounds effortlessly."
  },
  {
    name: "Ananya Singh",
    company: "Amazon",
    package: "₹42 LPA",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    quote: "From campus to Amazon - SmartPrep's comprehensive approach made all the difference in my placement journey."
  }
];

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isInterviewPlaying, setIsInterviewPlaying] = useState(false);

  useEffect(() => {
    // The `features` array is a global constant, so `features.length` is also constant.
    // However, to satisfy strict `react-hooks/exhaustive-deps` lint rules or to be
    // explicit about the dependency, `features.length` is included.
    // `setActiveFeature` is a state setter function, which React guarantees to be stable.
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]); // Added features.length to the dependency array

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ace Your
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Dream Job
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              AI-powered mock interviews, comprehensive learning modules, and expert mentorship 
              to transform your placement preparation journey.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
            
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsInterviewPlaying(!isInterviewPlaying)}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.slice(0, 2).map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Interactive Mock Interview Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-gray-800 rounded-3xl p-8 shadow-2xl">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">AI Interviewer</div>
                      <div className="text-gray-400 text-sm">Technical Round</div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-4 h-4 bg-green-500 rounded-full"
                  />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={isInterviewPlaying ? "active" : "inactive"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-gray-700 rounded-xl p-4 mb-4"
                  >
                    <div className="flex items-start gap-3">
                      <Mic className="w-5 h-5 text-blue-400 mt-1" />
                      <div>
                        <p className="text-white text-sm mb-2">
                          {isInterviewPlaying 
                            ? "Explain the difference between React hooks and class components..."
                            : "Click 'Watch Demo' to see AI interview in action"
                          }
                        </p>
                        {isInterviewPlaying && (
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                            Recording your response...
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gray-700 rounded-lg p-3 text-center">
                    <div className="text-green-400 font-bold">85%</div>
                    <div className="text-xs text-gray-400">Clarity</div>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-3 text-center">
                    <div className="text-blue-400 font-bold">92%</div>
                    <div className="text-xs text-gray-400">Technical</div>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-3 text-center">
                    <div className="text-purple-400 font-bold">78%</div>
                    <div className="text-xs text-gray-400">Confidence</div>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Get Detailed Feedback
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* How It Works */}
           <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold text-slate-800 mb-4">How SmartPrep Works</h2>
      <p className="text-xl text-slate-600">A seamless flow from preparation to placement</p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
      {[
        { step: "01", title: "Students Register", desc: "Sign up and take skill assessment", icon: "👨‍🎓", color: "from-blue-500 to-cyan-500" },
        { step: "02", title: "Learning Modules", desc: "Comprehensive study materials for aptitude and technical skills", icon: "📚", color: "from-purple-500 to-pink-500" },
        { step: "03", title: "AI Mock Interview", desc: "Practice interviews with AI-based voice assistant", icon: "🤖", color: "from-green-500 to-emerald-500" },
        { step: "04", title: "Alumni Mentorship", desc: "Get guidance from alumni and attend webinars", icon: "🎓", color: "from-yellow-500 to-orange-500" },
        { step: "05", title: "Group Discussions", desc: "Join peer discussions and enhance communication skills", icon: "💬", color: "from-indigo-500 to-violet-500" },
        { step: "06", title: "Get Hired", desc: "Apply for jobs, check resume fit, and land your dream job", icon: "🎯", color: "from-red-500 to-pink-500" }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="relative text-center"
        >
          <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg`}>
            {item.icon}
          </div>
          <div className={`text-sm font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
            STEP {item.step}
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
          <p className="text-slate-600">{item.desc}</p>

          {index < 5 && (
            <div className="hidden md:block absolute top-8 left-full w-full">
              <svg className="w-full h-8" viewBox="0 0 100 20" fill="none">
                <path d="M10 10 L90 10" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M85 5 L90 10 L85 15" stroke="#e2e8f0" strokeWidth="2" fill="none" />
              </svg>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  </div>
</section>




      {/* Services */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Services We Offer</h2>
            <p className="text-xl text-slate-600">Comprehensive placement preparation ecosystem</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-8">
                Problems Students Face
              </h2>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-red-50 rounded-xl"
                  >
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-slate-700 font-medium">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-8">
                SmartPrep Solutions
              </h2>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl"
                  >
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-slate-700 font-medium">{solution}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     

      


      
      
       {/* Mentorship Connection Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50" id="discussion">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Connect with Industry Experts</h2>
              <p className="text-xl text-gray-600 mb-8">
                Get personalized guidance from successful alumni and industry professionals. 
                Schedule one-on-one sessions, join group discussions, and build valuable connections.
              </p>
              <div className="space-y-4">
                {[
                  'One-on-one mentorship sessions',
                  'Resume review and optimization',
                  'Mock interview practice',
                  'Career guidance and roadmap',
                  'Industry insights and trends',
                  'Networking opportunities'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              {/* <Button size="lg" className="mt-8 bg-purple-600 hover:bg-purple-700">
                Find Your Mentor
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Available Mentors</h3>
                  {/* <Badge className="bg-green-100 text-green-800">
                    Online Now: 24
                  </Badge> */}
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Sarah Chen', company: 'Google', expertise: 'Software Engineering', availability: 'Available' },
                    { name: 'Raj Kumar', company: 'Microsoft', expertise: 'Product Management', availability: 'Busy' },
                    { name: 'Emily Davis', company: 'Amazon', expertise: 'Data Science', availability: 'Available' }
                  ].map((mentor, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {mentor.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{mentor.name}</h4>
                        <p className="text-sm text-gray-600">{mentor.expertise} at {mentor.company}</p>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${
                        mentor.availability === 'Available' ? 'bg-green-400' : 'bg-yellow-400'
                      }`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10,000+', label: 'Students Placed', icon: Users },
              { number: '500+', label: 'Partner Companies', icon: Briefcase },
              { number: '95%', label: 'Success Rate', icon: Award },
              { number: '24/7', label: 'Support Available', icon: Shield }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <stat.icon className="w-8 h-8 mx-auto text-blue-400 mb-2" />
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Success Stories */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real students, real results. See how SmartPrep transformed their careers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-3xl p-8 shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-500/20"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{story.name}</h4>
                    <p className="text-blue-600 font-semibold">{story.company}</p>
                    <div className="text-green-600 font-bold text-lg">{story.package}</div>
                  </div>
                </div>
                
                <Quote className="w-8 h-8 text-blue-500 mb-4" />
                <p className="text-gray-600 italic leading-relaxed">{story.quote}</p>
                
                <div className="flex gap-1 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}