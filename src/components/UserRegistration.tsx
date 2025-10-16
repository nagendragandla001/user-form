import { useState } from "react";

interface UserRegistrationProps {
  onRegister: (data: any) => void;
}

const UserRegistration = (props: UserRegistrationProps) => {
  const { onRegister } = props;
  const [user, setUser] = useState({
    userName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onRegister(user);
  };

  const onUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({
      ...prev,
      userName: event.target.value,
    }));
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({
      ...prev,
      email: event.target.value,
    }));
  };

  const onMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUser((prev) => ({
      ...prev,
      message: event.target.value,
    }));
  };

  const clearForm = () => {
    setUser({
      userName: "",
      email: "",
      message: "",
    });
    onRegister({
      userName: "",
      email: "",
      message: "",
    });
  };

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
            value={user.userName}
            onChange={onUserNameChange}
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
            value={user.email}
            onChange={onEmailChange}
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
            value={user.message}
            onChange={onMessageChange}
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
            onClick={clearForm}
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

export default UserRegistration;
