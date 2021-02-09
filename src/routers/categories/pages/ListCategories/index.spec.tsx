import React from 'react';
import { mount } from 'enzyme';

import ListCategories from './index';

describe('[Page] Categories', () => {
  const wrapper = mount(<ListCategories />);

  it('should renders component', () => {
    expect(wrapper.exists());
  });
});
