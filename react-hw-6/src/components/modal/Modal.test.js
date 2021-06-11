import { shallow } from "enzyme";
import * as React from "react";
import Modal from "./Modal";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render, fireEvent } from "@testing-library/react";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Modal.js", () => {
  it("renders Modal component given the props", () => {
    const closeFn = jest.fn();
    const container = shallow(<Modal onClick={closeFn} />);
    const overlay = container.find(".modal");
    expect(overlay).toHaveLength(1);
  });

  it("Renders simple Modal snapshot", () => {
    const { container } = render(<Modal />);
    expect(container.innerHTML).toMatchInlineSnapshot(
      `"<div data-testid=\\"modal\\" class=\\"modal\\"><div class=\\"modalContent\\"><div class=\\"modalContent__modalHeader\\"><h2></h2><span data-testid=\\"modalClose\\" class=\\"modalContent__modalClose\\">×</span></div><div class=\\"modalContent__modalBody\\"><p class=\\"modalContent__confirmText\\"></p></div></div></div>"`
    );
  });

  it("Have onClick on close button or overlay", () => {
    const modalClickMock = jest.fn();
    const { getByTestId } = render(<Modal onClick={modalClickMock} />);
    const modalOverlay = getByTestId("modal");
    const closeBtn = getByTestId("modalClose");
    expect(modalClickMock).not.toHaveBeenCalled();
    fireEvent.click(modalOverlay || closeBtn);
    expect(modalClickMock).toHaveBeenCalledTimes(1);
  });
});
