import React from "react";
import { motion } from "framer-motion";

export default function OopLearningPage() {
  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "class", title: "Class" },
    { id: "object", title: "Object" },
    { id: "abstraction", title: "Abstraction" },
    { id: "encapsulation", title: "Encapsulation" },
    { id: "inheritance", title: "Inheritance" },
    { id: "polymorphism", title: "Polymorphism" },
    { id: "advantages", title: "Advantages of OOP" },
    { id: "disadvantages", title: "Disadvantages of OOP" }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg border-r p-6 sticky top-0 h-screen overflow-y-auto">
        <h2 className="text-xl font-bold text-blue-600 mb-6">Java OOP</h2>
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
              Java OOP (Object-Oriented Programming) Concepts
            </h1>
            <p className="text-gray-700 mb-3">
              Before Object-Oriented Programming (OOP), most programs followed a
              procedural approach, where tasks were performed step by step through
              functions and procedures. While this works for small programs, it
              becomes difficult to manage and maintain as projects grow larger.
            </p>
            <p className="text-gray-700 mb-3">
              OOP was introduced to address these challenges. Java, being a
              fully object-oriented language, organizes programs around objects
              and classes rather than functions, making code more modular,
              reusable, and easier to maintain. In OOP, real-world entities are
              modeled as objects which encapsulate both state and behavior.
            </p>
            <p className="text-gray-700">
              Key principles of OOP include <strong>Encapsulation</strong>,{" "}
              <strong>Abstraction</strong>, <strong>Inheritance</strong>, and{" "}
              <strong>Polymorphism</strong>. Mastering these concepts is essential
              for writing scalable software and excelling in technical interviews.
            </p>
          </section>

          {/* Class */}
          <section id="class">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">1. Class</h2>
            <p className="mb-3">
              A <strong>Class</strong> is a blueprint or template that defines the
              attributes (fields) and behaviors (methods) common to all objects
              of that type. It does not occupy memory on its own but allows you
              to create multiple objects based on its definition.
            </p>
            <p className="mb-3">
              Classes help organize code logically and promote reuse. For
              example, instead of defining employee data repeatedly, you define
              an <code>Employee</code> class and create multiple employee objects
              with similar behavior.
            </p>
            <pre className="bg-gray-900 text-green-300 p-4 rounded-lg overflow-x-auto">
{`public class Employee {
    private String name;
    private float salary;

    public Employee(String name, float salary) {
        this.name = name;
        this.salary = salary;
    }

    public void displayDetails() {
        System.out.println("Employee: " + name);
        System.out.println("Salary: " + salary);
    }
}`}
            </pre>
            <p className="text-gray-700 mt-2">
              This class defines an employee with a name and salary and provides a
              method to display the details. Any number of employee objects can be
              created using this class, avoiding code duplication.
            </p>
          </section>

          {/* Object */}
          <section id="object">
            <h2 className="text-2xl font-bold text-blue-600 mt-10">2. Object</h2>
            <p className="mb-3">
              An <strong>Object</strong> is a concrete instance of a class.
              Objects have three main characteristics:
            </p>
            <ul className="list-disc pl-6 mb-3">
              <li><strong>State:</strong> The attributes or properties of the object.</li>
              <li><strong>Behavior:</strong> The methods or functions the object can perform.</li>
              <li><strong>Identity:</strong> A unique reference that distinguishes it from other objects.</li>
            </ul>
            <p className="text-gray-700">
              For example, if <code>Employee emp1 = new Employee("Alice", 5000);</code>,
              then emp1 is an object with a specific state (name: Alice, salary: 5000)
              and behavior (methods like displayDetails()).
            </p>
          </section>

          {/* Abstraction */}
          <section id="abstraction">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">3. Abstraction</h2>
            <p className="mb-3">
              <strong>Abstraction</strong> is the process of hiding unnecessary
              implementation details and showing only essential features to the
              user. It helps developers focus on "what an object does" rather than
              "how it does it".
            </p>
            <p className="mb-3">
              In Java, abstraction is achieved through <code>abstract classes</code>
              and <code>interfaces</code>. For example, a <code>Vehicle</code> class
              can define abstract methods like <code>accelerate()</code> and
              <code>brake()</code> while the implementation is provided in specific
              subclasses like <code>Car</code> or <code>Bike</code>.
            </p>
            <p className="text-gray-700">
              This allows different types of vehicles to behave differently while
              using a common interface, making code flexible and extensible.
            </p>
          </section>

          {/* Encapsulation */}
          <section id="encapsulation">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">4. Encapsulation</h2>
            <p className="mb-3">
              Encapsulation is the process of wrapping data and methods inside
              a class and restricting direct access to some of the object’s components.
              Typically, fields are marked <code>private</code> and accessed via
              public getter and setter methods.
            </p>
            <p className="mb-3">
              Encapsulation ensures that object data cannot be modified directly
              from outside the class, preserving integrity and security.
            </p>
            <pre className="bg-gray-900 text-green-300 p-4 rounded-lg overflow-x-auto">
{`class Employee {
    private int id;
    private String name;

    public void setId(int id) { this.id = id; }
    public void setName(String name) { this.name = name; }

    public int getId() { return id; }
    public String getName() { return name; }
}`}
            </pre>
          </section>

          {/* Inheritance */}
          <section id="inheritance">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">5. Inheritance</h2>
            <p className="mb-3">
              Inheritance allows a new class (child/subclass) to acquire properties
              and methods of an existing class (parent/superclass). This promotes
              reusability and reduces code duplication.
            </p>
            <p className="text-gray-700">
              Example: A <code>Dog</code> class can inherit from an <code>Animal</code> class
              and automatically have methods like <code>eat()</code> and <code>sleep()</code>,
              while adding unique methods like <code>bark()</code>.
            </p>
          </section>

          {/* Polymorphism */}
          <section id="polymorphism">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">6. Polymorphism</h2>
            <p className="mb-3">
              Polymorphism allows one entity (method or object) to take multiple forms.
              It enables the same method to behave differently depending on the
              object or context.
            </p>
            <p className="mb-3">
              Types of polymorphism:
              <ul className="list-disc pl-6">
                <li><strong>Compile-time (Method Overloading):</strong> Multiple methods with the same name but different parameters.</li>
                <li><strong>Run-time (Method Overriding):</strong> A child class provides a specific implementation of a method defined in the parent class.</li>
              </ul>
            </p>
          </section>

          {/* Advantages */}
          <section id="advantages">
            <h2 className="text-2xl font-bold text-green-700 mt-10">
              ✅ Advantages of OOP
            </h2>
            <ul className="list-disc pl-6">
              <li>Improves code reusability and reduces duplication.</li>
              <li>Makes code modular, easier to debug and maintain.</li>
              <li>Supports scalability in large projects.</li>
              <li>Encapsulation ensures better data security.</li>
              <li>Abstraction reduces complexity by exposing only essential details.</li>
            </ul>
          </section>

          {/* Disadvantages */}
          <section id="disadvantages">
            <h2 className="text-2xl font-bold text-red-700 mt-10">
              ⚠️ Disadvantages of OOP
            </h2>
            <ul className="list-disc pl-6">
              <li>Steep learning curve for beginners.</li>
              <li>Overhead for small/simple programs.</li>
              <li>Debugging across multiple classes can be time-consuming.</li>
              <li>Consumes more memory due to multiple objects.</li>
              <li>Sometimes requires more boilerplate code compared to procedural programming.</li>
            </ul>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
