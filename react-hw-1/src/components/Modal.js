import React from "react";
import Button from "./Button";
import styles from "./Modal.module.scss";

export default class Modal extends React.Component {
  render() {
    if (this.props.show === false) return null;
    return (
      <div>
        <div show={this.props.show} className={styles.modalContent}>
          <div className={this.props.modalHeader}>
            <h2>{this.props.header}</h2>
            <span className={styles.modalClose} onClick={this.props.onClick}>
              &times;
            </span>
          </div>
          <div className={this.props.modalBody}>
            <p>{this.props.text}</p>
            <Button text="Ok" color={this.props.btnColor} />
            <Button
              text="Cancel"
              color={this.props.btnColor}
              onClick={this.props.onClick}
            />
          </div>
        </div>
        <div className={styles.modal} onClick={this.props.onClick} />
      </div>
    );
  }
}
