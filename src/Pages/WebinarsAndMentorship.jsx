
import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';

// --- DUMMY DATA ---

const webinarsData = [
  {
    id: 1,
    title: "Advanced React Patterns",
    date: "October 28, 2024",
    time: "4:00 PM GMT",
    duration: "90 mins",
    host: "Sarah Drasner",
    description: "Explore advanced concepts like render props, hooks, and context API for scalable applications.",
    longDescription:
      "Join Sarah Drasner, a renowned expert in the web development community, as she dives deep into advanced React patterns. This session will cover performance optimization techniques, custom hook creation, state management strategies beyond Redux, and how to build truly reusable and scalable components. This is for developers with intermediate to advanced React knowledge.",
    meetLink: "https://meet.google.com/xyz-dummy-1",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    date: "November 12, 2024",
    time: "6:00 PM GMT",
    duration: "120 mins",
    host: "Adam Wathan",
    description:
      "Learn utility-first CSS from the creator of Tailwind CSS himself. Build complex UIs without writing custom CSS.",
    longDescription:
      "Adam Wathan, the creator of Tailwind CSS, will guide you through the philosophy and practical application of a utility-first workflow. You'll learn how to customize your design system, use plugins, and optimize your CSS for production. We'll build several complex UI components from scratch to solidify your understanding.",
    meetLink: "https://meet.google.com/xyz-dummy-2",
  },
  {
    id: 3,
    title: "Cracking System Design Interviews",
    date: "November 20, 2024",
    time: "5:30 PM GMT",
    duration: "150 mins",
    host: "Alex Xu",
    description: "Learn strategies to solve system design interview problems with real-world case studies.",
    longDescription:
      "Alex Xu, author of 'System Design Interview — An Insider’s Guide,' will walk you through common interview problems, distributed system trade-offs, and designing scalable architectures. Expect to cover caching, databases, load balancing, and real-life mock interview examples.",
    meetLink: "https://meet.google.com/xyz-dummy-3",
  },
  {
    id: 4,
    title: "Getting Started with Generative AI",
    date: "December 3, 2024",
    time: "7:00 PM GMT",
    duration: "100 mins",
    host: "Andreessen Horowitz AI Team",
    description: "An introductory session into Generative AI models and their applications across industries.",
    longDescription:
      "In this session, the a16z AI team will cover the foundations of Generative AI, use cases in content creation, coding assistants, and healthcare. We'll discuss model fine-tuning, ethical considerations, and future opportunities in the AI space.",
    meetLink: "https://meet.google.com/xyz-dummy-4",
  },
  {
    id: 5,
    title: "Career Growth in Tech",
    date: "December 15, 2024",
    time: "3:00 PM GMT",
    duration: "60 mins",
    host: "Sheryl Sandberg",
    description: "Advice from an industry leader on navigating career growth, leadership, and mentorship in tech.",
    longDescription:
      "Sheryl Sandberg, former COO of Meta, will share insights on building impactful careers in technology. The session will cover networking, mentorship, overcoming challenges in leadership, and strategies for long-term career development.",
    meetLink: "https://meet.google.com/xyz-dummy-5",
  },
];

