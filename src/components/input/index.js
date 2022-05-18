import React from "react";
import PropTypes from "prop-types";

export default function Input(props) {
  if (!props.placeholder) {
    throw new Error("Please pass placeholder");
  }

  return (
    <input
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      type={props.type}
    />
  );
}

Input.defaultProps = {
  type: "number",
};

Input.propType = {
  type: PropTypes.string,
};
