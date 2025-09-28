// "use client"
import React from "react"
import { useState, useEffect } from "react"
import {
  User,
  GraduationCap,
  Briefcase,
  Link2,
  Plus,
  X,
  Save,
  Edit2,
  TrendingUp,
  BrainCircuit,
  Code,
  MessageSquareQuote,
  CheckCircle,
  Copy,
  Star,
  Target,
  Award,
  Calendar,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react"

// Button
function Button({ variant = "default", size = "default", className = "", children, ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-300",
    outline: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-300",
  }
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3",
    icon: "h-10 w-10 p-0",
  }
  return (
    <button
      className={`${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

// Input
function Input({ className = "", ...props }) {
  const base =
    "w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  return <input className={`${base} ${className}`} {...props} />
}

// Label
function Label({ className = "", children, ...props }) {
  return (
    <label className={`text-sm font-medium text-gray-700 ${className}`} {...props}>
      {children}
    </label>
  )
}

// Card
function Card({ className = "", children, ...props }) {
  return (
    <div className={`rounded-2xl border border-gray-100 bg-white shadow ${className}`} {...props}>
      {children}
    </div>
  )
}
function CardHeader({ className = "", children, ...props }) {
  return (
    <div className={`px-6 py-4 ${className}`} {...props}>
      {children}
    </div>
  )
}
function CardTitle({ className = "", children, ...props }) {
  return (
    <h3 className={`text-xl font-semibold leading-none tracking-tight ${className}`} {...props}>
      {children}
    </h3>
  )
}
function CardContent({ className = "", children, ...props }) {
  return (
    <div className={`px-6 py-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

// Badge
function Badge({ variant = "default", className = "", children, ...props }) {
  const variants = {
    default: "inline-flex items-center rounded-full bg-gray-800 text-white text-xs font-medium px-2.5 py-1",
    secondary: "inline-flex items-center rounded-full bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1",
  }
  return (
    <span className={`${variants[variant] || variants.default} ${className}`} {...props}>
      {children}
    </span>
  )
}

// Progress
function Progress({ value = 0, className = "" }) {
  const safe = Math.max(0, Math.min(100, Number(value) || 0))
  return (
    <div className={`w-full overflow-hidden rounded-full bg-gray-200 ${className}`}>
      <div
        className="h-full rounded-full bg-blue-600 transition-[width] duration-500 ease-out"
        style={{ width: `${safe}%` }}
      />
    </div>
  )
}

// Enhanced Circular Progress with CSS animations (unchanged logic)
const CircularProgress = ({ progress = 0, size = 160, strokeWidth = 12, label = "Overall" }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (animatedProgress / 100) * circumference

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedProgress(progress), 500)
    return () => clearTimeout(timer)
  }, [progress])

  const getProgressColor = (p) => {
    if (p >= 80) return "text-emerald-500"
    if (p >= 60) return "text-blue-500"
    if (p >= 40) return "text-amber-500"
    return "text-red-500"
  }

  return (
    <div
      className={`relative cursor-pointer transition-transform duration-300 ${isHovered ? "scale-105" : ""}`}
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg className="w-full h-full transform -rotate-90" viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="text-gray-200"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={`${getProgressColor(progress)} transition-all duration-2000 ease-out`}
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            transition: "stroke-dashoffset 2s ease-in-out",
          }}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className={`text-3xl font-bold ${getProgressColor(progress)} transition-transform duration-200 ${
            isHovered ? "scale-110" : ""
          }`}
        >
          {animatedProgress}%
        </span>
        <span className="text-sm text-gray-500 font-medium">{label}</span>
      </div>
      {progress >= 75 && (
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
          <Star className="w-4 h-4 text-yellow-800" />
        </div>
      )}
    </div>
  )
}

