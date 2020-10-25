import React, { FC, ReactChild } from 'react';

import './styles.scss';

export interface DefaultProps {
  content: ReactChild;
}

const Default: FC<DefaultProps> = ({ content }) => {
  return (
    <section>
      <p>header</p>
      <section className="template-default">{content}</section>
      <p>footer</p>
    </section>
  );
};

export default Default;
