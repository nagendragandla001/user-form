import { useEffect, useRef } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  const clearHandler = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = "Hello from Parent";
    }
    if (headingRef.current) {
      headingRef.current.style.color = "blue";
    }
  }, []);

  return (
    <div style={{ border: "2px solid red", padding: "10px" }}>
      <h2>Parent Component</h2>
      <button onClick={clearHandler}>Clear</button>
      <ChildComponent inputRef={inputRef} headingRef={headingRef} />
    </div>
  );
};
export default ParentComponent;
