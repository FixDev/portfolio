type Props = {
  title: string;
  children: React.ReactNode;
};

const Section = ({ title, children }: Props) => (
  <section className="mb-6 animate-fadeIn">
    <h2 className="text-lg font-semibold mb-2 border-b pb-1 border-gray-300 dark:border-gray-600">{title}</h2>
    {children}
  </section>
);

export default Section;