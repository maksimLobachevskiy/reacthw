import React from "react";
import styles from "./Modal.module.scss";
import PropTypes from "prop-types";

export default class Modal extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.modal} onClick={this.props.handleOutsideClick}>
          <div className={styles.modalContent}>
            <div className={this.props.modalHeader}>
              <h2>{this.props.header}</h2>
              {this.props.modalClose && (
                <span
                  className={styles.modalClose}
                  onClick={this.props.onClick}
                >
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
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  header: PropTypes.string,
  handleOutsideClick: PropTypes.func,
  onClick: PropTypes.func,
  modalBody: PropTypes.string,
  okBtn: PropTypes.element,
  cancelBtn: PropTypes.element,
};
