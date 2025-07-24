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
  contact,
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
    <div className="max-w-4xl mx-auto px-4 py-6">
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
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} {...exp} />
        ))}
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
            <li key={idx} className="hover:text-blue-600 transition-colors">
              • {skill}
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
        <ul className="text-sm list-disc list-inside">
          {certificates.map((cert, idx) => (
            <li key={idx}>{cert}</li>
          ))}
        </ul>
      </Section>
      <Section title="Contact">
        <p className="text-sm">{contact}</p>
      </Section>
      <Footer />
    </div>
  );
}

export default App;
