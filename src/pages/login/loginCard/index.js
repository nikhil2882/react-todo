import React from "react";

import Heading from "../../../components/typography/heading";
import Input from "../../../components/input";
import Button from "../../../components/button";

import AddIcon from "@mui/icons-material/Add";
import Progress from "@mui/material/CircularProgress";

import styles from "./style.module.css";

export default function LoginCard(props) {
  const { mobileNumber, onChange, onSubmit, isLoading } = props;

  return (
    <div className={styles.container}>
      <Heading>Enter Mobile number</Heading>
      <Input
        value={mobileNumber}
        onChange={onChange}
        placeholder="Enter mobile number"
        type="number"
      />
      <Button onClick={onSubmit} variant="filled">
        {isLoading ? (
          <Progress size={25} />
        ) : (
          <>
            <AddIcon />
            Login
          </>
        )}
      </Button>
    </div>
  );
}
