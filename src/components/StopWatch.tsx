import { useEffect, useState } from "react";

const StopWatch = () => {
  const [milliSeconds, setMilliSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [init, setInit] = useState(false);

  useEffect(() => {
    console.log("StopWatch Mounted");
    // ComponentDidMount equivalent
    setInit(true);
  }, []);

  // ComponentDidUpdate equivalent
  useEffect(() => {
    if (milliSeconds >= 1000) {
      setSeconds((prev) => prev + 1);
      setMilliSeconds(0);
    }
  }, [milliSeconds]);

  // ComponentWillUnmount equivalent
  useEffect(() => {
    const timer = setInterval(() => {
      setMilliSeconds((prev) => prev + 100);
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h2>
        Stop Watch Component {seconds} : {milliSeconds}
      </h2>
      <div>{init ? "Initialized" : "Not Initialized"}</div>
    </div>
  );
};

export default StopWatch;
