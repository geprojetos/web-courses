import React, { FC } from "react";

import "./styles.scss";

export interface TextProps {}

const Text: FC<TextProps> = ({}) => {
  return <section className="title">Text</section>;
};

export default Text;
