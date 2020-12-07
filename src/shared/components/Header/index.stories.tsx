import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Header, { HeaderProps } from './index';

export default {
  title: 'Shared Component/Header',
  component: Header
} as Meta;

const Template: Story<HeaderProps> = args => <Header {...args} />;

export const Primary = Template.bind({});