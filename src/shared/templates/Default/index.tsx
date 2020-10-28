import React, { FC, ReactChild } from "react";

import "./styles.scss";

export interface DefaultProps {
  content: ReactChild;
}

const Default: FC<DefaultProps> = ({ content }) => {
  return (
    <section>
      <section className="template-default">{content}</section>
    </section>
  );
};

export default Default;
