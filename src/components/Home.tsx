import { useState } from "react";
import StopWatch from "./StopWatch";
import ParentComponent from "./ParentComponent";
import Calculator from "./Calculator";
import CalculatorReducer from "./CalculatorReducer";

const Home = () => {
  // const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      {/* <ParentComponent /> */}
      {/* <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Stop" : "Start"}
      </button> */}
      {/* {isOpen && <StopWatch />} */}

      <CalculatorReducer />
    </div>
  );
};

export default Home;
