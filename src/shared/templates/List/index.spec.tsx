import React from 'react';
import { mount } from 'enzyme';

import List from './index';

describe('[Temaplate] List', () => {
  const wrapper = mount(<List content={<></>} />);

  it('should renders component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});