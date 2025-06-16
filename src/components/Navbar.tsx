import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-8 py-4 bg-black text-white">
      {/* Left: Logo */}
      <div>
        <span className="text-2xl font-bold tracking-tight">Manoj Padmanabha</span>
      </div>

      {/* Right: Navigation Buttons */}
      <nav className="flex items-center gap-6 text-lg font-medium">
        <Link to="/projects" className="text-white hover:text-gray-400 transition">Work</Link>
        <Link to="/insights" className="text-white hover:text-gray-400 transition">About</Link>
        <Link
          to="/contact"
          className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:scale-105 transition"
        >
          Reach Out
        </Link>
      </nav>
    </header>
  );
}
