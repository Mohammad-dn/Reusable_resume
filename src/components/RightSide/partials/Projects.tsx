const Projects = () => {
  return (
    <div>
      <div className="border-b-slate-600  border border-t-0 border-x-0 text-xl font-bold">
        PROJECTS
      </div>
      <div>
        <div
          onClick={() => window.open("https://inja.app/")}
          className="cursor-pointer flex text-base p-2"
        >
          Inja.homes
          <div>
            <img width={26} src="/public/inja.png" alt="" />
          </div>
          : this is a project in
        </div>
      </div>
    </div>
  );
};

export default Projects;
