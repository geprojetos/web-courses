import React, { FC } from 'react';

import './styles.scss';

const StorybookCentered: FC = ({ children }) => {
  return <section className="story-center">{children}</section>;
};

export default StorybookCentered;
