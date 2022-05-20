import React from "react";

import Heading from "../../../components/typography/heading";
import Input from "../../../components/input";
import Button from "../../../components/button";

import AddIcon from "@mui/icons-material/Add";

import styles from "./style.module.css";

export default function LoginCard(props) {
  return (
    <div className={styles.container}>
      <Heading>Enter OTP</Heading>
      <Input placeholder="Enter OTP number" type="number" />
      <Button variant="outlined" onClick={props.onOTPSubmit}>
        <AddIcon />
        Submit
      </Button>
    </div>
  );
}
