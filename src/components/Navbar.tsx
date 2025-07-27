

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-8 py-4 bg-black text-white">
      {/* Left: Logo */}
<a href="#hero" className="text-2xl font-bold tracking-tight text-white hover:text-gray-400 transition">
  Manoj Padmanabha
</a>


      {/* Right: Navigation Buttons */}
      <nav className="flex items-center gap-6 text-lg font-medium">
      <a href="#projects" className="text-white hover:text-gray-400 transition">Projects</a>
      <a href="#about" className="text-white hover:text-gray-400 transition">About</a>
      <a href="#skills" className="text-white hover:text-gray-400 transition">Skills</a>

    <a href="#contact" className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:scale-105 transition">Contact</a>
      </nav>
    </header>
  );
}
