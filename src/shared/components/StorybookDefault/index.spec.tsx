import React from 'react';

import { mount } from 'enzyme';

import StorybookDefault from './index';

describe('[Component] StorybookDefault', () => {
  const wrapper = mount(<StorybookDefault />);

  it('should renders component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});