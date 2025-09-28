import React from "react";
import { motion } from "framer-motion";

export default function VerbalAbilityPage() {
  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "grammar", title: "Grammar" },
    { id: "vocabulary", title: "Vocabulary" },
    { id: "reading", title: "Reading Comprehension" },
    { id: "synonyms", title: "Synonyms & Antonyms" },
    { id: "sentence", title: "Sentence Correction" },
    { id: "para", title: "Para Jumbles" },
    { id: "cloze", title: "Cloze Test" },
    { id: "idioms", title: "Idioms & Phrases" },
    { id: "advantages", title: "Importance & Benefits" }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg border-r p-6 sticky top-0 h-screen overflow-y-auto">
        <h2 className="text-xl font-bold text-blue-600 mb-6">Verbal Ability</h2>
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Verbal Ability Concepts</h1>
            <p className="text-gray-700 mb-3">
              Verbal ability tests your understanding and command of the English language. 
              It is crucial for exams, interviews, and effective communication in the workplace.
            </p>
            <p className="text-gray-700">
              Topics include grammar, vocabulary, reading comprehension, sentence correction, para jumbles, cloze tests, and idioms.
            </p>
          </section>

          {/* Grammar */}
          <section id="grammar">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">1. Grammar</h2>
            <p className="mb-3 text-gray-700">
              Grammar forms the foundation of any language. Key topics include tenses, parts of speech, subject-verb agreement, and punctuation.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Tenses: Present, Past, Future, Continuous, Perfect</li>
              <li>Parts of Speech: Noun, Pronoun, Verb, Adjective, Adverb, Preposition</li>
              <li>Subject-Verb Agreement: Ensure the subject and verb match in number</li>
              <li>Modifiers & Punctuation: Commas, semicolons, colons</li>
            </ul>
          </section>

          {/* Vocabulary */}
          <section id="vocabulary">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">2. Vocabulary</h2>
            <p className="mb-3 text-gray-700">
              Vocabulary tests knowledge of word meanings, spellings, and usage.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Synonyms & Antonyms</li>
              <li>One-word substitutions</li>
              <li>Homonyms & Homophones</li>
              <li>Word formation (prefixes, suffixes)</li>
            </ul>
          </section>

          {/* Reading Comprehension */}
          <section id="reading">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">3. Reading Comprehension</h2>
            <p className="mb-3 text-gray-700">
              Tests the ability to read, understand, and answer questions based on a passage.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Identify main ideas, themes, and supporting details</li>
              <li>Infer meaning from context</li>
              <li>Answer vocabulary and logic-based questions</li>
            </ul>
          </section>

          {/* Synonyms & Antonyms */}
          <section id="synonyms">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">4. Synonyms & Antonyms</h2>
            <p className="mb-3 text-gray-700">
              Testing vocabulary knowledge, synonyms are words with similar meanings, and antonyms are words with opposite meanings.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Example Synonym: Happy → Joyful</li>
              <li>Example Antonym: Hot → Cold</li>
            </ul>
          </section>

          {/* Sentence Correction */}
          <section id="sentence">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">5. Sentence Correction</h2>
            <p className="mb-3 text-gray-700">
              Identifying and correcting grammatical or contextual errors in sentences.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Check subject-verb agreement</li>
              <li>Correct tense errors</li>
              <li>Improve sentence structure for clarity</li>
            </ul>
          </section>

          {/* Para Jumbles */}
          <section id="para">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">6. Para Jumbles</h2>
            <p className="mb-3 text-gray-700">
              Rearrange sentences in a paragraph to form a logical sequence.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Understand logical flow</li>
              <li>Identify opening and closing sentences</li>
              <li>Practice connecting sentences using keywords</li>
            </ul>
          </section>

          {/* Cloze Test */}
          <section id="cloze">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">7. Cloze Test</h2>
            <p className="mb-3 text-gray-700">
              Fill in the blanks in a passage with the most appropriate word.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Tests vocabulary, grammar, and comprehension</li>
              <li>Choose the correct word considering context</li>
            </ul>
          </section>

          {/* Idioms & Phrases */}
          <section id="idioms">
            <h2 className="text-2xl font-bold text-blue-700 mt-10">8. Idioms & Phrases</h2>
            <p className="mb-3 text-gray-700">
              Understand and use common English idioms and phrases correctly.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Break the ice – To initiate conversation</li>
              <li>Hit the nail on the head – To be precise</li>
              <li>Bite the bullet – To face a difficult situation</li>
            </ul>
          </section>

          {/* Advantages */}
          <section id="advantages">
            <h2 className="text-2xl font-bold text-green-700 mt-10">✅ Importance & Benefits</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Improves communication skills</li>
              <li>Helps in competitive exams and placements</li>
              <li>Enhances reading and comprehension</li>
              <li>Boosts confidence in interviews and group discussions</li>
              <li>Improves writing and analytical skills</li>
            </ul>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
