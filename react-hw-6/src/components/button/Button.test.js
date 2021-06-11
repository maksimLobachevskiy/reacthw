import { shallow } from "enzyme";
import * as React from "react";
import Button from "./Button";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Button Component", () => {
  it("Should render correctly in DOM", () => {
    const btn = shallow(<Button />);
    expect(btn).toMatchSnapshot();
  });
  it("Expects to find button HTML element in DOM", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toHaveLength(1);
  });

  it("Expects to run onClick function when button is pressed in the DOM", () => {
    const mockCallBackClick = jest.fn();
    const wrapper = shallow(
      <Button onClick={mockCallBackClick} className='modalBtn' />
    );
    wrapper.find("button").simulate("click");
    expect(mockCallBackClick.mock.calls.length).toEqual(1);
  });
});
