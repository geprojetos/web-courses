import React, { FC } from 'react';

import './styles.scss';

const StorybookDefault: FC = ({ children }) => {
  return <section className="story-default">{children}</section>;
};

export default StorybookDefault;
