import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Text, { TextProps } from "./index";
import { ColorsEnum } from "../../../assets/enum";

export default {
  title: "Shared Component/Text",
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => (
  <Text {...args}>Component Typografy</Text>
);

export const H1 = Template.bind({});
H1.args = {
  type: "h1",
  color: ColorsEnum.PURPLE1,
};

export const H2 = Template.bind({});
H2.args = {
  type: "h2",
  color: ColorsEnum.PURPLE1,
};

export const H3 = Template.bind({});
H3.args = {
  type: "h3",
  color: ColorsEnum.PURPLE1,
};

export const H4 = Template.bind({});
H4.args = {
  type: "h4",
  color: ColorsEnum.PURPLE1,
};

export const H5 = Template.bind({});
H5.args = {
  type: "h5",
  color: ColorsEnum.PURPLE1,
};

export const H6 = Template.bind({});
H6.args = {
  type: "h6",
  color: ColorsEnum.PURPLE1,
};

export const P = Template.bind({});
P.args = {
  type: "p",
  color: ColorsEnum.PURPLE1,
};

export const Label = Template.bind({});
Label.args = {
  type: "label",
  color: ColorsEnum.PURPLE1,
};
