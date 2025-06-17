import React from "react";

interface TabletAnimationProps {
  scrollY: number;
}

const TabletAnimation: React.FC<TabletAnimationProps> = ({ scrollY }) => {
  const scale = Math.max(0.3, 1 - scrollY * 0.001);
  const opacity = Math.max(0.1, 1 - scrollY * 0.002);

  const codeLines = [
    "const developer = {",
    "  name: 'Manoj Padmanabha',",
    "  skills: ['React', 'Vue', 'FastApi', 'AI'],",
    "  passion: 'Building the future'",
    "};",
    "",
    "function createAwesome() {",
    "  return code + creativity + AI;",
    "}",
    "",
    "// Exploring AI frontiers",
    "const aiProjects = [",
    "  'Chatbots',",
    "  'Self car driving',",
    "  'Computer Vision',",
    "  'NLP Applications'",
    "];",
    "export default Innovation;",
    "quick learner: true,",
    "teamPlayer: true,",
    "not just code: true,",
    "multidisciplinary: true,",
    "frontend: 'React', 'Vue',",
    "backend: 'Python',",
    "cloud: 'AWS', 'GCP',",
    "database: 'SQL', 'MongoDB', 'Redis','neo4j'",
  ];

  return (
    <div
      className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
      style={{
        transform: `scale(${scale})`,
        opacity: opacity * 0.5,
      }}
    >
      <div className="relative">
        {/* SVG Tablet */}
        <svg
          width="720"
          height="480"
          viewBox="0 0 720 500"
          className="drop-shadow-2xl"
        >
          {/* Tablet Frame */}
          <rect
            x="60"
            y="60"
            width="600"
            height="360"
            rx="20"
            ry="20"
            fill="#1a1a1a"
            stroke="#333"
            strokeWidth="3"
          />

          {/* Screen */}
          <rect
            x="90"
            y="90"
            width="540"
            height="300"
            rx="10"
            ry="10"
            fill="#000"
          />

          {/* Home Button */}
          <circle
            cx="360"
            cy="460"
            r="15"
            fill="#1e1e1e"
            stroke="#333"
            strokeWidth="2"
          />
        </svg>

        {/* Code Content */}
        <div className="absolute top-[90px] left-[90px] w-[540px] h-[300px] overflow-hidden rounded-md">
  <div className="relative w-full h-full">
    <div className="animate-scroll-code text-sm font-mono text-green-400 leading-snug w-full absolute top-0 left-0 space-y-1">
      {[...codeLines, ...codeLines].map((line, index) => (
        <div
          key={index}
          className="whitespace-pre-wrap break-words flex gap-2"
        >
          <span className="text-gray-500 min-w-[30px] text-right">
            {String((index % codeLines.length) + 1).padStart(2, "0")}
          </span>
          <span className="flex-1">{line}</span>
        </div>
      ))}
    </div>
  </div>
</div>

        {/* Glow Background Layer (optional, behind tablet only) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[-1]">
          <div className="w-[600px] h-[400px] bg-transparent mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default TabletAnimation;
