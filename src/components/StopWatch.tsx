import { useEffect, useState } from "react";

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [milliSeconds, setMilliSeconds] = useState(0);

  console.log("StopWatch Rendered");

  useEffect(() => {
    const timer = setInterval(() => {
      if (milliSeconds >= 60000) {
        setMilliSeconds(0);
      }
      setMilliSeconds((prev) => prev + 100);
    }, 100);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(timer);
    };
  }, [milliSeconds]);

  useEffect(() => {
    setSeconds(Math.floor(milliSeconds / 1000));
  }, [milliSeconds]);

  return (
    <div>
      <h2>Stop Watch</h2>
      <p>
        Your time starts {seconds} : {milliSeconds}
      </p>
    </div>
  );
};

export default StopWatch;
