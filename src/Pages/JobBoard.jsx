
import React, { useState, useRef } from 'react';

import {
  Search,
  MapPin,
  Building2,
  Clock,
  Star,
  ExternalLink,
  Upload,
  FileText,
  CheckCircle,
  XCircle,
  TrendingUp,
  Filter,
  Briefcase,
  Code,
  Database,
  Cloud,
  BrainCircuit,
  Eye,
  BookOpen,
  IndianRupee,
  Users
} from 'lucide-react';

// Mock job data updated for Indian students
const mockJobs = [
  {
    id: 1,
    title: "Frontend Engineer",
    company: "InnovateTech",
    location: "Bangalore, KA",
    salary: "₹8-12 LPA",
    type: "Full-time",
    posted: "2 days ago",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    category: "frontend",
    experience: "Fresher",
    description: "Join our fast-growing team as a Frontend Engineer. You will build beautiful and performant user interfaces for our flagship products, working with a modern tech stack.",
    responsibilities: [
      "Develop and maintain responsive web applications",
      "Collaborate with design and backend teams",
      "Optimize applications for maximum speed and scalability",
      "Write clean, maintainable code with proper documentation",
    ],
    requirements: [
      "Bachelor's degree in Computer Science (2024 batch)",
      "Strong proficiency in JavaScript/TypeScript and React",
      "Strong knowledge of HTML, CSS, and responsive design",
      "Familiarity with modern frontend build pipelines and tools",
    ],
    applyUrl: "https://innovatetech.com/careers/frontend"
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "DataMind AI",
    location: "Hyderabad, TS",
    salary: "₹8-12 LPA",
    type: "Full-time",
    posted: "1 day ago",
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas"],
    category: "datascience",
    experience: "Fresher",
    description: "Kickstart your career in Data Science! We are looking for bright minds to join our team. You'll get to work on real-world machine learning problems, from data analysis to model deployment.",
    responsibilities: [
      "Assist in developing and training ML models",
      "Process and analyze large datasets",
      "Collaborate with senior engineers on research and implementation",
      "Contribute to building data-powered features",
    ],
    requirements: [
      "Bachelor's or Master's degree in Computer Science, Statistics or related field",
      "Strong programming skills in Python",
      "Solid understanding of ML fundamentals and algorithms",
      "Experience with data science libraries (Pandas, NumPy, Scikit-learn)",
    ],
    applyUrl: "https://datamind.ai/jobs/graduate-ds"
  },
  {
    id: 3,
    title: "Backend Development Intern",
    company: "CodeBase Solutions",
    location: "Pune, MH",
    salary: "₹30,000/month stipend",
    type: "Internship",
    posted: "3 days ago",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs", "Git"],
    category: "internship",
    experience: "Internship",
    targetAudience: "For 3rd & 4th year students",
    description: "Exciting internship opportunity for aspiring backend developers. Learn to build scalable server-side applications and APIs under the mentorship of our experienced engineering team.",
    responsibilities: [
      "Assist in the development of RESTful APIs",
      "Write and maintain backend code for web applications",
      "Learn about database design and management",
      "Participate in code reviews and team meetings",
    ],
    requirements: [
      "Currently pursuing a degree in Computer Science or a related field.",
      "Basic understanding of JavaScript and Node.js",
      "Eagerness to learn new technologies",
      "Good problem-solving skills",
    ],
    applyUrl: "https://codebase.com/internships/backend"
  },
   {
    id: 4,
    title: "Backend Developer",
    company: "DigitalSolutions Ltd.",
    location: "Noida, UP",
    salary: "₹7-10 LPA",
    type: "Full-time",
    posted: "5 days ago",
    skills: ["Java", "Spring Boot", "MySQL", "REST APIs"],
    category: "backend",
    experience: "Fresher",
    description: "We are hiring fresh graduates for our Backend Developer role. You will be responsible for building robust and scalable server-side logic for our applications.",
     responsibilities: [
      "Design, build, and maintain efficient, reusable, and reliable Java code",
      "Develop RESTful APIs for our web and mobile applications",
      "Ensure the best possible performance, quality, and responsiveness of the applications",
      "Collaborate with front-end developers to integrate user-facing elements",
    ],
    requirements: [
      "Bachelor's degree in Computer Science (2024 batch)",
      "Strong proficiency in Java and the Spring Boot framework",
      "Good understanding of relational databases and SQL",
      "Understanding of code versioning tools, such as Git",
    ],
    applyUrl: "https://digitalsolutions.com/careers/fresher-backend"
  },
   {
    id: 5,
    title: "Cloud Engineer",
    company: "SkyHigh Cloud",
    location: "Pune, MH",
    salary: "₹7-11 LPA",
    type: "Full-time",
    posted: "6 days ago",
    skills: ["AWS", "Terraform", "Docker", "CI/CD", "Linux"],
    category: "cloud",
    experience: "Fresher",
    description: "Join our cloud team and get hands-on experience with cutting-edge cloud technologies. You will help manage and automate our cloud infrastructure on AWS.",
    responsibilities: [
      "Deploy, manage, and operate scalable, highly available, and fault-tolerant systems on AWS",
      "Work with infrastructure as code tools like Terraform",
      "Implement and manage CI/CD pipelines",
      "Monitor and maintain system health and security",
    ],
    requirements: [
      "Bachelor's degree in a technical field (2024 batch)",
      "Strong understanding of cloud computing concepts (IaaS, PaaS, SaaS)",
      "Familiarity with Linux and basic shell scripting",
      "Knowledge of containerization with Docker is a plus",
    ],
    applyUrl: "https://skyhigh.com/careers/cloud-fresher"
  },
  {
    id: 6,
    title: "Database Administrator",
    company: "DataSecure",
    location: "Chennai, TN",
    salary: "₹6-9 LPA",
    type: "Full-time",
    posted: "1 week ago",
    skills: ["SQL", "PostgreSQL", "MongoDB", "Backup & Recovery"],
    category: "database",
    experience: "Fresher",
    description: "We are seeking a motivated fresher to join our team as a Database Administrator. You will learn to manage, secure, and maintain our company's databases to ensure data integrity and availability.",
    responsibilities: [
      "Assist in database installation, configuration, and maintenance",
      "Learn and implement backup and recovery procedures",
      "Monitor database performance and troubleshoot issues",
      "Help ensure database security and apply patches",
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field (2024 batch)",
      "Strong knowledge of SQL and database concepts",
      "Familiarity with at least one relational database (e.g., PostgreSQL, MySQL)",
      "Good analytical and problem-solving skills",
    ],
    applyUrl: "https://datasecure.com/careers/dba-fresher"
  }
];

