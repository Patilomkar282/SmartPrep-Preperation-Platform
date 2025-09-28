import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const DSASection = () => {
  const [openTopicIndex, setOpenTopicIndex] = useState(null);
  const [completed, setCompleted] = useState({}); // Track completed problems

  const dsaTopics = [
    {
      title: "Array",
      gradient: "from-teal-400 to-blue-500",
      questions: [
        { title: "Two Sum", platform: "LeetCode", link: "https://leetcode.com/problems/two-sum/" },
        { title: "Maximum Subarray", platform: "LeetCode", link: "https://leetcode.com/problems/maximum-subarray/" },
        { title: "Best Time to Buy and Sell Stock", platform: "LeetCode", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
        { title: "Product of Array Except Self", platform: "LeetCode", link: "https://leetcode.com/problems/product-of-array-except-self/" }
      ]
    },
    {
      title: "String",
      gradient: "from-purple-400 to-pink-500",
      questions: [
        { title: "Valid Anagram", platform: "LeetCode", link: "https://leetcode.com/problems/valid-anagram/" },
        { title: "Longest Palindromic Substring", platform: "LeetCode", link: "https://leetcode.com/problems/longest-palindromic-substring/" },
        { title: "String to Integer (atoi)", platform: "LeetCode", link: "https://leetcode.com/problems/string-to-integer-atoi/" },
        { title: "Longest Common Prefix", platform: "LeetCode", link: "https://leetcode.com/problems/longest-common-prefix/" }
      ]
    },
    {
      title: "Searching & Sorting",
      gradient: "from-emerald-400 to-cyan-500",
      questions: [
        { title: "Binary Search", platform: "LeetCode", link: "https://leetcode.com/problems/binary-search/" },
        { title: "Merge Intervals", platform: "LeetCode", link: "https://leetcode.com/problems/merge-intervals/" },
        { title: "Search in Rotated Sorted Array", platform: "LeetCode", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
        { title: "Kth Largest Element in Array", platform: "LeetCode", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/" }
      ]
    },
    {
      title: "Sliding Window",
      gradient: "from-orange-400 to-red-500",
      questions: [
        { title: "Best Time to Buy and Sell Stock", platform: "LeetCode", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
        { title: "Longest Substring Without Repeating Characters", platform: "LeetCode", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
        { title: "Minimum Window Substring", platform: "LeetCode", link: "https://leetcode.com/problems/minimum-window-substring/" },
        { title: "Sliding Window Maximum", platform: "LeetCode", link: "https://leetcode.com/problems/sliding-window-maximum/" }
      ]
    },
    {
      title: "Stack",
      gradient: "from-indigo-400 to-purple-600",
      questions: [
        { title: "Valid Parentheses", platform: "LeetCode", link: "https://leetcode.com/problems/valid-parentheses/" },
        { title: "Balanced Brackets", platform: "HackerRank", link: "https://www.hackerrank.com/challenges/balanced-brackets/" },
        { title: "Largest Rectangle in Histogram", platform: "LeetCode", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
        { title: "Min Stack", platform: "LeetCode", link: "https://leetcode.com/problems/min-stack/" }
      ]
    },
    {
      title: "Queue",
      gradient: "from-pink-400 to-rose-500",
      questions: [
        { title: "Implement Queue using Stacks", platform: "LeetCode", link: "https://leetcode.com/problems/implement-queue-using-stacks/" },
        { title: "Queue using Two Stacks", platform: "HackerRank", link: "https://www.hackerrank.com/challenges/queue-using-two-stacks/" },
        { title: "Sliding Window Maximum (Queue)", platform: "LeetCode", link: "https://leetcode.com/problems/sliding-window-maximum/" },
        { title: "Design Circular Queue", platform: "LeetCode", link: "https://leetcode.com/problems/design-circular-queue/" }
      ]
    },
    {
      title: "Dynamic Programming",
      gradient: "from-blue-400 to-indigo-600",
      questions: [
        { title: "Climbing Stairs", platform: "LeetCode", link: "https://leetcode.com/problems/climbing-stairs/" },
        { title: "Coin Change", platform: "LeetCode", link: "https://leetcode.com/problems/coin-change/" },
        { title: "Longest Increasing Subsequence", platform: "LeetCode", link: "https://leetcode.com/problems/longest-increasing-subsequence/" },
        { title: "House Robber", platform: "LeetCode", link: "https://leetcode.com/problems/house-robber/" }
      ]
    },
    {
      title: "Graph",
      gradient: "from-green-400 to-blue-500",
      questions: [
        { title: "Number of Islands", platform: "LeetCode", link: "https://leetcode.com/problems/number-of-islands/" },
        { title: "Clone Graph", platform: "LeetCode", link: "https://leetcode.com/problems/clone-graph/" },
        { title: "Course Schedule", platform: "LeetCode", link: "https://leetcode.com/problems/course-schedule/" },
        { title: "Graph Valid Tree", platform: "LeetCode", link: "https://leetcode.com/problems/graph-valid-tree/" }
      ]
    },
    {
      title: "Trees",
      gradient: "from-yellow-400 to-orange-500",
      questions: [
        { title: "Maximum Depth of Binary Tree", platform: "LeetCode", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
        { title: "Invert Binary Tree", platform: "LeetCode", link: "https://leetcode.com/problems/invert-binary-tree/" },
        { title: "Lowest Common Ancestor of BST", platform: "LeetCode", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
        { title: "Diameter of Binary Tree", platform: "LeetCode", link: "https://leetcode.com/problems/diameter-of-binary-tree/" }
      ]
    },
    {
      title: "Tries",
      gradient: "from-violet-400 to-purple-600",
      questions: [
        { title: "Implement Trie (Prefix Tree)", platform: "LeetCode", link: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
        { title: "Word Search II", platform: "LeetCode", link: "https://leetcode.com/problems/word-search-ii/" },
        { title: "Replace Words", platform: "LeetCode", link: "https://leetcode.com/problems/replace-words/" },
        { title: "Autocomplete System", platform: "LeetCode", link: "https://leetcode.com/problems/design-search-autocomplete-system/" }
      ]
    }
  ];

  const toggleTopic = (index) => {
    setOpenTopicIndex(openTopicIndex === index ? null : index);
  };

  const toggleCompleted = (topicIndex, qIndex) => {
    const key = `${topicIndex}-${qIndex}`;
    setCompleted(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl font-bold text-slate-900 tracking-tight">DSA Practice</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 font-light max-w-xl mx-auto">
            Explore key DSA topics, solve curated problems, and track your progress.
          </p>
        </div>

        {/* Topic List */}
        <ul className="space-y-6">
          {dsaTopics.map((topic, index) => (
            <li key={index} className="border border-slate-200 rounded-2xl bg-white shadow-sm transition hover:shadow-md">
              <button
                onClick={() => toggleTopic(index)}
                className={`w-full flex items-center justify-between px-6 py-4 text-left text-lg font-semibold text-slate-800 hover:text-slate-900 transition`}
              >
                <span>{topic.title}</span>
                {openTopicIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-slate-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500" />
                )}
              </button>

              {/* Dropdown */}
              {openTopicIndex === index && (
                <div className="px-6 pb-4 pt-2 space-y-3 animate-fadeIn">
                  {topic.questions.map((q, qIndex) => {
                    const key = `${index}-${qIndex}`;
                    return (
                      <div
                        key={qIndex}
                        className="flex items-center justify-between bg-gradient-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 px-4 py-3 rounded-xl transition-all duration-300"
                      >
                        {/* Left: Problem name (not clickable) */}
                        <span className="flex-1 text-slate-700 font-medium">
                          {q.title}
                        </span>

                        {/* Right: Clickable platform badge + Completed checkbox */}
                        <div className="flex items-center gap-3 ml-4">
                          <a
                            href={q.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-sm text-white px-3 py-1 rounded-full bg-gradient-to-r ${q.platform === "LeetCode" ? "from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600" : "from-emerald-400 to-green-500 hover:from-emerald-500 hover:to-green-600"} flex items-center gap-1 transition-all duration-300 hover:shadow-md transform hover:scale-105`}
                          >
                            {q.platform}
                            <ExternalLink className="w-4 h-4" />
                          </a>

                          <input
                            type="checkbox"
                            checked={!!completed[key]}
                            onChange={() => toggleCompleted(index, qIndex)}
                            className="w-5 h-5 accent-green-500"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-4 rounded-2xl shadow-xl">
            <p className="text-lg font-light">Keep practicing. Greatness is built one problem at a time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DSASection;