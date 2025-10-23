import { useEffect, useRef, useState } from "react";

interface UserRegistrationProps {
  onRegister: (data: any) => void;
}

const UserRegistrationUnControlled = (props: UserRegistrationProps) => {
  const { onRegister } = props;

  const userRef = useRef<HTMLFormElement>({
    username: null,
    email: null,
    message: null,
  } as any);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("userRef.current:", userRef);
  };

  useEffect(() => {
    console.log("UserRegistrationUnControlled Mounted", userRef.current);
  }, []);

  return (
    <div
      style={{
        maxWidth: "400px",
        width: "100%",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
        minHeight: "50vh",
        height: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>User Registration Form</h2>

      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            ref={userRef.current?.username}
            style={{
              width: "100%",
              padding: "8px",
              margin: "8px 0",
              boxSizing: "border-box",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginBottom: "16px",
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            ref={userRef.current?.email}
            style={{
              width: "100%",
              padding: "8px",
              margin: "8px 0",
              boxSizing: "border-box",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginBottom: "16px",
            }}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            ref={userRef.current?.message}
            rows={4}
            style={{
              width: "100%",
              padding: "8px",
              margin: "8px 0",
              boxSizing: "border-box",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginBottom: "16px",
            }}
          />
        </div>

        <div
          style={{
            marginBottom: "16px",
            display: "flex",
            gap: "10px",
            justifyContent: "end",
          }}
        >
          <button
            type="button"
            // onClick={clearForm}
            style={{
              padding: "10px",
              cursor: "pointer",
              backgroundColor: "#ffffff",
              border: "1px solid #ccc",
              borderRadius: "4px",
              height: "40px",
            }}
          >
            Clear
          </button>
          <button
            type="submit"
            style={{
              padding: "10px",
              height: "40px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserRegistrationUnControlled;
