import React from "react";

import { mount } from "enzyme";

import StorybookCentered from "./index";

describe("[Component] StorybookCentered", () => {
  const wrapper = mount(<StorybookCentered />);

  it("should renders component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
