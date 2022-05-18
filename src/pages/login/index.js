import React, { useState } from "react";

import LoginCard from "./loginCard";
import OtpCard from "./otpCard";

import styles from "./style.module.css";

export default function LoginPage() {
  // if otp requested then show otp screen
  // else show enter mobile number screen

  const [isOtpRequested, setIsOtpRequested] = useState(false);

  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onTextChange(event) {
    setMobileNumber(event.target.value);
  }

  function onSubmit() {
    //setIsOtpRequested(true);
    setIsLoading(true);
  }

  return (
    <div className={styles.container}>
      {isOtpRequested ? (
        <OtpCard />
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
