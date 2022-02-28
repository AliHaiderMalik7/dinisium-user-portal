import React, { useState } from "react";
import { useSelector } from "react-redux";
import verificationImg from "../../../../App/Assets/images/verification.png";
import { toast } from "react-toastify";
import { connect } from "react-redux";
// import {verifyGoogleAuthCode} from "../../../../Redux/actions/actions";
const GoogleVerificationForm = ({
  setVerificationPage,
  handleVerifyGoogleCode,
}) => {
  const [verificationCode, setVerificationCode] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = useSelector((state) => state.auth);
  const onChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!verificationCode) {
      toast.warning("please enter a verification code");
      return;
    }
    // setVerificationPage({
    //   emailPage: false,
    //   smsPage: false,
    //   googlePage: false,
    // });
    handleVerifyGoogleCode(verificationCode, setLoading);
  };
  return (
    <form className="form" onSubmit={onSubmit}>
      <h3 className="h3">2-Step Verification</h3>
      <p>
        {" "}
        <img
          src={verificationImg}
          style={{ width: "25px", height: "25px" }}
          alt="..."
        />{" "}
        Enter the Verification code Generated by Google auhtentication
      </p>
      <div className="form-group">
        <label>Enter Code</label>

        <input
          type="text"
          placeholder="Enter Code"
          className="form-control"
          name="verificationCode"
          value={verificationCode}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <button
        style={{ marginBottom: "20px" }}
        type="submit"
        className="btn btn-outline-primary"
        disabled={loading}
      >
        {loading && <span className="spinner-border spinner-border-sm"></span>}{" "}
        VERIFY
      </button>

      <div className="alert alert-info" role="alert">
        If you have lost google authentication app, please contact with our
        support. So that you can login to your dashboard.
      </div>
    </form>
  );
};

export default GoogleVerificationForm;
