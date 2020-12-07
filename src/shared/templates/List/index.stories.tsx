import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import List, { ListProps } from './index';

export default {
  title: 'Template Component/List',
  component: List
} as Meta;

const Template: Story<ListProps> = args => <List {...args} />;

export const Primary = Template.bind({});