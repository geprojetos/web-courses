import React from 'react';

import { mount } from 'enzyme';

import ChangeLanguage from './index';

describe('[Component] ChangeLanguage', () => {
  const wrapper = mount(<ChangeLanguage />);

  it('should renders component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});