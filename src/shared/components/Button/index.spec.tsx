import React from 'react';

import { mount } from 'enzyme';

import Button from './index';

describe('[Component] Button', () => {
  const wrapper = mount(<Button />);

  it('should renders component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});