import React, { FC, ReactChild } from "react";
import Header from "../../components/Header";

import "./styles.scss";

export interface ListProps {
  content: ReactChild;
}

const List: FC<ListProps> = ({ content }) => {
  return (
    <section>
      <Header />
      <section className={`template-list`}>{content}</section>
    </section>
  );
};

export default List;