const alumniData = [
  {
    id: 1,
    name: "Priya Sharma",
    headline: "Senior Software Engineer at Google | Cloud & AI Enthusiast",
    location: "Mountain View, CA",
    profilePic: "https://i.pravatar.cc/150?u=priya",
    bannerPic:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop",
    about:
      "I'm a passionate software engineer with over 8 years of experience building scalable, distributed systems on Google Cloud Platform. My expertise lies in backend development with Go and Python, and I'm deeply interested in the practical applications of machine learning.",
    skills: ["Go (Golang)", "Python", "Kubernetes", "Google Cloud Platform (GCP)", "Distributed Systems"],
    experience: [
      { role: "Senior Software Engineer", company: "Google", duration: "Jan 2021 - Present", location: "Mountain View, CA" },
      { role: "Software Engineer", company: "Amazon Web Services", duration: "Jun 2018 - Dec 2020", location: "Seattle, WA" },
    ],
    education: [
      { school: "Stanford University", degree: "M.S. in Computer Science", duration: "2016 - 2018" },
      { school: "IIT Bombay", degree: "B.Tech in Computer Engineering", duration: "2012 - 2016" },
    ],
    certifications: ["Google Cloud Certified - Professional Cloud Architect"],
    interests: ["Google", "DeepMind", "OpenAI"],
  },
  {
    id: 2,
    name: "David Chen",
    headline: "Product Manager at Microsoft | Ex-Meta",
    location: "Redmond, WA",
    profilePic: "https://i.pravatar.cc/150?u=david",
    bannerPic:
      "https://images.unsplash.com/photo-1554034483-04fda0d3507b?q=80&w=2070&auto=format&fit=crop",
    about:
      "Product leader focused on developer tools and platforms. I enjoy tackling complex user problems and bridging the gap between engineering and business goals.",
    skills: ["Product Management", "Agile Methodologies", "User Research"],
    experience: [
      { role: "Product Manager", company: "Microsoft", duration: "Feb 2022 - Present", location: "Redmond, WA" },
      { role: "Associate Product Manager", company: "Meta", duration: "Jul 2020 - Jan 2022", location: "Menlo Park, CA" },
    ],
    education: [{ school: "UC Berkeley", degree: "B.A. in Economics", duration: "2016 - 2020" }],
    certifications: [],
    interests: ["Microsoft", "Figma", "Notion"],
  },
  {
    id: 3,
    name: "Arjun Mehta",
    headline: "Data Scientist at Netflix | AI Researcher",
    location: "Los Angeles, CA",
    profilePic: "https://i.pravatar.cc/150?u=arjun",
    bannerPic:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    about:
      "Data scientist with 6+ years of experience in recommendation systems, predictive modeling, and natural language processing. Currently working on personalizing user experiences at Netflix.",
    skills: ["Machine Learning", "Deep Learning", "Python", "TensorFlow", "Recommender Systems"],
    experience: [
      { role: "Data Scientist", company: "Netflix", duration: "2020 - Present", location: "Los Angeles, CA" },
      { role: "Data Analyst", company: "Spotify", duration: "2017 - 2020", location: "New York, NY" },
    ],
    education: [
      { school: "Carnegie Mellon University", degree: "M.S. in Data Science", duration: "2015 - 2017" },
      { school: "Delhi University", degree: "B.Sc. in Statistics", duration: "2012 - 2015" },
    ],
    certifications: ["TensorFlow Developer Certificate"],
    interests: ["Netflix", "Spotify", "NVIDIA"],
  },
  {
    id: 4,
    name: "Emily Johnson",
    headline: "UX Designer at Figma | Design Systems Specialist",
    location: "San Francisco, CA",
    profilePic: "https://i.pravatar.cc/150?u=emily",
    bannerPic:
      "https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=2070&auto=format&fit=crop",
    about:
      "Passionate UX designer specializing in collaborative design tools and design systems. I love creating delightful user experiences.",
    skills: ["UX Design", "Figma", "Prototyping", "Design Systems"],
    experience: [
      { role: "UX Designer", company: "Figma", duration: "2019 - Present", location: "San Francisco, CA" },
      { role: "UI Designer", company: "Adobe", duration: "2016 - 2019", location: "San Jose, CA" },
    ],
    education: [{ school: "Rhode Island School of Design", degree: "B.F.A. in Graphic Design", duration: "2012 - 2016" }],
    certifications: ["Certified UX Designer"],
    interests: ["Figma", "Adobe", "Canva"],
  },
  {
    id: 5,
    name: "Ravi Patel",
    headline: "Full Stack Developer at Stripe | Open Source Contributor",
    location: "Bangalore, India",
    profilePic: "https://i.pravatar.cc/150?u=ravi",
    bannerPic:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
    about:
      "Full stack developer with a strong interest in fintech and payments systems. Contributor to several open-source projects and active in the developer community.",
    skills: ["JavaScript", "Node.js", "React", "PostgreSQL", "Docker"],
    experience: [
      { role: "Full Stack Developer", company: "Stripe", duration: "2021 - Present", location: "Bangalore, India" },
      { role: "Software Engineer", company: "PayPal", duration: "2018 - 2021", location: "Hyderabad, India" },
    ],
    education: [
      { school: "IIT Delhi", degree: "B.Tech in Computer Science", duration: "2014 - 2018" },
    ],
    certifications: ["AWS Certified Developer"],
    interests: ["Stripe", "PayPal", "GitHub"],
  },
];


