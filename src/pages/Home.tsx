import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Manoj Padmanabha | Portfolio</title>
        <meta name="description" content="Explore Manoj's portfolio with full-stack projects and creative work." />
      </Helmet>

      <main className="w-screen h-screen bg-black text-white flex items-center justify-center">

        <div className="text-center px-6">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm Manoj
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            A full-stack developer exploring the intersection of design, code, and AI.
          </motion.p>

          <motion.div
            className="mt-10 flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            <a
              href="/projects"
              className="px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:scale-105 transition"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-white text-white rounded-full text-sm font-medium hover:scale-105 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </main>
    </>
  );
}
