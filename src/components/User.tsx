import { useState } from "react";
import UserDetails from "./UserDetails";
import UserRegistration from "./UserRegistration";

const User = () => {
  const [userDetails, setUserDetails] = useState<any>({});

  const onRegisterhandler = (user: any) => {
    setUserDetails(user);
    console.log("App Component - onRegisterhandler", user);
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      <UserRegistration onRegister={onRegisterhandler} />
      <UserDetails user={userDetails} />
    </div>
  );
};

export default User;
