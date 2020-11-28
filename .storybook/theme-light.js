import { create } from '@storybook/theming/create';

const color = {
  bluePrimary: '#21295e',
  goldPrimary: '#c4ad6c',
  whitePrimary: '#fff'
};

export default create({
  base: 'light',

  colorPrimary: color.goldPrimary,
  colorSecondary: color.goldPrimary,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // UI
  appBg: color.whitePrimary,
  appContentBg: color.whitePrimary,
  appBorderColor: color.goldPrimary,
  appBorderRadius: 4,

  // Text colors
  textColor: color.bluePrimary,
  textInverseColor: color.goldPrimary,

  // Toolbar default and active colors
  barTextColor: color.whitePrimary,
  barSelectedColor: color.goldPrimary,
  barBg: color.bluePrimary,

  // Form colors
  inputBg: color.whitePrimary,
  inputBorder: color.goldPrimary,
  inputTextColor: color.bluePrimary,
  inputBorderRadius: 4,

  brandTitle: 'Storybook ISO Portal'
});
