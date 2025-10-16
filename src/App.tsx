import { useState } from "react";
import "./App.css";
import UserDetails from "./components/UserDetails";
import UserRegistration from "./components/UserRegistration";

function App() {
  const [userDetails, setUserDetails] = useState<any>({});

  const onRegisterhandler = (user: any) => {
    setUserDetails(user);
    console.log("App Component - onRegisterhandler", user);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          border: "1px solid red",
          justifyContent: "center",
        }}
      >
        <h2>Parent</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <UserRegistration onRegister={onRegisterhandler} />
          <UserDetails user={userDetails} />
        </div>
      </div>
    </>
  );
}

export default App;
