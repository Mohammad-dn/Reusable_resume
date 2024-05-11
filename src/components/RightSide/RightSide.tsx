import Education from "./partials/Education";
// import Projects from "./partials/Projects";
import Skills from "./partials/Skills";
import Summery from "./partials/Summery";
import WorkExperiences from "./partials/WorkExperiences";

const RightSide = () => {
  return (
    <div className="w-2/3 h-fit my-auto ">
      <Summery />
      <Skills />
      {/* <Projects /> */}
      <WorkExperiences />
      <Education />
    </div>
  );
};

export default RightSide;
