import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  ChevronDown, 
  Settings, 
  LogOut, 
  BookOpen, 
  Code, 
  Briefcase, 
  Users, 
  MessageCircle,
  Mic
} from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Interview Simulation", icon: Mic, href: "/interview-simulation" },

    { name: "Learning Modules", icon: Code, href: "/learning-modules" },
    { name: "Job Board", icon: Briefcase, href: "/job-board" },
    { name: "Webinar & Mentorship", icon: Users, href: "/webinar-mentorship" },
    { name: "Group Discussion", icon: MessageCircle, href: "/group-discussion" }
  ];

  const user = {
    name: "Alex Johnson",
    email: "alex@university.edu",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  };

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 20 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl' 
          : 'bg-gray-900'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            onClick={() => navigate("/")} 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <h1 className="text-2xl font-bold text-white mr-30">SmartPrep</h1>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <item.icon className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                <span className="font-medium">{item.name}</span>
              </motion.a>
            ))}
          </nav>

          {/* Profile */}
          <motion.button
  onClick={() => navigate("/profile")} // <-- Go to /profile directly
  className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-800 transition-colors duration-200"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <img
    src={user.avatar}
    alt={user.name}
    className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500/30"
  />
  <div className="hidden md:block text-left">
    <p className="text-sm font-semibold text-white">{user.name}</p>
    <p className="text-xs text-gray-400">{user.email}</p>
  </div>
  <ChevronDown className="w-4 h-4 text-gray-400" />
</motion.button>
        </div>
      </div>
    </motion.header>
  );
}