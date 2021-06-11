import React from "react";
import "./Modal.scss";
import PropTypes from "prop-types";

const Modal = (props) => {
  const { onClick, header, text, actions } = props;
  const handleCloseClick = (e) => {
    if (
      e.target.getAttribute("class") === "modal" ||
      e.target.getAttribute("class") === "modalContent__modalClose"
    ) {
      onClick();
    }
  };
  return (
    <div data-testid='modal' className='modal' onClick={handleCloseClick}>
      <div className='modalContent'>
        <div className='modalContent__modalHeader'>
          <h2>{header}</h2>
          <span data-testid='modalClose' className='modalContent__modalClose'>
            &times;
          </span>
        </div>
        <div className='modalContent__modalBody'>
          <p className='modalContent__confirmText'>{text}</p>
          {actions}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  header: PropTypes.string,
  handleOutsideClick: PropTypes.func,
  onClick: PropTypes.func,
  modalBody: PropTypes.string,
  okBtn: PropTypes.element,
  cancelBtn: PropTypes.element
};

export default Modal;
