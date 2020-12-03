import React from "react";
import { mount } from "enzyme";
import Default from "./index";

describe("[Temaplate] Default", () => {
  const wrapper = mount(<Default content={<></>} />);

  it("should renders component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
