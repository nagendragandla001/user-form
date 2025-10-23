import { useState } from "react";
import StopWatch from "./StopWatch";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <h2>Home Component</h2>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Stop" : "Start"}
      </button>
      {isOpen && <StopWatch />}
    </div>
  );
};

export default Home;
