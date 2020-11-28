import { create } from "@storybook/theming/create";

const color = {
  bluePrimary: "#21295e",
  greenPrimary: "#04d361",
  purplePrimary: "#8257e5",
  whitePrimary: "#fff",
  grayPrimary: "#e0e0e0",
};

export default create({
  base: "dark",

  colorPrimary: color.bluePrimary,
  colorSecondary: color.greenPrimary,

  // // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // // UI
  appBg: color.bluePrimary,
  appContentBg: color.whitePrimary,
  appBorderColor: color.bluePrimary,
  appBorderRadius: 4,

  // // Text colors
  textColor: color.grayPrimary,
  textInverseColor: color.purplePrimary,

  // // Toolbar default and active colors
  barTextColor: color.whitePrimary,
  barSelectedColor: color.bluePrimary,
  barBg: color.purplePrimary,

  // // Form colors
  inputBg: color.whitePrimary,
  inputBorder: color.bluePrimary,
  inputTextColor: color.bluePrimary,
  inputBorderRadius: 5,

  brandTitle: "Storybook ISO Portal",
});
