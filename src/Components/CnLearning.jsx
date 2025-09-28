import React from "react";
import { motion } from "framer-motion";

export default function CnLearningPage() {
  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "network", title: "What is a Network?" },
    { id: "types", title: "Types of Networks" },
    { id: "topologies", title: "Network Topologies" },
    { id: "protocols", title: "Protocols" },
    { id: "layers", title: "OSI & TCP/IP Models" },
    { id: "routing", title: "Routing & Switching" },
    { id: "advantages", title: "Advantages of Networks" },
    { id: "disadvantages", title: "Disadvantages of Networks" }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg border-r p-6 sticky top-0 h-screen overflow-y-auto">
        <h2 className="text-xl font-bold text-blue-600 mb-6">Computer Networks</h2>
        <ul className="space-y-4">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-5xl"
        >
          {/* Introduction */}
          <section id="intro">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Computer Networks Concepts
            </h1>
            <p className="text-gray-700 mb-3">
              A <strong>Computer Network</strong> is a collection of interconnected devices that communicate with each other to share resources and data. 
              Networks form the backbone of modern computing, enabling internet access, communication, and distributed systems.
            </p>
            <p className="text-gray-700">
              Key topics include network types, topologies, protocols, models, routing, switching, and network security.
            </p>
          </section>

          {/* What is a Network */}
          <section id="network">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">1. What is a Network?</h2>
            <p className="mb-3">
              A network connects multiple devices (computers, servers, routers) to share data, resources, and services. 
              Networks can be wired or wireless.
            </p>
            <p className="mb-3">
              Example: Home Wi-Fi connects laptops, smartphones, and IoT devices to the internet and each other.
            </p>
          </section>

          {/* Types of Networks */}
          <section id="types">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">2. Types of Networks</h2>
            <p className="mb-3">
              Networks are classified based on size and purpose:
              <ul className="list-disc pl-6">
                <li><strong>LAN (Local Area Network)</strong> – small area, e.g., office or home.</li>
                <li><strong>WAN (Wide Area Network)</strong> – large area, e.g., the internet.</li>
                <li><strong>MAN (Metropolitan Area Network)</strong> – city-wide network.</li>
                <li><strong>PAN (Personal Area Network)</strong> – small personal devices network.</li>
              </ul>
            </p>
          </section>

          {/* Network Topologies */}
          <section id="topologies">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">3. Network Topologies</h2>
            <p className="mb-3">
              Topology defines the layout of network devices. Common topologies:
              <ul className="list-disc pl-6">
                <li><strong>Star</strong> – central hub connects all devices.</li>
                <li><strong>Bus</strong> – single backbone cable connects devices.</li>
                <li><strong>Ring</strong> – devices connected in a circular path.</li>
                <li><strong>Mesh</strong> – each device connects to every other device.</li>
              </ul>
            </p>
          </section>

          {/* Protocols */}
          <section id="protocols">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">4. Network Protocols</h2>
            <p className="mb-3">
              Protocols are rules that govern data communication. Popular protocols:
              <ul className="list-disc pl-6">
                <li><strong>HTTP/HTTPS</strong> – web communication</li>
                <li><strong>FTP/SFTP</strong> – file transfer</li>
                <li><strong>TCP/IP</strong> – core internet protocol</li>
                <li><strong>DNS</strong> – translates domain names to IP addresses</li>
              </ul>
            </p>
          </section>

          {/* OSI & TCP/IP Models */}
          <section id="layers">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">5. OSI & TCP/IP Models</h2>
            <p className="mb-3">
              OSI Model divides network functions into 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.
            </p>
            <p className="mb-3">
              TCP/IP Model has 4 layers: Network Interface, Internet, Transport, Application. These models help design, troubleshoot, and implement networks.
            </p>
          </section>

          {/* Routing & Switching */}
          <section id="routing">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">6. Routing & Switching</h2>
            <p className="mb-3">
              <strong>Switching</strong> directs data within a local network, e.g., using a switch to connect computers in LAN.
            </p>
            <p className="mb-3">
              <strong>Routing</strong> directs data between networks using routers. Routers determine the best path for data packets.
            </p>
            <p className="text-gray-700">
              Example: Sending an email across the world involves multiple routers and switches transferring packets efficiently.
            </p>
          </section>

          {/* Advantages */}
          <section id="advantages">
            <h2 className="text-2xl font-bold text-green-700 mt-10">✅ Advantages of Networks</h2>
            <ul className="list-disc pl-6">
              <li>Resource sharing (files, printers, internet)</li>
              <li>Communication (email, chat, video calls)</li>
              <li>Centralized data management</li>
              <li>Improved collaboration in teams</li>
              <li>Remote access to services</li>
            </ul>
          </section>

          {/* Disadvantages */}
          <section id="disadvantages">
            <h2 className="text-2xl font-bold text-red-700 mt-10">⚠️ Disadvantages of Networks</h2>
            <ul className="list-disc pl-6">
              <li>Security threats and data breaches</li>
              <li>High setup and maintenance cost</li>
              <li>Complex troubleshooting</li>
              <li>Dependence on network availability</li>
              <li>Performance issues if traffic is high</li>
            </ul>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
