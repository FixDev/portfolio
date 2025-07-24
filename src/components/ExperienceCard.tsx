type Experience = {
  company: string;
  role: string;
  period: string;
  description: string[];
  techStack: string[];
};

const ExperienceCard = ({
  company,
  role,
  period,
  description,
  techStack,
}: Experience) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md dark:shadow-none border dark:border-gray-700 transition-all hover:scale-[1.02] space-y-2">
    <h3 className="font-medium text-sm">
      {role} –{" "}
      <span className="text-gray-600 dark:text-gray-400">{company}</span>
    </h3>
    <p className="text-xs text-gray-500 dark:text-gray-400">{period}</p>
    <ul className="text-sm text-gray-700 dark:text-gray-200 list-disc list-inside space-y-1">
      {description.map((desc, i) => (
        <li key={i}>{desc}</li>
      ))}
    </ul>

    {techStack && techStack.length > 0 && (
      <div className="flex flex-wrap gap-2 pt-2">
        {techStack.map((tech, i) => (
          <span
            key={i}
            className="text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-2 py-0.5 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    )}
  </div>
);

export default ExperienceCard;