const ChildComponent = ({
  inputRef,
  headingRef,
}: {
  inputRef: React.RefObject<HTMLInputElement | null>;
  headingRef: React.RefObject<HTMLHeadingElement | null>;
}) => {
  return (
    <div style={{ border: "2px solid green", padding: "10px" }}>
      <h3 ref={headingRef}>Child Component</h3>

      <input type="text" placeholder="Type something..." ref={inputRef} />
    </div>
  );
};

export default ChildComponent;
