const Skills = () => {
  return (
    <div>
      <div className="border-b-slate-600  border border-t-0 border-x-0 text-xl font-bold mt-1 p-2">
        SKILLS
      </div>
      <div className="flex justify-around  ">
        <div className="flex flex-col font-medium text-sm p-1">
          <li>Next.js</li>
          <li>React.js</li>
          <li>Material UI</li>
          <li>Git</li>
        </div>
        <div className="flex flex-col font-medium text-sm p-1">
          <li>TailwindCss</li>
          <li>API</li>
          <li>TypeScript</li>
          <li>Agile(Scrum)</li>
        </div>
      </div>
    </div>
  );
};

export default Skills;
