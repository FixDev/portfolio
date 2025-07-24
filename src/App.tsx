import { useEffect, useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import ExperienceCard from "./components/ExperienceCard";
import Footer from "./components/Footer";
import {
  experiences,
  projects,
  techStack,
  education,
  certificates,
  summary,
} from "./data/portfolioData";
import ProjectCard from "./components/ProjectCard";

function App() {
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useState(getSystemTheme());

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 text-2xl bg-transparent px-2 py-1 rounded hover:scale-150 animate-bounce transition-transform cursor-pointer"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
      <Header />
      <Section title="Summary">
        <p className="text-sm leading-relaxed animate-fadeIn delay-100">
          {summary}
        </p>
      </Section>
      <Section title="Work Experience">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} />
          ))}
        </div>
      </Section>
      <Section title="Projects">
        <p className="my-4">
          <b>
            All project is private, I don’t have permission to showcase the
            system fully.
          </b>
        </p>
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </Section>
      <Section title="Tech Stack">
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {techStack.map((skill, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 transition-colors hover:bg-blue-100 hover:text-blue-800 dark:hover:bg-blue-900 dark:hover:text-blue-100"
            >
              <svg
                className="w-4 h-4 text-blue-500 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11l5 3-5 3V7z"
                  clipRule="evenodd"
                />
              </svg>
              {skill}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Education">
        <ul className="text-sm space-y-2">
          {education.map((edu, idx) => (
            <li key={idx}>
              <b>{edu.institution}</b> ({edu.period}) – {edu.major}
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Certificates & Awards">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          {certificates.map((cert, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 rounded-md shadow-sm transition hover:shadow-md"
            >
              <svg
                className="w-5 h-5 text-yellow-500 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
              </svg>
              <span className="text-gray-800 dark:text-gray-200">{cert}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Contact">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-4xl p-2 rounded-full bg-white border cursor-pointer animate-bounce">
         🔝
        </button>
      </Section>
      <Footer />
    </div>
  );
}

export default App;
