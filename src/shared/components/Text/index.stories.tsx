import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Text, { TextProps } from './index';

export default {
  title: 'Shared Component/Text',
  component: Text
} as Meta;

const Template: Story<TextProps> = args => <Text {...args} />;

export const Primary = Template.bind({});