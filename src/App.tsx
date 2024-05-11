import LeftSide from "./components/LeftSide/LeftSide";
import RightSide from "./components/RightSide/RightSide";

function App() {
  return (
    <div
      style={{
        height: "886px",
        width: "617px",
      }}
      className="flex justify-between items-center mx-auto "
    >
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default App;
