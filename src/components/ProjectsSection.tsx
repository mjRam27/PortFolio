import { React, useState } from "react";

// Define project type

type Project = {
  title: string;
  description: string;
  details: string;
  githubUrl: string;
};

// Project data with updated content
const projects: Project[] = [
  {
    title: "Self Driving Car",
    description:
      "Research-based self-driving car project using CNNs, sensor fusion, and simulation environments.",
    details:
      "A self-driving car, also known as an autonomous vehicle, is capable of sensing its environment and moving safely with little or no human input. This ongoing research project focuses on real-time vision using OpenCV, CNN-based decision models, and sensor fusion techniques.",
    githubUrl: "https://github.com/yourname/self-driving-car",
  },
  {
    title: "Chatbot – Deepseek × Gemini",
    description:
      "Multimodal AI chatbot integrating Gemini 1.5 Flash and DeepSeek R1 with audio/image support.",
    details:
      "A multimodal AI chatbot powered by Gemini 1.5 Flash and DeepSeek R1 integrated into a unified frontend. Built using React and FastAPI, it supports parallel responses from both LLMs, speech-to-text (microphone/upload), OCR using Google Vision API, and real-time chat UI. Fully containerized using Docker.",
    githubUrl: "https://github.com/mjRam27/ChatBot-GeminiXDeepSeek",
  },
  {
    title: "Groyo – E-Commerce Frontend",
    description:
      "Responsive grocery e-commerce site with authentication, payments, and full CRUD features.",
    details:
      "An online grocery shopping platform with full-stack features: microservices architecture, authentication services, product management, Stripe payments, cart operations, and responsive frontend. Built with Vue, Tailwind CSS, and Node services.",
    githubUrl: "https://github.com/mjRam27/Groyo",
  },
  {
    title: "VBB Transport Services",
    description:
      "Live public transport tracker using VBB API, FastAPI, MongoDB, Redis, and Neo4j.",
    details:
      "This project fetches real-time transport data from the VBB API and renders it in a responsive Vue.js frontend. It includes station board views, route mapping, user history logs, and backend analytics using FastAPI, MongoDB, Redis, and Neo4j.",
    githubUrl: "https://github.com/mjRam27/Advance-Databases",
  },
  {
    title: "Library Management System (QuickStack)",
    description:
      "CRUD-based library platform with user roles, book tracking, and admin dashboard.",
    details:
      "QuickStack is a full-featured library management app with role-based access for admins and users. Includes registration/authentication, book CRUD, search functionality, borrowing logs, renewals, and user profile management. Built using Python and MongoDB.",
    githubUrl: "https://github.com/mjRam27/QuickStack",
  },
  {
    title: "ChatMe – Personal Chatbot",
    description:
      "AI-powered chatbot trained on personal data, built using Python.",
    details:
      "A personal assistant chatbot designed to answer questions about the developer. Trained with custom data using local memory and embeddings. Supports speech input and OCR queries. Developed using Python and deployed as a standalone assistant.",
    githubUrl: "https://github.com/mjRam27/chatME",
  },
  {
    title: "PetFood Store – UI",
    description:
      "UI design for a pet food store using vanilla JS and responsive components.",
    details:
      "Crafted a clean and interactive UI for a fictional pet food e-commerce platform. Focused on frontend layout and design with minor functionality. Built using vanilla JavaScript and responsive Tailwind-based grid/flex utilities.",
    githubUrl: "https://github.com/mjRam27/pet_foodstore",
  },
  {
    title: "Image Generation – VAE",
    description:
      "Variational Autoencoder model for generating MNIST handwritten digit images.",
    details:
      "Built and trained a Variational Autoencoder (VAE) using PyTorch to generate handwritten digits from the MNIST dataset. The model compresses input into latent vectors and reconstructs realistic outputs. Focused on unsupervised learning and generative modeling.",
    githubUrl: "https://github.com/mjRam27?tab=repositories",
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="relative z-50 w-full min-h-screen overflow-x-hidden">
      <div className="absolute inset-0 z-[-1] bg-white rounded-t-3xl overflow-hidden" />

      <div className="max-w-8xl mx-auto pt-20 pb-15 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, index) => (
            <div
              key={index}
              onClick={() => setSelected(proj)}
              className="bg-white shadow-md rounded-xl p-6 cursor-pointer hover:shadow-xl transition-all"
            >
              <h3
                className="text-lg font-semibold mb-2 text-blue-600 hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(proj.githubUrl, "_blank");
                }}
              >
                {proj.title}
              </h3>
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
