import { motion } from "framer-motion";
import awsIcon from "../assets/skills/aws.png";
import colabIcon from "../assets/skills/colab.png";
import dockerIcon from "../assets/skills/docker.png";
import firebaseIcon from "../assets/skills/firebase.png";
import gcpIcon from "../assets/skills/gcp.png";
import gitIcon from "../assets/skills/git.png";
import jsIcon from "../assets/skills/js1.png";
import linuxIcon from "../assets/skills/linux.png";
import mongoIcon from "../assets/skills/mongo.png";
import mysqlIcon from "../assets/skills/mysql.png";
import pyIcon from "../assets/skills/py.png";
import reactIcon from "../assets/skills/react.png";
import tailwindIcon from "../assets/skills/tailwind.png";
import tsIcon from "../assets/skills/TS.png";
import ubuntuIcon from "../assets/skills/ubuntu.png";
import vueIcon from "../assets/skills/vue.png";

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
  { name: "Colab", icon: colabIcon },
  { name: "Tailwind", icon: tailwindIcon },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300 },
  },
};

export default function SkillsSection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <motion.h2
        className="text-5xl font-extrabold text-center mb-12"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <motion.p
        className="text-center text-lg text-gray-300 max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My primary expertise is in{" "}
        <span className="text-white font-semibold">Fullstack development</span>, with a strong focus on{" "}
        <span className="text-white font-semibold">FastAPI backend</span>,{" "}
        <span className="text-white font-semibold">React frontend</span>, and{" "}
        <span className="text-white font-semibold">Cloud technologies</span>.{" "}
        I also have experience working with{" "}
        <span className="text-white font-semibold">LLM models</span> by integrating them into
        production-ready applications. I build responsive UIs with React or Vue and ensure performant
        solutions from end to end.
      </motion.p>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 justify-items-center max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center group transition-transform duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.15 }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 transform transition-transform duration-300 group-hover:scale-125"
            />
            <span className="mt-2 text-sm text-white">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
