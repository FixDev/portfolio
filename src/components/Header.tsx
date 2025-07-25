const Header = () => (
  <header className="mb-6 text-center animate-fadeInUp">
    <h1 className="text-3xl font-extrabold tracking-tight">Muhammad Fikri</h1>
    <p className="text-sm text-gray-600 dark:text-gray-300">
      Software Engineer | Fullstack Developer
    </p>
    <div className="text-sm text-blue-600 dark:text-blue-400 mt-2 space-x-2">
      <a href="mailto:fikri.muha28@gmail.com" className="underline">
        Email
      </a>
      <a
        href="https://www.linkedin.com/in/fikrimuha1"
        target="_blank"
        className="underline"
      >
        LinkedIn
      </a>
    </div>
  </header>
);

export default Header;
