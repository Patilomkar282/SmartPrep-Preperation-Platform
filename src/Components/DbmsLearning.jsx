import React from "react";
import { motion } from "framer-motion";

export default function DbmsLearningPage() {
  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "database", title: "What is a Database?" },
    { id: "dbms", title: "DBMS Overview" },
    { id: "sql", title: "SQL & Queries" },
    { id: "normalization", title: "Normalization" },
    { id: "indexing", title: "Indexing" },
    { id: "transactions", title: "Transactions & ACID" },
    { id: "advantages", title: "Advantages of DBMS" },
    { id: "disadvantages", title: "Disadvantages of DBMS" }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg border-r p-6 sticky top-0 h-screen overflow-y-auto">
        <h2 className="text-xl font-bold text-blue-600 mb-6">Database Management Systems</h2>
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
              Database Management Systems (DBMS) Concepts
            </h1>
            <p className="text-gray-700 mb-3">
              A Database Management System (DBMS) is software that allows users to efficiently store, retrieve, and manage data.
              It provides an organized way to handle large volumes of structured data.
            </p>
            <p className="text-gray-700 mb-3">
              Modern DBMS examples include MySQL, PostgreSQL, Oracle, and MongoDB. DBMSs are critical for backend development,
              data analytics, and enterprise applications.
            </p>
            <p className="text-gray-700">
              Key concepts include SQL queries, normalization, indexing, transactions, and ensuring data integrity and security.
            </p>
          </section>

          {/* What is a Database? */}
          <section id="database">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">1. What is a Database?</h2>
            <p className="mb-3">
              A <strong>Database</strong> is an organized collection of data stored electronically. Databases store information about
              entities like users, products, or orders.
            </p>
            <p className="mb-3">
              Types of databases include:
              <ul className="list-disc pl-6">
                <li>Relational Databases (RDBMS) – data in tables with rows and columns.</li>
                <li>NoSQL Databases – document, key-value, graph, or columnar storage.</li>
                <li>Distributed Databases – data spread across multiple servers.</li>
              </ul>
            </p>
            <p className="text-gray-700">
              Example: A bank database storing customer details, account balances, and transaction history.
            </p>
          </section>

          {/* DBMS Overview */}
          <section id="dbms">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">2. DBMS Overview</h2>
            <p className="mb-3">
              A DBMS provides an interface to interact with databases and offers features like:
              <ul className="list-disc pl-6">
                <li>Data Storage and Retrieval</li>
                <li>Data Integrity and Security</li>
                <li>Concurrent Access and Locking</li>
                <li>Backup and Recovery</li>
              </ul>
            </p>
            <p className="text-gray-700">
              Example: PostgreSQL provides relational storage, SQL query support, and ACID compliance for transactions.
            </p>
          </section>

          {/* SQL & Queries */}
          <section id="sql">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">3. SQL & Queries</h2>
            <p className="mb-3">
              SQL (Structured Query Language) is used to interact with relational databases.
            </p>
            <p className="mb-3">
              Common SQL commands:
              <ul className="list-disc pl-6">
                <li><strong>SELECT</strong> – fetch data</li>
                <li><strong>INSERT</strong> – add new records</li>
                <li><strong>UPDATE</strong> – modify existing records</li>
                <li><strong>DELETE</strong> – remove records</li>
              </ul>
            </p>
            <p className="text-gray-700">
              Example Query: <code>SELECT name, salary FROM Employee WHERE salary between 1000 and 50000;</code>
            </p>
          </section>

          {/* Normalization */}
          <section id="normalization">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">4. Normalization</h2>
            <p className="mb-3">
              Normalization organizes data in tables to reduce redundancy and improve data integrity.
              Normal forms (1NF, 2NF, 3NF, BCNF) guide database structure.
            </p>
            <p className="mb-3">
              Example: Splitting a "CustomerOrders" table into separate "Customer" and "Orders" tables to avoid duplicate customer info.
            </p>
          </section>

          {/* Indexing */}
          <section id="indexing">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">5. Indexing</h2>
            <p className="mb-3">
              Indexing improves data retrieval speed. Indexes are additional data structures pointing to rows in a table.
            </p>
            <p className="mb-3">
              Types of indexes:
              <ul className="list-disc pl-6">
                <li>B-Tree Index – balanced tree structure for range queries</li>
                <li>Hash Index – fast lookup for exact matches</li>
                <li>Composite Index – index on multiple columns</li>
              </ul>
            </p>
            <p className="text-gray-700">
              Example: Searching for an employee by ID is faster using an index than scanning the whole table.
            </p>
          </section>

          {/* Transactions & ACID */}
          <section id="transactions">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">6. Transactions & ACID</h2>
            <p className="mb-3">
              A transaction is a unit of work performed on a database. ACID properties ensure reliability:
              <ul className="list-disc pl-6">
                <li><strong>Atomicity</strong> – all or nothing</li>
                <li><strong>Consistency</strong> – database remains valid</li>
                <li><strong>Isolation</strong> – transactions do not interfere</li>
                <li><strong>Durability</strong> – changes persist even after crashes</li>
              </ul>
            </p>
            <p className="text-gray-700">
              Example: Transferring money between accounts involves two updates. ACID ensures either both succeed or none.
            </p>
          </section>

          {/* Advantages */}
          <section id="advantages">
            <h2 className="text-2xl font-bold text-green-700 mt-10">✅ Advantages of DBMS</h2>
            <ul className="list-disc pl-6">
              <li>Centralized data management</li>
              <li>Data integrity and security</li>
              <li>Supports multi-user concurrent access</li>
              <li>Reduces redundancy via normalization</li>
              <li>Backup, recovery, and fault tolerance</li>
            </ul>
          </section>

          {/* Disadvantages */}
          <section id="disadvantages">
            <h2 className="text-2xl font-bold text-red-700 mt-10">⚠️ Disadvantages of DBMS</h2>
            <ul className="list-disc pl-6">
              <li>Complexity in setup and maintenance</li>
              <li>Hardware and software overhead</li>
              <li>May require specialized training</li>
              <li>Overhead for small applications</li>
              <li>Performance impact in very large systems if not optimized</li>
            </ul>
          </section>
           </motion.div>
                </main>
              </div>
            );
          }
          