const stats = {
  completed: 42,
  upcoming: webinarsData.length,
  students: 12500,
};

// --- SVG ICONS ---
// Using inline SVGs to avoid extra dependencies

const BriefcaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a2 2 0 00-2 2v1H6a2 2 0 00-2 2v7a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2V4a2 2 0 00-2-2zm-2 4V4h4v2H8z" clipRule="evenodd" /></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 21l-4.95-6.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>;
const GraduationCapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.042.942l-1.085 2.17A1 1 0 005.16 12.55l1.085-2.17a1 1 0 001.498 0l1.085 2.17a1 1 0 001.927-.942l-1.085-2.17a.999.999 0 01.042-.942l2.646-1.132a1 1 0 000-1.84l-7-3z" /><path d="M10 11.5a.5.5 0 00-1 0V16a1 1 0 001 1h.093a.5.5 0 000-1H10v-4.5z" /></svg>;

// --- SUB-COMPONENTS ---

// LinkedIn-style Profile Page
const AlumniProfile = ({ profile, onBack }) => {
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        <button onClick={onBack} className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Dashboard
        </button>

        {/* Profile Header Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-32 md:h-48 bg-cover bg-center" style={{ backgroundImage: `url(${profile.bannerPic})` }}></div>
          <div className="p-6">
            <div className="relative flex items-end -mt-20">
              <img className="h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-white object-cover" src={profile.profilePic} alt={profile.name} />
              <div className="ml-4 flex-grow">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800">{profile.name}</h1>
                <p className="text-md text-slate-600">{profile.headline}</p>
                <p className="text-sm text-slate-500 mt-1">{profile.location}</p>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all">Connect</button>
                <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-all">Message</button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 space-y-6">
            {/* About Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-2">About</h2>
              <p className="text-slate-600 leading-relaxed">{profile.about}</p>
            </div>
            {/* Experience Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4">Experience</h2>
              <div className="space-y-6">
                {profile.experience.map((exp, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 flex-shrink-0 bg-slate-200 rounded-md flex items-center justify-center"><BriefcaseIcon /></div>
                    <div>
                      <h3 className="font-bold text-slate-800">{exp.role}</h3>
                      <p className="font-medium text-slate-600">{exp.company}</p>
                      <p className="text-sm text-slate-500">{exp.duration} &middot; {exp.location}</p>
                      <p className="text-sm text-slate-600 mt-2">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
             {/* Education Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4">Education</h2>
              <div className="space-y-6">
                {profile.education.map((edu, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 flex-shrink-0 bg-slate-200 rounded-md flex items-center justify-center"><GraduationCapIcon/></div>
                    <div>
                      <h3 className="font-bold text-slate-800">{edu.school}</h3>
                      <p className="font-medium text-slate-600">{edu.degree}</p>
                      <p className="text-sm text-slate-500">{edu.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
             {/* Skills Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, i) => <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">{skill}</span>)}
              </div>
            </div>
            {/* Certifications Section */}
            {profile.certifications.length > 0 && <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4">Certifications</h2>
              <ul className="space-y-2 list-disc list-inside text-slate-600">
                {profile.certifications.map((cert, i) => <li key={i}>{cert}</li>)}
              </ul>
            </div>}
            {/* Interests Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4">Interests</h2>
              <div className="space-y-3">
                <h3 className="font-semibold">Companies</h3>
                {profile.interests.map((interest, i) => <p key={i} className="text-slate-600">{interest}</p>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// Webinar Details Modal
const WebinarDetailModal = ({ webinar, onClose }) => {
  if (!webinar) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full transform transition-all" onClick={e => e.stopPropagation()}>
        <div className="p-6 border-b border-slate-200 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-slate-800">{webinar.title}</h2>
            <button onClick={onClose} className="text-slate-500 hover:text-slate-800">&times;</button>
        </div>
        <div className="p-6 space-y-4">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
                <span><strong>Date:</strong> {webinar.date} at {webinar.time}</span>
                <span><strong>Duration:</strong> {webinar.duration}</span>
                <span><strong>Host:</strong> {webinar.host}</span>
            </div>
            <p className="text-slate-700 leading-relaxed pt-2">{webinar.longDescription}</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-b-lg flex justify-end">
            <a href={webinar.meetLink} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-all">Join Webinar</a>
        </div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---

const WebinarsAndMentorship = () => {
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [selectedAlumni, setSelectedAlumni] = useState(null);

  // If an alumni profile is selected, render only that component
  if (selectedAlumni) {
    return <AlumniProfile profile={selectedAlumni} onBack={() => setSelectedAlumni(null)} />;
  }

  // Main dashboard view
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <WebinarDetailModal webinar={selectedWebinar} onClose={() => setSelectedWebinar(null)} />
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
              Webinar And Mentorships
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Learn from expert-led webinars and connect with alumni mentors to gain 
              industry insights, personalized guidance, and the right support for 
              your placement journey.
            </p>

          </div>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* --- SECTION 1: WEBINARS --- */}
        <div id="webinars" className="mb-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-8">Webinars</h1>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <p className="text-sm text-slate-500">Webinars Completed</p>
              <p className="text-3xl font-bold text-slate-800 mt-1">{stats.completed}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
              <p className="text-sm text-slate-500">Upcoming Webinars</p>
              <p className="text-3xl font-bold text-slate-800 mt-1">{stats.upcoming}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
              <p className="text-sm text-slate-500">Total Students Enrolled</p>
              <p className="text-3xl font-bold text-slate-800 mt-1">{stats.students.toLocaleString()}</p>
            </div>
          </div>
          {/* Webinar Cards */}
          <div className="space-y-8">
            {webinarsData.map(webinar => (
              <div key={webinar.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-xl">
                <div className="p-6 flex flex-col md:flex-row gap-6">
                  <div className="flex-grow">
                    <h2 className="text-xl font-bold text-slate-800 mb-2">{webinar.title}</h2>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500 mb-3">
                      <span><strong>Date:</strong> {webinar.date}</span>
                      <span><strong>Time:</strong> {webinar.time}</span>
                      <span><strong>Duration:</strong> {webinar.duration}</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-4"><strong>Hosted by:</strong> {webinar.host}</p>
                    <p className="text-slate-600 text-base">{webinar.description}</p>
                  </div>
                  <div className="flex-shrink-0 flex md:flex-col items-center md:items-end justify-start gap-3">
                    <button onClick={() => setSelectedWebinar(webinar)} className="w-full md:w-auto px-5 py-2.5 bg-white text-blue-600 font-semibold rounded-md border border-blue-600 hover:bg-blue-50 transition-all">View Details</button>
                    <button className="w-full md:w-auto px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all">Enroll Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: MENTORSHIP --- */}
        <div id="mentorship">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-8">Alumni Mentorship</h1>
          <div className="bg-white rounded-lg shadow-md">
            <ul className="divide-y divide-slate-200">
              {alumniData.map(alumni => (
                <li key={alumni.id} className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img className="h-12 w-12 rounded-full object-cover" src={alumni.profilePic} alt={alumni.name} />
                    <div>
                      <p className="font-bold text-slate-800">{alumni.name}</p>
                      <p className="text-sm text-slate-600">{alumni.headline}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center gap-3 self-end sm:self-center">
                    <button onClick={() => setSelectedAlumni(alumni)} className="px-4 py-2 bg-white text-blue-600 font-semibold text-sm rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-all">Profile</button>
                    <button className="px-4 py-2 bg-blue-600 text-white font-semibold text-sm rounded-full hover:bg-blue-700 transition-all">Connect</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WebinarsAndMentorship;
