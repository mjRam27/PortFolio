// src/components/ContactSection.tsx
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 text-center">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-gray-400 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I'd love to connect with you! Reach out via the form or social links below.
      </motion.p>

      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 bg-gray-800 rounded text-white outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 bg-gray-800 rounded text-white outline-none"
        />
        <textarea
          rows={5}
          placeholder="Your Message"
          className="w-full px-4 py-2 bg-gray-800 rounded text-white outline-none"
        ></textarea>
        <button
          type="submit"
          className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 flex justify-center gap-6 text-white text-xl">
        <a href="mailto:you@example.com">📧</a>
        <a href="https://github.com/your-profile" target="_blank">🐙</a>
        <a href="https://linkedin.com/in/your-profile" target="_blank">💼</a>
      </div>
    </div>
  );
}
