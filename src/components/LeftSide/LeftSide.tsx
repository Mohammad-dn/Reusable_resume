import Contact from "./Contact";
import Hobbies from "./Hobbies";
import Intruduce from "./Intruduce";
import Languages from "./Languages";
import PesonalPic from "./PesonalPic";

const LeftSide = () => {
  return (
    <div className="w-5/12 bg-slate-300 h-fit flex flex-col ">
      <PesonalPic />
      <Intruduce />
      <Contact />
      <Languages />
      <Hobbies />
    </div>
  );
};

export default LeftSide;
