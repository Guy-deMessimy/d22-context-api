import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

const UserProfile = () => {
  // access the context information with useContext hook
  const { status, toggleStatus } = useContext(UserContext);

  return (
    <>
      {/* if status value is true, show "online", otherwise "offline" */}
      <div>User is {status ? "offline" : "online"}</div>

      {/* when clicked, the button will call the method toggleStatus */}
      <button onClick={toggleStatus}>click to change user status </button>
    </>
  );
};

export default UserProfile;