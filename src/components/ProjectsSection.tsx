import React, { useState } from "react";


type Project = {
  title: string;
  description: string;
  details: string;
};

const projects = [
  {
    title: "Self Driving Car (Ongoing)",
    description:
      "Developing a self-driving car model using convolutional neural networks (CNNs) and sensor fusion. In...",
    details:
      "Still in progress. Focused on OpenCV, CNNs, real-time sensor integration, and trained on simulated environments.",
  },
  {
    title: "Chatbot – Deepseek × Gemini",
    description:
      "A chatbot platform comparing performance, accuracy, and multimodal capabilities of LLMs (Deepseek vs Gemini).",
    details:
      "Used OpenRouter & Google SDKs. Includes chat, OCR, speech-to-text, and a frontend for side-by-side comparison.",
  },
  {
    title: "Groyo – E-Commerce Frontend",
    description:
      "Designed a responsive and modern e-commerce frontend with product listings, filters, and cart functi...",
    details:
      "Built with Vue.js and Tailwind CSS. Optimized for performance and responsive layout across devices.",
  },
  {
    title: "VBB Transport Services",
    description:
      "Built a full-stack app to track live public transport data using the VBB API. Integrated MongoDB, Re...",
    details:
      "Backed with FastAPI + Redis + Neo4j. Frontend in Vue.js. Supports station boards, journeys, graphs.",
  },
  {
    title: "Library Management System",
    description:
      "Created a CRUD-based library system for managing books, users, borrow history, and admin roles. Buil...",
    details:
      "Implemented in Python + MongoDB. Includes role-based access, audit logs, and UI with Vue.",
  },
  {
    title: "ChatMe – Personal Chatbot",
    description:
      "Your personal AI assistant powered by Gemini/ChatGPT. Designed for daily queries, reminders, and inf...",
    details:
      "Uses local memory and vector search. Speech + OCR enabled. Frontend in React.",
  },
  {
    title: "PetFood Store – UI",
    description:
      "Crafted a clean and interactive UI for a pet food website using Vue.js. Focused on usability and lay...",
    details:
      "Built reusable components, optimized interactions, and used responsive CSS grid/flex utilities.",
  },
];

const ProjectsSection = () => {
const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="relative z-50 bg-white min-h-screen px-4 py-20">
      {/* White background to cover previous layers */}
      <div className="absolute inset-0 bg-white z-[-1]" />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, index) => (
            <div
              key={index}
              onClick={() => setSelected(proj)}
              className="bg-white shadow-md rounded-xl p-6 cursor-pointer hover:shadow-xl transition-all"
            >
              <h3 className="text-lg font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-3">{proj.description}</p>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="bg-white max-w-lg w-full rounded-xl p-6 shadow-xl relative">
            <button
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
              onClick={() => setSelected(null)}
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4">{selected.title}</h3>
            <p className="text-gray-700 whitespace-pre-line">{selected.details}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;