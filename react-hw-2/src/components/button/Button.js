import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  modalBtn: {
    margin: 16,
    backgroundColor: (props) => props.color,
    padding: 15,
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: 16,
    width: 200,
    borderRadius: 5,
  },
});

const Button = (props) => {
  const classes = useStyles(props);

  return (
    <button type="button" className={classes.modalBtn} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
