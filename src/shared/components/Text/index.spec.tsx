import React from 'react';

import { mount } from 'enzyme';

import Text from './index';

describe('[Component] Text', () => {
  const wrapper = mount(<Text type='h1'>Test</Text>);

  it('should renders component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
