import React from "react";
import Button from "./Button";
import Modal from "./Modal";
import styles from "./Container.module.scss";

export default class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      header: "",
      text: "",
      btnColor: "",
      modalHeader: "",
      modalBody: ""
    };
  }

  showModal1 = () => {
    this.setState({
      show: true,
      header: 'Do you want to delete this file?',
      text: "Once you delete this file, it won't be possible to undo this action. Are you sure you want to delete it?",
      btnColor: "#a54821",
      modalHeader: styles.modalHeader,
      modalBody: styles.modalBody
    });
  };

  showModal2 = () => {
    this.setState({
      show: true,
      header: 'Congratualtions, your file is restored',
      text: "Once you restore this file, you will be able to use it in future",
      btnColor: "#33691e",
      modalHeader: styles.modalHeader2,
      modalBody: styles.modalBody2
    });
  };


  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className={styles.container}>
        <Button color="red" text="Open first modal" onClick={this.showModal1} />
        <Button color="green" text="Open second modal" onClick={this.showModal2} />
        <Modal
          modalHeader={this.state.modalHeader}
          modalBody={this.state.modalBody}
          text={this.state.text}
          header={this.state.header}
          btnColor={this.state.btnColor}
          show={this.state.show}
          onClick={this.hideModal}
        />
      </div>
    );
  }
}
