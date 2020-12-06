import React from "react";
import { addDecorator } from "@storybook/react";
import { StorybookCentered } from "../src/shared/components";

import "../src/styles/reset.scss";
import "../src/styles/global.scss";
import "../src/assets/fonts/IconsCourses.css";
import "./style.css";

addDecorator((story) => <StorybookCentered>{story()}</StorybookCentered>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
