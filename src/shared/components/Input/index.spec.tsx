import React from 'react';

import { mount } from 'enzyme';

import Input from './index';

describe('[Component] Input', () => {
  const wrapper = mount(<Input />);

  it('should renders component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});