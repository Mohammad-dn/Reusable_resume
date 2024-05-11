const WorkExperiences = () => {
  return (
    <div>
      <div className="border-b-slate-600  border border-t-0 border-x-0 text-xl font-bold p-2">
        Work Experiences
      </div>
      <div>
        <div
          onClick={() => window.open("https://inja.homes/")}
          className="cursor-pointer flex text-base p-2"
        >
          Inja.homes
          <div>
            <img width={24} src="/public/inja.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col font-normal text-xs pl-2 gap-1 text-start">
          <li className="p-0 ">
            <span className="font-semibold">Developed</span> and{" "}
            <span className="font-semibold"> implemented </span>
            essential features for the{" "}
            <span className="font-semibold text-orange-500">
              Inja.homes
            </span>{" "}
            residential agency platform, ensuring seamless user experience and
            functionality
          </li>
          <li className="p-0">
            Conducted thorough code reviews of the entire front-end codebase to
            maintain high-quality standards and ensure adherence to best
            practices.
          </li>
          <li className="p-0">
            Collaborated with the team to identify and address technical
            challenges, contributing to the overall success of the project.
          </li>
          <li className="p-0">
            Played a key role in optimizing the performance and scalability of
            the application, resulting in improved user satisfaction and
            engagement.
          </li>
        </div>
      </div>
      <hr />
      <div className="pt-2 px-1">
        <div className="text-sm font-bold">bio-code:</div>
        <div className="text-xs">
          As a front-end programmer in the biocode team, I interacted with
          foreign and Iranian customers and provided services such as online
          exchange, which was a platform with many challenges.
        </div>
      </div>
    </div>
  );
};

export default WorkExperiences;
