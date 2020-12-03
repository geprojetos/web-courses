import React from "react";

import { mount } from "enzyme";

import Home from "./index";

describe("[Page] Home", () => {
  const wrapper = mount(<Home />);

  it("should renders component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
