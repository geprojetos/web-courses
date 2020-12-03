import React from "react";

import { mount } from "enzyme";

import Button from "./index";

describe("[Component] Button", () => {
  const wrapper = mount(<Button size="large" type="default" />);

  it("should renders component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
