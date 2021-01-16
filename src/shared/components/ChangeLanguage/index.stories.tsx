import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import ChangeLanguage from "./index";

export default {
  title: "Shared Component/ChangeLanguage",
  component: ChangeLanguage,
} as Meta;

const Template: Story = (args) => <ChangeLanguage {...args} />;

export const Primary = Template.bind({});
