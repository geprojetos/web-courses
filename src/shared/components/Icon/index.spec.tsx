import React from 'react';

import { mount } from 'enzyme';

import Icon from './index';

describe('[Component] Icon', () => {
  const wrapper = mount(<Icon />);

  it('should renders component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});