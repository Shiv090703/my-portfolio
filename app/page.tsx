"use client";
import { useState, ReactNode } from "react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs: Record<string, ReactNode> = {
    about: (
      <p className="text-gray-800 leading-relaxed">
        Hello, I am <b>Shiv</b>. A <b>.NET Developer</b> passionate about
        coding, Dynamics 365, and building modern web apps.
      </p>
    ),
    projects: (
      <ul className="list-disc pl-6 space-y-2 text-gray-800">
        <li>🎓 Student Management System (C#, .NET, SQL)</li>
        <li>📊 Invoice Adjustment Plugin (Dynamics 365)</li>
        <li>🌐 Portfolio Website (React, Next.js, Tailwind)</li>
      </ul>
    ),
    resume: (
      <div className="text-center text-gray-800">
        <p className="mb-4">Download my resume:</p>
        <a
          href="/Shivam Rana G (1) (1).pdf "
          download
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          ⬇ Download Resume
        </a>
      </div>
    ),
    contact: (
      <p className="text-gray-800">
        📧 Email:{" "}
        <a href="mailto:shiv@example.com" className="text-blue-600 underline">
          shiv@example.com
        </a>
      </p>
    ),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">
          Shiv&apos;s Portfolio
        </h1>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              className={`px-5 py-2 rounded-lg font-medium transition ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 min-h-[180px]">
          {tabs[activeTab]}
        </div>
      </div>
    </div>
  );
}
