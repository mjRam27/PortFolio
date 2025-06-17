import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import profileImage from "../assets/mjchikoo2.png";
import TabletAnimation from "../components/TabletAnimation";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [hideContent, setHideContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
      setHideContent(currentScroll > window.innerHeight * 0.6); // start reverse animation after 60% of screen
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Manoj Padmanabha | Portfolio</title>
        <meta
          name="description"
          content="Explore Manoj's portfolio with full-stack projects and creative work."
        />
      </Helmet>

      {/* 🔄 Background Tablet Animation */}
      <TabletAnimation scrollY={scrollY} />
      <div className="absolute inset-0 bg-black z-[-2]" />

      {/* 🔛 Foreground Content */}
      <div className="relative h-screen w-screen text-white overflow-hidden z-10">
        <main className="flex items-center justify-between px-6 md:px-16 h-full w-full">
          {/* Left Text Content */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            animate={hideContent ? { opacity: 0, x: -50 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Hi, I'm Manoj
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              A full-stack developer exploring the intersection of design, code, and AI.
            </motion.p>

            <motion.div
              className="mt-10 flex gap-6 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
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
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="hidden md:block absolute right-8 z-10"
            animate={hideContent ? { opacity: 0, x: 50 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={profileImage}
              alt="Manoj Padmanabha"
              className="w-[650px] h-auto object-contain drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </motion.div>
        </main>
      </div>

      {/* 👇 White Section with Projects */}
      <ProjectsSection />
    </>
  );
}
