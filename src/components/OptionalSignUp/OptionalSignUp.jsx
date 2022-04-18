import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import google from "../../images/google.png";

const OptionalSignUp = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const googleLoginHandler = (e) => {
    e.preventDefault();
    signInWithGoogle();
  };
  return (
    <div className="text-center">
      <div className="d-flex justify-content-around align-items-center">
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
        <p className="mt-2 px-3">or</p>
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
      </div>
      <div>
        <button onClick={googleLoginHandler} className="btn">
          <img width="40px" src={google} alt="" />
        </button>
      </div>
    </div>
  );
};

export default OptionalSignUp;