const categories = [
  { id: 'all', name: 'All Jobs', icon: Briefcase, count: mockJobs.length },
  { id: 'relevant', name: 'Relevant Jobs', icon: Star, count: 2 },
  { id: 'internship', name: 'Internships', icon: BookOpen, count: 1 },
  { id: 'frontend', name: 'Frontend', icon: Code, count: 1 },
  { id: 'backend', name: 'Backend', icon: Code, count: 1 },
  { id: 'datascience', name: 'Data Science', icon: BrainCircuit, count: 1 },
  { id: 'cloud', name: 'Cloud Engineer', icon: Cloud, count: 1 },
  { id: 'database', name: 'Database Admin', icon: Database, count: 1 }
];

export default function JobBoard() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedJob, setSelectedJob] = useState(null);
  const [showResumeMatch, setShowResumeMatch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [uploadedResume, setUploadedResume] = useState(null);
  const [matchingResult, setMatchingResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef(null);

  // Filter jobs based on category and search
  const filteredJobs = mockJobs.filter(job => {
    const matchesCategory = selectedCategory === 'all' ||
                           (selectedCategory === 'relevant' && ['React', 'Node.js'].some(skill => job.skills.includes(skill))) ||
                           job.category === selectedCategory;

    const matchesSearch = searchQuery === '' ||
                         job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         (job.targetAudience && job.targetAudience.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setShowResumeMatch(false);
    setMatchingResult(null);
  };

  const handleBackToList = () => {
    setSelectedJob(null);
    setShowResumeMatch(false);
    setMatchingResult(null);
    setUploadedResume(null);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setUploadedResume(file);
    } else {
      alert('Please upload a PDF file');
    }
  };

  const analyzeResume = () => {
    if (!uploadedResume || !selectedJob) return;

    setIsAnalyzing(true);

    // Simulate AI analysis
    setTimeout(() => {
      const jobSkills = selectedJob.skills;
      const mockResumeSkills = ['React', 'JavaScript', 'HTML', 'CSS', 'Git', 'REST APIs', 'Node.js', 'Python', 'SQL']; // Added for better mock matching

      const matchingSkills = jobSkills.filter(skill =>
        mockResumeSkills.some(resumeSkill =>
          resumeSkill.toLowerCase().includes(skill.toLowerCase()) ||
          skill.toLowerCase().includes(resumeSkill.toLowerCase())
        )
      );

      const missingSkills = jobSkills.filter(skill => !matchingSkills.includes(skill));
      const score = Math.round((matchingSkills.length / (jobSkills.length || 1)) * 100); // Avoid division by zero

      setMatchingResult({
        score,
        matchingSkills,
        missingSkills,
        suggestions: [
          'Consider taking online courses for missing skills',
          'Highlight relevant project experience',
          'Add specific examples of problem-solving abilities',
          'Include metrics and quantifiable achievements'
        ]
      });

      setIsAnalyzing(false);
    }, 3000);
  };

  // Job List View
  if (!selectedJob) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Find Your Dream <span className="text-blue-600">Career</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover thousands of job opportunities from top companies worldwide
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs, companies, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories Sidebar */}
            <div className="lg:w-80">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Job Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <category.icon className="w-5 h-5" />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        selectedCategory === category.id
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Job Listings */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  {filteredJobs.length} Jobs Found
                </h2>
                <div className="text-sm text-gray-500">
                  Showing {selectedCategory === 'all' ? 'all' : categories.find(c => c.id === selectedCategory)?.name.toLowerCase()} jobs
                </div>
              </div>

              <div className="space-y-6">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    onClick={() => handleJobClick(job)}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
                  >
                    <div className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                              <Building2 className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                                {job.title}
                              </h3>
                              <p className="text-gray-600 font-medium">{job.company}</p>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600 mb-1 flex items-center justify-end gap-1">
                            <IndianRupee className="w-6 h-6" />
                            <span>{job.salary.replace('₹', '')}</span>
                          </div>
                          <div className="text-sm text-gray-500">{job.type}</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600 mb-6">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                        {job.targetAudience && (
                          <div className="flex items-center gap-2 text-purple-600 font-medium">
                            <Star className="w-4 h-4" />
                            <span>{job.targetAudience}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{job.posted}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {job.skills.slice(0, 4).map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                        {job.skills.length > 4 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                            +{job.skills.length - 4} more
                          </span>
                        )}
                      </div>

                      <p className="text-gray-700 leading-relaxed mb-6 line-clamp-2">
                        {job.description}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleJobClick(job);
                          }}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                        >
                          <Eye className="w-4 h-4" />
                          View Details
                        </button>
                        <a
                          href={job.applyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredJobs.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
                  <p className="text-gray-600">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Job Details View
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={handleBackToList}
          className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          ← Back to Jobs
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Job Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedJob.title}</h1>
                    <p className="text-xl text-gray-600 font-medium">{selectedJob.company}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedJob.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4" />
                    <span>{selectedJob.salary}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{selectedJob.posted}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{selectedJob.experience}</span>
                  </div>
                   {selectedJob.targetAudience && (
                    <div className="flex items-center gap-2 text-purple-600 font-medium">
                      <Star className="w-4 h-4" />
                      <span>{selectedJob.targetAudience}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedJob.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Job Description */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
                  <p className="text-gray-700 leading-relaxed">{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Responsibilities</h3>
                  <ul className="space-y-2">
                    {selectedJob.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-8">
              {/* Apply Button */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <a
                  href={selectedJob.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 mb-4"
                >
                  <ExternalLink className="w-5 h-5" />
                  Apply Now
                </a>
                <p className="text-xs text-gray-500 text-center">
                  You'll be redirected to the company's career page
                </p>
              </div>

              {/* Resume Matching */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Resume Matching
                </h3>
                
                {!showResumeMatch ? (
                  <button
                    onClick={() => setShowResumeMatch(true)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    Check Resume Match
                  </button>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className={`w-full border-2 border-dashed rounded-xl p-4 text-center transition-all duration-200 ${
                          uploadedResume 
                            ? 'border-green-300 bg-green-50 text-green-700'
                            : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50 text-gray-600'
                        }`}
                      >
                        <Upload className="w-8 h-8 mx-auto mb-2" />
                        {uploadedResume ? (
                          <div>
                            <p className="font-medium">{uploadedResume.name}</p>
                            <p className="text-sm">PDF uploaded successfully</p>
                          </div>
                        ) : (
                          <div>
                            <p className="font-medium">Upload Resume</p>
                            <p className="text-sm">PDF files only</p>
                          </div>
                        )}
                      </button>
                    </div>

                    {uploadedResume && !matchingResult && (
                      <button
                        onClick={analyzeResume}
                        disabled={isAnalyzing}
                        className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200"
                      >
                        {isAnalyzing ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Analyzing...
                          </div>
                        ) : (
                          'Analyze Resume'
                        )}
                      </button>
                    )}

                    {matchingResult && (
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className={`text-4xl font-bold mb-2 ${
                            matchingResult.score >= 70 ? 'text-green-600' :
                            matchingResult.score >= 50 ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {matchingResult.score}%
                          </div>
                          <p className="text-sm text-gray-600">Resume Match Score</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Matching Skills
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {matchingResult.matchingSkills.map((skill, index) => (
                              <span key={index} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <XCircle className="w-4 h-4 text-red-500" />
                            Missing Skills
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {matchingResult.missingSkills.map((skill, index) => (
                              <span key={index} className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Suggestions</h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            {matchingResult.suggestions.map((suggestion, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <Star className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                                {suggestion}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <button
                          onClick={() => {
                            setShowResumeMatch(false);
                            setUploadedResume(null);
                            setMatchingResult(null);
                          }}
                          className="w-full text-blue-600 hover:text-blue-800 font-medium py-2 transition-colors"
                        >
                          Try Another Resume
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Company Info */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">About {selectedJob.company}</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <span>Technology Company</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>1000+ employees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Multiple locations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
