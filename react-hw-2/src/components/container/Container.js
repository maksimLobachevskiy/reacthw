import React from "react";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import styles from "./Container.module.scss";
import ProductList from "../products/ProductList";

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isShown: false,
      text: "",
      btnColor: "",
      modalHeader: "",
      modalBody: "",
      modalClose: false,
    };
  }

  showModal = () => {
    this.setState({
      isShown: true,
      btnColor: "#a54821",
      modalHeader: styles.modalHeader,
      modalBody: styles.modalBody,
      modalClose: true,
    });
  };

  hideModal = () => {
    this.setState({ isShown: false });
  };

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    fetch("./products.json")
      .then((response) => response.json())
      .then((data) => this.setState({ items: data }));
  }

  render() {
    const { items } = this.state;
    return (
      <div className={styles.container}>
        <ProductList items={items} onClick={this.showModal} />
        {this.state.isShown && (
          <Modal
            handleOutsideClick={this.hideModal}
            modalClose={this.state.modalClose}
            modalHeader={this.state.modalHeader}
            modalBody={this.state.modalBody}
            text={"The item has been successfully added to the cart"}
            header={"This Product was Added to cart"}
            show={this.state.show}
            onClick={this.hideModal}
            okBtn={
              <Button
                text="Continue shopping"
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
