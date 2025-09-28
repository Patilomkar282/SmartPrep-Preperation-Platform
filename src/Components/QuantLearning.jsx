import React from "react";
import { motion } from "framer-motion";

export default function QuantitativeAptitudePage() {
  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "number", title: "Number Systems" },
    { id: "percentage", title: "Percentage" },
    { id: "ratio", title: "Ratio & Proportion" },
    { id: "profitloss", title: "Profit & Loss" },
    { id: "simpleinterest", title: "Simple & Compound Interest" },
    { id: "timework", title: "Time, Speed & Work" },
    { id: "algebra", title: "Algebra" },
    { id: "geometry", title: "Geometry" },
    { id: "data", title: "Data Interpretation" },
    { id: "advantages", title: "Importance & Benefits" }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg border-r p-6 sticky top-0 h-screen overflow-y-auto">
        <h2 className="text-xl font-bold text-blue-600 mb-6">Quantitative Aptitude</h2>
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
              Quantitative Aptitude Concepts
            </h1>
            <p className="text-gray-700 mb-3">
              Quantitative Aptitude tests mathematical problem-solving and numerical ability.
              It is essential for competitive exams, interviews, and aptitude tests.
            </p>
            <p className="text-gray-700">
              Topics include number systems, percentages, ratios, profit & loss, interest calculations,
              algebra, geometry, time & work, time & speed, and data interpretation.
            </p>
          </section>

          {/* Number Systems */}
          <section id="number">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">1. Number Systems</h2>
            <p className="mb-3 text-gray-700">
              Understanding different types of numbers, their properties, divisibility rules, LCM, HCF, and basic operations.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Natural, Whole, Integers, Rational, Irrational, Real numbers</li>
              <li>Prime numbers and composite numbers</li>
              <li>Divisibility rules for 2, 3, 5, 9, etc.</li>
              <li>LCM & HCF calculation methods</li>
            </ul>
          </section>

          {/* Percentage */}
          <section id="percentage">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">2. Percentage</h2>
            <p className="mb-3 text-gray-700">
              Percentage is a way of expressing a number as a fraction of 100. Used widely in exams and business calculations.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Percentage = (Part/Whole) × 100</li>
              <li>Increase & decrease percentage problems</li>
              <li>Profit, loss, and discount percentage</li>
              <li>Percentage change and comparison</li>
            </ul>
          </section>

          {/* Ratio & Proportion */}
          <section id="ratio">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">3. Ratio & Proportion</h2>
            <p className="mb-3 text-gray-700">
              Ratio compares two quantities, and proportion states equality of two ratios.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Solve problems involving mixtures, speed ratios, ages, and quantities</li>
              <li>Proportional distribution and sharing</li>
              <li>Scaling problems</li>
            </ul>
          </section>

          {/* Profit & Loss */}
          <section id="profitloss">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">4. Profit & Loss</h2>
            <p className="mb-3 text-gray-700">
              Calculate profit or loss using cost price (CP) and selling price (SP).
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Profit = SP - CP</li>
              <li>Loss = CP - SP</li>
              <li>Profit & Loss percentage</li>
              <li>Discount and marked price problems</li>
            </ul>
          </section>

          {/* Simple & Compound Interest */}
          <section id="simpleinterest">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">5. Simple & Compound Interest</h2>
            <p className="mb-3 text-gray-700">
              Interest calculations for loans and investments.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Simple Interest: SI = (P × R × T)/100</li>
              <li>Compound Interest: CI = P × (1 + R/100)^T - P</li>
              <li>Problems on yearly, half-yearly, and quarterly compounding</li>
            </ul>
          </section>

          {/* Time, Speed & Work */}
          <section id="timework">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">6. Time, Speed & Work</h2>
            <p className="mb-3 text-gray-700">
              Solve problems on work efficiency, speed, distance, and time.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Speed = Distance / Time</li>
              <li>Time = Work / Efficiency</li>
              <li>Work done by multiple people or machines</li>
            </ul>
          </section>

          {/* Algebra */}
          <section id="algebra">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">7. Algebra</h2>
            <p className="mb-3 text-gray-700">
              Algebra involves solving equations, inequalities, and understanding patterns.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Linear equations, quadratic equations</li>
              <li>Word problems with variables</li>
              <li>Simple expressions, factorization, and substitution</li>
            </ul>
          </section>

          {/* Geometry */}
          <section id="geometry">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">8. Geometry</h2>
            <p className="mb-3 text-gray-700">
              Geometry deals with shapes, sizes, and properties of space.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Triangles, quadrilaterals, circles</li>
              <li>Angles, perimeter, area, volume</li>
              <li>Pythagoras theorem and coordinate geometry basics</li>
            </ul>
          </section>

          {/* Data Interpretation */}
          <section id="data">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">9. Data Interpretation</h2>
            <p className="mb-3 text-gray-700">
              Analyze and interpret data from graphs, tables, and charts.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Bar charts, line charts, and pie charts</li>
              <li>Tables with numerical data</li>
              <li>Ratio and percentage based analysis</li>
            </ul>
          </section>

          {/* Advantages */}
          <section id="advantages">
            <h2 className="text-2xl font-bold text-green-700 mt-10">✅ Importance & Benefits</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Develops numerical and analytical skills</li>
              <li>Crucial for competitive exams and placements</li>
              <li>Enhances problem-solving ability</li>
              <li>Improves speed and accuracy in calculations</li>
              <li>Helps in day-to-day financial and logical decisions</li>
            </ul>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
