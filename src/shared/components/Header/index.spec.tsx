import React from 'react';

import { mount } from 'enzyme';

import Header from './index';

describe('[Component] Header', () => {
  const wrapper = mount(<Header />);

  it('should renders component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});