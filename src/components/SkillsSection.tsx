// src/components/SkillsSection.tsx
import { motion } from "framer-motion";

// ✅ Step 1: import all skill icons
import awsIcon from "../assets/skills/aws.png";
import bsIcon from "../assets/skills/bs.png";
import colabIcon from "../assets/skills/colab.png";
import dockerIcon from "../assets/skills/docker.png";
import firebaseIcon from "../assets/skills/firebase.png";
import gcpIcon from "../assets/skills/gcp.png";
import gitIcon from "../assets/skills/git.png";
import jsIcon from "../assets/skills/JS.png";
import linuxIcon from "../assets/skills/linux.png";
import mongoIcon from "../assets/skills/mongo.png";
import mysqlIcon from "../assets/skills/mysql.png";
import pyIcon from "../assets/skills/py.png";
import reactIcon from "../assets/skills/react.png";
// import tailwindIcon from "../assets/skills/tailwind.png";
import tsIcon from "../assets/skills/TS.png";
import ubuntuIcon from "../assets/skills/ubuntu.png";
import vscodeIcon from "../assets/skills/vs code.png";
import vueIcon from "../assets/skills/vue.png";

// ✅ Step 2: list of skills
const skills = [
  { name: "JavaScript", icon: jsIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "React", icon: reactIcon },
  { name: "Vue", icon: vueIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "Firebase", icon: firebaseIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "Git", icon: gitIcon },
  { name: "GCP", icon: gcpIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "Python", icon: pyIcon },
  { name: "Linux", icon: linuxIcon },
  { name: "Ubuntu", icon: ubuntuIcon },
  { name: "AWS", icon: awsIcon },
  { name: "PostgreSQL", icon: bsIcon },
  { name: "Colab", icon: colabIcon },
  { name: "VS Code", icon: vscodeIcon },
];

// ✅ Step 3: component
export default function SkillsSection() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 text-center">
      <motion.h2
        className="text-4xl md:text-4xl font-extrabold mb-8"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Transforming Challenges into Pathways for Achievement
        <br />
        <span className="text-5l block mt-2">Skills & Experience</span>
      </motion.h2>

      <p className="max-w-3xl mx-auto text-gray-300 mb-10 leading-relaxed text-lg">
        My primary experience lies in <strong>fullstack development</strong>, with a strong focus on <strong>backend (FastAPI)</strong> and <strong>cloud technologies</strong>. I specialize in building scalable, responsive web applications using <strong>Vue</strong> or <strong>React</strong>, and have expertise in backend systems, automation, and cloud infrastructure.
        <br />
        <br />
        I'm also experienced with tools like Docker, Firebase, and Git, and I thrive on crafting modern, performant solutions from end to end.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 object-contain mb-3"
            />
            <p className="text-white text-sm">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
