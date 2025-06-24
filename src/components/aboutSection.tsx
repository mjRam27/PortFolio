// components/AboutSection.tsx
import React from "react";

const aboutInfo = [
  {
    heading: "Who I Am",
    text: "I'm Manoj Padmanabha, a full-stack developer with a strong interest in generative AI, machine learning, and deep learning—blending creativity, logic, and cutting-edge tech to build meaningful solutions.",
  },
  {
    heading: "Tech Stack",
    text: "My tech toolkit includes React, Vue, Tailwind CSS, FastAPI, Python, MongoDB, Redis, and Neo4j. I've also worked with GCP for deployments and Firebase Storage for media management. Additionally, I've explored LLMs like Gemini and DeepSeek for real-world applications.",
  },
  {
    heading: "Academic Background",
    text: "Pursuing a Master's in Applied Computer Science at SRH Hochschule Heidelberg, Germany. I also hold an MBA in Business Analytics, a Bachelor's in Computer Applications, and a diploma in Graphic Designing and Interior-Exterior Designing with 3D Modeling. Former professional cricketer with a strong sense of discipline and teamwork.",
  },
  {
    heading: "Beyond Code",
    text: "I explore new tools, capture cinematic drone content, and enjoy reading books and travelling. I'm also passionate about filmmaking, enthusiastic about fitness, and love playing cricket.",
  },
];

const AboutSection = () => {
  return (
    <section className="relative z-40 w-full min-h-screen overflow-x-hidden text-white">
      {/* Black background with rounded top */}
      <div className="absolute inset-0 z-[-1] bg-black rounded-t-3xl" />

      <div className="max-w-8xl mx-auto pt-20 pb-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {aboutInfo.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-700 shadow-lg rounded-xl p-6 hover:border-white transition-all"
            >
              <h3 className="text-lg font-semibold mb-3 text-white">{item.heading}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
