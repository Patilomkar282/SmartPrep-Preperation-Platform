import React from "react";
import { motion } from "framer-motion";

export default function OsLearningPage() {
  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "processes", title: "Processes & Threads" },
    { id: "memory", title: "Memory Management" },
    { id: "cpu", title: "CPU Scheduling" },
    { id: "ipc", title: "Inter-Process Communication" },
    { id: "file", title: "File Systems" },
    { id: "advantages", title: "Advantages of OS" },
    { id: "disadvantages", title: "Disadvantages of OS" }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg border-r p-6 sticky top-0 h-screen overflow-y-auto">
        <h2 className="text-xl font-bold text-blue-600 mb-6">Operating Systems</h2>
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
              Operating System Concepts
            </h1>
            <p className="text-gray-700 mb-3">
              An Operating System (OS) is system software that acts as an interface
              between computer hardware and the user. It manages resources like CPU,
              memory, storage, and I/O devices while providing essential services
              for application programs.
            </p>
            <p className="text-gray-700 mb-3">
              Modern OS examples include Windows, Linux, macOS, and Android. The OS
              ensures efficient resource management, multitasking, security, and
              smooth user interaction.
            </p>
            <p className="text-gray-700">
              Key components of an OS include Process Management, Memory Management,
              File Systems, CPU Scheduling, and Inter-Process Communication (IPC).
            </p>
          </section>

          {/* Processes & Threads */}
          <section id="processes">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">1. Processes & Threads</h2>
            <p className="mb-3">
              A <strong>Process</strong> is a program in execution. It has its own memory
              space, state, and execution context. Processes can run concurrently in
              a multitasking OS.
            </p>
            <p className="mb-3">
              A <strong>Thread</strong> is the smallest unit of execution within a process.
              Threads within the same process share memory but have independent execution.
            </p>
            <p className="text-gray-700">
              Example: In a web browser, each tab may run as a separate process, while
              each tab uses multiple threads for rendering, network requests, and scripts.
            </p>
          </section>

          {/* Memory Management */}
          <section id="memory">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">2. Memory Management</h2>
            <p className="mb-3">
              Memory Management is responsible for allocating and deallocating memory
              to processes efficiently. It ensures that each process gets enough memory
              while avoiding conflicts and fragmentation.
            </p>
            <p className="mb-3">
              Techniques include:
              <ul className="list-disc pl-6">
                <li>Paging – dividing memory into fixed-size pages.</li>
                <li>Segmentation – dividing memory based on logical segments.</li>
                <li>Virtual Memory – allowing execution of processes larger than physical memory using disk space.</li>
              </ul>
            </p>
            <p className="text-gray-700">
              Proper memory management ensures faster execution, multitasking, and stability.
            </p>
          </section>

          {/* CPU Scheduling */}
          <section id="cpu">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">3. CPU Scheduling</h2>
            <p className="mb-3">
              CPU Scheduling decides the order in which processes get CPU time. The OS
              uses scheduling algorithms to improve CPU utilization, throughput, and response time.
            </p>
            <p className="mb-3">
              Common algorithms:
              <ul className="list-disc pl-6">
                <li>First-Come, First-Served (FCFS)</li>
                <li>Shortest Job Next (SJN) / Shortest Job First (SJF)</li>
                <li>Round Robin (RR)</li>
                <li>Priority Scheduling</li>
              </ul>
            </p>
            <p className="text-gray-700">
              Example: In Round Robin, each process gets a fixed time slice, then moves to the next, ensuring fair CPU sharing.
            </p>
          </section>

          {/* Inter-Process Communication */}
          <section id="ipc">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">4. Inter-Process Communication (IPC)</h2>
            <p className="mb-3">
              IPC allows processes to communicate and synchronize their actions when sharing data.
              Methods include:
              <ul className="list-disc pl-6">
                <li>Message Passing – processes send messages to each other.</li>
                <li>Shared Memory – processes share a memory region.</li>
                <li>Semaphores & Mutexes – synchronization mechanisms to avoid race conditions.</li>
              </ul>
            </p>
            <p className="text-gray-700">
              Example: A producer-consumer problem uses shared memory and semaphores to coordinate data transfer.
            </p>
          </section>

          {/* File Systems */}
          <section id="file">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">5. File Systems</h2>
            <p className="mb-3">
              The file system manages how data is stored and retrieved. It provides abstraction to users while handling the physical storage details.
            </p>
            <p className="mb-3">
              File system concepts:
              <ul className="list-disc pl-6">
                <li>Files and directories hierarchy</li>
                <li>File permissions and access control</li>
                <li>Disk allocation strategies (contiguous, linked, indexed)</li>
                <li>Journaling for reliability and recovery</li>
              </ul>
            </p>
            <p className="text-gray-700">
              Example: Linux uses ext4 file system supporting large files, journaling, and fast access.
            </p>
          </section>

          {/* Advantages */}
          <section id="advantages">
            <h2 className="text-2xl font-bold text-green-700 mt-10">✅ Advantages of OS</h2>
            <ul className="list-disc pl-6">
              <li>Efficient resource management (CPU, memory, I/O devices)</li>
              <li>Supports multitasking and multiuser environments</li>
              <li>Provides abstraction and security for users and applications</li>
              <li>Enables process synchronization and communication</li>
              <li>Manages files, storage, and peripheral devices effectively</li>
            </ul>
          </section>

          {/* Disadvantages */}
          <section id="disadvantages">
            <h2 className="text-2xl font-bold text-red-700 mt-10">⚠️ Disadvantages of OS</h2>
            <ul className="list-disc pl-6">
              <li>Complexity increases with more features and services</li>
              <li>Overhead for small or embedded systems</li>
              <li>Hardware dependency for some features</li>
              <li>Errors in OS can affect all running processes</li>
              <li>Security vulnerabilities may affect system and user data</li>
            </ul>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
