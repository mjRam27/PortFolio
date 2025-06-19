// components/AboutSection.tsx
import React from "react";

const aboutInfo = [
  {
    heading: "Who I Am",
    text: "I'm Manoj Padmanabha, a full-stack developer who blends creativity, logic, and AI-driven design to build meaningful solutions.",
  },
  {
    heading: "Tech Stack",
    text: "Proficient in React, Vue, Tailwind CSS, FastAPI, Python, MongoDB, Redis, Neo4j. Experienced with LLMs like Gemini and DeepSeek.",
  },
  {
    heading: "Academic Background",
    text: "Pursuing a Master's in Applied Computer Science at SRH Hochschule Heidelberg, Germany. Former professional cricketer with a strong sense of discipline and teamwork.",
  },
  {
    heading: "Beyond Code",
    text: "I explore new tools, capture cinematic drone content, and enjoy helping peers through mentorship and collaboration.",
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
