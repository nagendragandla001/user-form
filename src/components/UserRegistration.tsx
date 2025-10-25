import { useCallback, useState } from "react";

interface UserRegistrationProps {
  onRegister: (data: any) => void;
}

const UserRegistration = (props: UserRegistrationProps) => {
  const { onRegister } = props;
  const [user, setUser] = useState({
    userName: "Mahesh",
    email: "mahesh@test.com",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onRegister(user);
  };

  const onUserNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUser((prev) => ({
        ...prev,
        userName: event.target.value,
      }));
    },
    []
  );

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
    <div className="max-w-[400px] w-full mx-auto p-5 border border-gray-300 rounded-2xl shadow-lg">
      <h2 className="text-indigo-500">User Registration Controlled Form</h2>

      <form className="w-full" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.userName}
            onChange={onUserNameChange}
            className="w-full p-2 my-2 box-border border border-gray-300 rounded-md mb-4"
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

// hoisting
