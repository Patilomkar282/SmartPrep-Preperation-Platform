import React from "react";
import { motion } from "framer-motion";

export default function LogicalReasoningPage() {
  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "verbal", title: "Verbal Reasoning" },
    { id: "nonverbal", title: "Non-Verbal Reasoning" },
    { id: "analytical", title: "Analytical Reasoning" },
    { id: "puzzles", title: "Puzzles & Seating Arrangements" },
    { id: "series", title: "Number & Letter Series" },
    { id: "bloodrelation", title: "Blood Relations" },
    { id: "codingdecoding", title: "Coding & Decoding" },
    { id: "syllogism", title: "Syllogism" },
    { id: "direction", title: "Directions & Distances" },
    { id: "advantages", title: "Importance & Benefits" }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg border-r p-6 sticky top-0 h-screen overflow-y-auto">
        <h2 className="text-xl font-bold text-blue-600 mb-6">Logical Reasoning</h2>
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Logical Reasoning & Aptitude</h1>
            <p className="text-gray-700 mb-3">
              Logical reasoning tests the ability to analyze information, identify patterns, and solve problems systematically. It is a key component in competitive exams, placement tests, and interviews.
            </p>
            <p className="text-gray-700">
              Topics include verbal and non-verbal reasoning, analytical puzzles, series, coding-decoding, syllogism, and directions.
            </p>
          </section>

          {/* Verbal Reasoning */}
          <section id="verbal">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">1. Verbal Reasoning</h2>
            <p className="mb-3">
              Verbal reasoning involves understanding and analyzing written information to answer questions logically. It includes analogies, classification, and critical reasoning.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Analogies: Finding relationships between words (e.g., Cat : Kitten :: Dog : ?)</li>
              <li>Classification: Identify the odd one out</li>
              <li>Blood relations: Understanding family relationships</li>
              <li>Direction sense: Solving problems using directions and distances</li>
            </ul>
          </section>

          {/* Non-Verbal Reasoning */}
          <section id="nonverbal">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">2. Non-Verbal Reasoning</h2>
            <p className="mb-3">
              Non-verbal reasoning involves visual problem solving. It includes patterns, shapes, sequences, and diagrams.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Series completion with shapes</li>
              <li>Mirror and water-image problems</li>
              <li>Pattern folding and paper cutting</li>
              <li>Matrix reasoning</li>
            </ul>
          </section>

          {/* Analytical Reasoning */}
          <section id="analytical">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">3. Analytical Reasoning</h2>
            <p className="mb-3">
              Analytical reasoning tests logical thinking using given conditions and rules. It often includes puzzles, seating arrangements, and flowcharts.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Seating arrangement problems</li>
              <li>Scheduling and arrangement puzzles</li>
              <li>Logical deductions from statements</li>
            </ul>
          </section>

          {/* Puzzles & Seating Arrangements */}
          <section id="puzzles">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">4. Puzzles & Seating Arrangements</h2>
            <p className="mb-3">
              Puzzles require careful observation and logical deduction. Seating arrangements test the ability to organize information spatially.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Linear seating</li>
              <li>Circular seating</li>
              <li>Complex arrangement puzzles</li>
            </ul>
          </section>

          {/* Number & Letter Series */}
          <section id="series">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">5. Number & Letter Series</h2>
            <p className="mb-3">
              Identifying patterns in sequences of numbers, letters, or both. Important for quick reasoning.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Arithmetic sequences</li>
              <li>Geometric sequences</li>
              <li>Alphabet series</li>
              <li>Mixed series</li>
            </ul>
          </section>

          {/* Blood Relations */}
          <section id="bloodrelation">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">6. Blood Relations</h2>
            <p className="mb-3">
              Problems based on family relationships. Identify how members are related using clues.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Father, mother, siblings, cousins</li>
              <li>Generational relationships</li>
              <li>Application in verbal reasoning questions</li>
            </ul>
          </section>

          {/* Coding & Decoding */}
          <section id="codingdecoding">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">7. Coding & Decoding</h2>
            <p className="mb-3">
              Problems that encode words or numbers with a pattern or rule. The challenge is to decode or encode following that rule.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Letter shifting (A→C, B→D)</li>
              <li>Number substitution</li>
              <li>Symbol-based coding</li>
            </ul>
          </section>

          {/* Syllogism */}
          <section id="syllogism">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">8. Syllogism</h2>
            <p className="mb-3">
              Logical reasoning problems based on statements and conclusions. Check if conclusions logically follow from given statements.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>All A are B. Some B are C. Conclusions?</li>
              <li>Used in competitive exams and placement tests</li>
            </ul>
          </section>

          {/* Directions & Distances */}
          <section id="direction">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">9. Directions & Distances</h2>
            <p className="mb-3">
              Solve problems using directions (N, S, E, W) and distances. Common in reasoning exams.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Calculating shortest paths</li>
              <li>Finding final positions after movements</li>
              <li>Analyzing diagrams and maps logically</li>
            </ul>
          </section>

          {/* Advantages */}
          <section id="advantages">
            <h2 className="text-2xl font-bold text-green-700 mt-10">✅ Importance & Benefits</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Improves analytical and problem-solving skills</li>
              <li>Essential for competitive exams and placements</li>
              <li>Enhances decision-making abilities</li>
              <li>Boosts reasoning speed and accuracy</li>
              <li>Prepares for complex real-world problem scenarios</li>
            </ul>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
