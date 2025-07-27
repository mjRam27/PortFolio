import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const leftVariant = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const rightVariant = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export default function ContactSection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 -mt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
        {/* Left: Message */}
        <motion.div
          className="flex-1"
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Got questions or a project idea? With a fullstack and AI engineer at
            your fingertips, I’m here to assist. Let's connect and explore
            possibilities.
          </p>
        </motion.div>

        {/* Right: Social icons */}
        <motion.div
          className="flex-1 flex flex-col items-center gap-6"
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex gap-8">
            {[
              {
                icon: Github,
                href: "https://github.com/mjRam27",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/manoj-padmanabha-4280411b7",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:mjgowda27g@gmail.com",
                label: "Email",
              },
              {
                icon: Instagram,
                href: "https://www.instagram.com/aaryo__027",
                label: "Instagram",
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                whileHover={{ scale: 1.15 }}
              >
                <div className="border-t-2 border-b-2 border-blue-300 py-2 px-3 rounded transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-8 h-8 text-white" />
                </div>
              </motion.a>
            ))}
          </div>
          <p className="text-xl font-medium mt-2">Let's Get Social</p>
        </motion.div>
      </div>
    </section>
  );
}
