type Experience = {
  company: string;
  role: string;
  period: string;
  description: string[];
};

const ExperienceCard = ({ company, role, period, description }: Experience) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md dark:shadow-none border dark:border-gray-700 mb-4 transition-all hover:scale-[1.02]">
    <h3 className="font-medium text-sm">{role} – <span className="text-gray-600 dark:text-gray-400">{company}</span></h3>
    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{period}</p>
    <ul className="text-sm text-gray-700 dark:text-gray-200 list-disc list-inside space-y-1">
      {description.map((desc, i) => <li key={i}>{desc}</li>)}
    </ul>
  </div>
);

export default ExperienceCard;