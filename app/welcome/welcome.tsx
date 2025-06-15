import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-10 min-h-0">
        {/* Logo */}
        <header className="flex flex-col items-center gap-6">
          <div className="w-[300px] max-w-[90vw] p-4">
            <img
              src={logoLight}
              alt="Portfolio Logo"
              className="block w-full dark:hidden"
            />
            <img
              src={logoDark}
              alt="Portfolio Logo"
              className="hidden w-full dark:block"
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-600">Hi, I'm Manoj 👋</h1>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
              A passionate full-stack developer who builds modern web apps using React, Tailwind, and cloud technologies. 
              Welcome to my portfolio 🚀
            </p>
          </div>
        </header>

        {/* Quick Navigation (optional) */}
        <div className="w-full max-w-md px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="text-center text-gray-700 dark:text-gray-300 font-medium">Explore Sections</p>
            <ul className="flex flex-col gap-3 text-blue-600 dark:text-blue-400">
              <li><a href="/projects" className="hover:underline">🧠 Projects</a></li>
              <li><a href="/hobbies" className="hover:underline">🎯 Hobbies</a></li>
              <li><a href="/insights" className="hover:underline">📓 Insights</a></li>
              <li><a href="/contact" className="hover:underline">📬 Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
