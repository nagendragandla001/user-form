import { useState } from "react";
import StopWatch from "./StopWatch";
import ParentComponent from "./ParentComponent";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <ParentComponent />
      {/* <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Stop" : "Start"}
      </button> */}
      {/* {isOpen && <StopWatch />} */}
    </div>
  );
};

export default Home;