// Enhanced Progress Module Card (uses in-file Card/Progress/Button)
const ProgressModuleCard = ({ module, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className="relative opacity-0 translate-x-[-50px] animate-fade-in-right"
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
        <div className={`absolute top-0 left-0 w-1 h-full ${module.color.replace("text-", "bg-")}`}></div>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className={`p-3 rounded-xl ${module.bg} transition-transform duration-200 ${isHovered ? "rotate-3" : ""}`}
              >
                <module.icon className={`w-6 h-6 ${module.color}`} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{module.name}</h3>
                <p className="text-sm text-gray-500">Current Level</p>
              </div>
            </div>
            <div className={`text-right transition-transform duration-200 ${isHovered ? "scale-110" : ""}`}>
              <span className={`text-2xl font-bold ${module.color}`}>{module.progress}%</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Progress</span>
              <span className="text-gray-800 font-medium">{module.progress}/100</span>
            </div>
            <div className="relative">
              <Progress value={module.progress} className="h-3 bg-gray-200" />
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Target className="w-3 h-3" />
              <span>Target: 90%</span>
            </div>
            {module.progress >= 75 && (
              <div className="flex items-center gap-1 text-yellow-600 animate-pulse">
                <Award className="w-3 h-3" />
                <span>Excellent</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Enhanced Profile Form with tabbed sections (uses in-file UI primitives)
const ProfileForm = ({ userData, setUserData, setIsEditing }) => {
  const [formData, setFormData] = useState(userData)
  const [currentSkill, setCurrentSkill] = useState("")
  const [activeSection, setActiveSection] = useState("personal")

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const addSkill = () => {
    if (currentSkill.trim() && !formData.skills.includes(currentSkill.trim())) {
      setFormData((prev) => ({ ...prev, skills: [...prev.skills, currentSkill.trim()] }))
      setCurrentSkill("")
    }
  }

  const removeSkill = (skillToRemove) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }))
  }

  const handleKeyPress = (e) => e.key === "Enter" && (e.preventDefault(), addSkill())

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserData(formData)
    setIsEditing(false)
  }

  const sections = [
    { id: "personal", label: "Personal", icon: User },
    { id: "skills", label: "Skills", icon: Briefcase },
    { id: "links", label: "Links", icon: Link2 },
  ]

  return (
    <div className="animate-fade-in">
      <Card className="border-0 shadow-2xl shadow-blue-500/10 bg-white/95 backdrop-blur-xl">
        <CardHeader className="border-b border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl font-bold text-gray-900">Edit Your Profile</CardTitle>
              <p className="text-gray-500 mt-1">Update your information and skills</p>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsEditing(false)}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex gap-2 mt-4">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveSection(section.id)}
                className="flex items-center gap-2 transition-all duration-200"
              >
                <section.icon className="w-4 h-4" />
                {section.label}
              </Button>
            ))}
          </div>
        </CardHeader>

        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {activeSection === "personal" && (
              <div className="space-y-6 animate-slide-in">
                <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-500" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="border-gray-200 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone Number</Label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="border-gray-200 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Passing Year</Label>
                    <Input
                      value={formData.passing_year}
                      onChange={(e) => handleInputChange("passing_year", e.target.value)}
                      className="border-gray-200 focus:border-blue-500 transition-colors"
                    />
                  </div>

                   <div className="space-y-2">
                    <Label>Class</Label>
                    <Input
                      value={formData.current_class}
                      onChange={(e) => handleInputChange("current_class", e.target.value)}
                      className="border-gray-200 focus:border-blue-500 transition-colors"
                    />
                  </div>


                  <div className="space-y-2">
                    <Label>Branch/Specialization</Label>
                    <Input
                      value={formData.branch}
                      onChange={(e) => handleInputChange("branch", e.target.value)}
                      className="border-gray-200 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeSection === "skills" && (
              <div className="space-y-6 animate-slide-in">
                <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-500" />
                  Skills & Expertise
                </h3>
                <div className="flex gap-2">
                  <Input
                    value={currentSkill}
                    onChange={(e) => setCurrentSkill(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Add a skill and press Enter"
                    className="border-gray-200 focus:border-blue-500 transition-colors"
                  />
                  <Button type="button" onClick={addSkill} className="bg-blue-600 hover:bg-blue-700 transition-colors">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3 min-h-[100px] p-4 border-2 border-dashed border-gray-200 rounded-lg">
                  {formData.skills.map((skill, index) => (
                    <div key={skill} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors px-3 py-1"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => removeSkill(skill)}
                          className="ml-2 hover:text-red-600 transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    </div>
                  ))}
                  {formData.skills.length === 0 && (
                    <p className="text-gray-400 text-center w-full flex items-center justify-center">
                      Add skills to showcase your expertise
                    </p>
                  )}
                </div>
              </div>
            )}

            {activeSection === "links" && (
              <div className="space-y-6 animate-slide-in">
                <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                  <Link2 className="w-5 h-5 text-blue-500" />
                  Professional Links
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Resume URL</Label>
                    <Input
                      value={formData.resume_url}
                      onChange={(e) => handleInputChange("resume_url", e.target.value)}
                      placeholder="https://..."
                      className="border-gray-200 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Portfolio URL</Label>
                    <Input
                      value={formData.portfolio_url}
                      onChange={(e) => handleInputChange("portfolio_url", e.target.value)}
                      placeholder="https://..."
                      className="border-gray-200 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>LinkedIn URL</Label>
                    <Input
                      value={formData.linkedin_url}
                      onChange={(e) => handleInputChange("linkedin_url", e.target.value)}
                      placeholder="https://linkedin.com/in/..."
                      className="border-gray-200 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>GitHub URL</Label>
                    <Input
                      value={formData.github_url}
                      onChange={(e) => handleInputChange("github_url", e.target.value)}
                      placeholder="https://github.com/..."
                      className="border-gray-200 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-end gap-3 pt-6 border-t">
              <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 transition-colors">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

// Main Profile Component with enhanced UI (single-file, no external UI libs)
export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [copiedLink, setCopiedLink] = useState(null)

  const [userData, setUserData] = useState({
    fullName: "Alex Johnson",
    email: "alex@university.edu",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    phone: "+91 85789074598",
    passing_year: "2026",
    current_class:"TE",
    branch: "Information Technology",
    skills: ["React", "Node.js", "Python", "TensorFlow", "Figma", "System Design", "Next.js"],
    resume_url: "https://example.com/resume.pdf",
    portfolio_url: "https://alexchen.dev",
    linkedin_url: "https://linkedin.com/in/alexchen",
    github_url: "https://github.com/alexchen",
    progress: {
      aptitude: 85,
      dsa: 65,
      mockInterview: 70,
    },
  })

  const overallProgress = Math.round(
    (userData.progress.aptitude + userData.progress.dsa + userData.progress.mockInterview) / 3,
  )

  const copyLink = (link) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(link)
      setCopiedLink(link)
      setTimeout(() => setCopiedLink(null), 2000)
    }
  }

  const modules = [
    {
      name: "Aptitude",
      progress: userData.progress.aptitude,
      icon: BrainCircuit,
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
    {
      name: "DSA Practice",
      progress: userData.progress.dsa,
      icon: Code,
      color: "text-sky-600",
      bg: "bg-sky-100",
    },
    {
      name: "Mock Interviews",
      progress: userData.progress.mockInterview,
      icon: MessageSquareQuote,
      color: "text-emerald-600",
      bg: "bg-emerald-100",
    },
  ]

  return (
    <>
      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-in { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fade-in-right { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }

        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        .animate-slide-in { animation: slide-in 0.3s ease-out; }
        .animate-fade-in-right { animation: fade-in-right 0.6s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .hover-scale:hover { transform: scale(1.05); }
        .hover-rotate:hover { transform: rotate(2deg); }
        .transition-all { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 font-sans">
        <main className="max-w-7xl mx-auto p-4 md:p-8">
          <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-500/30 text-white overflow-hidden mb-8 animate-fade-in">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-16 -left-10 w-64 h-64 bg-white/10 rounded-full animate-float"></div>
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-white/5 rounded-full"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="relative hover-scale transition-all hover-rotate">
                <img
                  src={userData.avatarUrl || "/placeholder.svg"}
                  alt="User Avatar"
                  className="w-32 h-32 rounded-full border-4 border-white/50 shadow-2xl object-cover"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center animate-bounce">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="text-center md:text-left flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{userData.fullName}</h1>
                <p className="text-blue-200 text-lg mb-1">{userData.branch}</p>
                <p className="text-blue-300 text-sm mb-4 flex items-center justify-center md:justify-start gap-2">
                  <Calendar className="w-4 h-4" />
                  Student of {userData.current_class}
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                  {userData.skills.slice(0, 4).map((skill, index) => (
                    <div key={skill} className="animate-fade-in" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-0 hover:bg-white/30 transition-colors">
                        {skill}
                      </Badge>
                    </div>
                  ))}
                  {userData.skills.length > 4 && (
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
                      +{userData.skills.length - 4} more
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  onClick={() => setIsEditing(true)}
                  className="bg-white/90 text-blue-600 hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  <Edit2 className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
                <div className="text-center">
                  <p className="text-sm text-blue-200">Overall Progress</p>
                  <p className="text-2xl font-bold">{overallProgress}%</p>
                </div>
              </div>
            </div>
          </div>

          {isEditing ? (
            <ProfileForm userData={userData} setUserData={setUserData} setIsEditing={setIsEditing} />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
              <div className="lg:col-span-2 space-y-8">
                <div
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
                >
                  <Card className="border-0 shadow-2xl shadow-slate-500/10 bg-gradient-to-r from-white to-blue-50/30 overflow-hidden">
                    <CardHeader className="border-b border-gray-100">
                      <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                        <TrendingUp className="text-blue-600" />
                        Overall Preparation Progress
                      </CardTitle>
                      <p className="text-gray-600">Track your journey to success</p>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row items-center gap-12">
                        <CircularProgress progress={overallProgress} size={200} strokeWidth={16} label="Overall" />
                        <div className="flex-1 w-full space-y-6">
                          {modules.map((module, index) => (
                            <ProgressModuleCard key={module.name} module={module} index={index} />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-8">
                <div
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
                >
                  <Card className="border-0 shadow-xl shadow-slate-500/10 bg-gradient-to-br from-white to-gray-50">
                    <CardHeader className="border-b border-gray-100">
                      <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <User className="text-blue-600" /> Personal Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <Mail className="w-5 h-5 text-gray-500" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">Email</p>
                          <p className="text-sm text-gray-500 truncate">{userData.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <Phone className="w-5 h-5 text-gray-500" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">Phone</p>
                          <p className="text-sm text-gray-500">{userData.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <GraduationCap className="w-5 h-5 text-gray-500" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">Passing Year</p>
                          <p className="text-sm text-gray-500">{userData.passing_year}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
                >
                  <Card className="border-0 shadow-xl shadow-slate-500/10 bg-gradient-to-br from-white to-gray-50">
                    <CardHeader className="border-b border-gray-100">
                      <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <Link2 className="text-blue-600" /> Professional Links
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      {[
                        { label: "Resume/CV", url: userData.resume_url },
                        { label: "Portfolio", url: userData.portfolio_url },
                        { label: "LinkedIn", url: userData.linkedin_url },
                        { label: "GitHub", url: userData.github_url },
                      ].map((link, index) => (
                        <div
                          key={link.label}
                          className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all group opacity-0 animate-fade-in"
                          style={{ animationDelay: `${0.6 + index * 0.1}s`, animationFillMode: "forwards" }}
                        >
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
                          >
                            <ExternalLink className="w-4 h-4" />
                            {link.label}
                          </a>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => copyLink(link.url)}
                          >
                            {copiedLink === link.url ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4 text-gray-500" />
                            )}
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  )
}