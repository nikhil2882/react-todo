import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import LoginCard from "./loginCard";
import OtpCard from "./otpCard";

import { requestOtp, submitOTP } from "../../api/auth";

import styles from "./style.module.css";

export default function LoginPage(props) {
  // if otp requested then show otp screen
  // else show enter mobile number screen
  const [isOtpRequested, setIsOtpRequested] = useState(false);

  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function onTextChange(event) {
    setMobileNumber(event.target.value);
  }

  async function onSubmit() {
    setIsLoading(true);

    try {
      await requestOtp();

      setIsOtpRequested(true);
      setIsLoading(false);
    } catch (err) {
      alert("something very wrong happened");
      setIsLoading(false);
    }
  }

  async function onOTPSubmit() {
    try {
      await submitOTP();
      localStorage.setItem("token", "fakeToken");
      props.setAuth();
    } catch (err) {}
  }

  return (
    <div className={styles.container}>
      {isOtpRequested ? (
        <OtpCard onOTPSubmit={onOTPSubmit} />
      ) : (
        <LoginCard
          mobileNumber={mobileNumber}
          onChange={onTextChange}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}
