import React from 'react';
import { mount } from 'enzyme';

import AddCategories from './index';

describe('[Page] AddCategories', () => {
  const wrapper = mount(<AddCategories />);

  it('should renders component', () => {
    expect(wrapper.exists());
  });
});
