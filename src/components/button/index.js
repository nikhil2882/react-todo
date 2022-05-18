import React from "react";

import styles from "./style.module.css";

export default function Button(props) {
  let type = props.variant ? styles[props.variant] : styles.plain;

  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={`${styles.button} ${type}`}
    >
      {props.children}
    </button>
  );
}
