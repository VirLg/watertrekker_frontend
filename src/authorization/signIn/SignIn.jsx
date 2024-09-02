import React from "react";
import botle from "../../images/svg/Botle.svg";
const SignIn = () => {
  return (
    <div>
      <img src={botle} alt="" />
      <h1>Sign In</h1>
      <ul>
        <input type="text" />
        <input type="text" />
      </ul>
      <button className="ml-4  border-2 p-2 m-1 rounded-md">Sign In</button>
    </div>
  );
};

export default SignIn;
