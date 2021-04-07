import React from "react";
import styles from "./Modal.module.scss";

export default class Modal extends React.Component {
  render() {
    return (
      <div>
        <div show={this.props.show} className={styles.modalContent}>
          <div className={this.props.modalHeader}>
            <h2>{this.props.header}</h2>
            {this.props.modalClose && (
              <span className={styles.modalClose} onClick={this.props.onClick}>
                &times;
              </span>
            )}
          </div>
          <div className={this.props.modalBody}>
            <p>{this.props.text}</p>
            {this.props.okBtn}
            {this.props.cancelBtn}
          </div>
        </div>
        <div className={styles.modal} onClick={this.props.onClick} />
      </div>
    );
  }
}
