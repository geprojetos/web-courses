import React from 'react';

import { mount } from 'enzyme';

import Select from './index';

describe('[Component] Select', () => {
  const wrapper = mount(<Select />);

  it('should renders component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});