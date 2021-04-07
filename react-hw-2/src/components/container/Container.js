import React from "react";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import styles from "./Container.module.scss";

export default class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      isShown: false,
      header: "",
      text: "",
      btnColor: "",
      modalHeader: "",
      modalBody: "",
      modalClose: false,
    };
  }

  showModal1 = () => {
    this.setState({
      isShown: true,
      header: "Do you want to delete this file?",
      text:
        "Once you delete this file, it won't be possible to undo this action. Are you sure you want to delete it?",
      btnColor: "#a54821",
      modalHeader: styles.modalHeader,
      modalBody: styles.modalBody,
      modalClose: true,
    });
  };

  showModal2 = () => {
    this.setState({
      isShown: true,
      header: "Congratualtions, your file is restored",
      text: "Once you restore this file, you will be able to use it in future",
      btnColor: "#33691e",
      modalHeader: styles.modalHeader2,
      modalBody: styles.modalBody2,
    });
  };

  hideModal = () => {
    this.setState({ isShown: false });
  };

  render() {
    return (
      <div className={styles.container}>
        <Button color="red" text="Open first modal" onClick={this.showModal1} />
        <Button
          color="green"
          text="Open second modal"
          onClick={this.showModal2}
        />
        {this.state.isShown && (
          <Modal
            modalClose={this.state.modalClose}
            modalHeader={this.state.modalHeader}
            modalBody={this.state.modalBody}
            text={this.state.text}
            header={this.state.header}
            show={this.state.show}
            onClick={this.hideModal}
            okBtn={<Button text="Ok" color={this.state.btnColor} />}
            cancelBtn={
              <Button
                text="Cancel"
                color={this.state.btnColor}
                onClick={this.hideModal}
              />
            }
          />
        )}
      </div>
    );
  }
}
