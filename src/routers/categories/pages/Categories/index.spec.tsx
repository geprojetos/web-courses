import React from 'react';
import { mount } from 'enzyme';

import Categories from './index';

describe('[Page] Categories', () => {
  const wrapper = mount(<Categories />);

  it('should renders component', () => {
    expect(wrapper.exists());
  });
});
