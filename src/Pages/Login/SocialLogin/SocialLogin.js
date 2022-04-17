import React from "react";
import google from "../../../images/social/google logo.png";
import facebook from "../../../images/social/facebook-logo.png";
import github from "../../../images/social/GitHub_logo.png";

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 mx-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      <button className="btn btn-info d-block w-50 mx-auto my-2">
        <img style={{ width: "30px" }} src={google} alt="" />
        <span className="px-3">Google Sign In</span>
      </button>
      <button className="btn btn-info d-block w-50 mx-auto my-2">
        <img style={{ width: "30px" }} src={facebook} alt="" />
        <span className="px-3">Facebook Sign In</span>
      </button>
      <button className="btn btn-info d-block w-50 mx-auto">
        <img style={{ width: "30px" }} src={github} alt="" />
        <span className="px-3">Github Sign In</span>
      </button>
    </div>
  );
};

export default SocialLogin;
