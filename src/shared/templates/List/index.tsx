import React, { FC, ReactChild } from 'react';
import Header from '../../components/Header';

import './styles.scss';

export interface ListProps {
  header: ReactChild;
  body: ReactChild;
}

const List: FC<ListProps> = ({ header, body }) => {
  return (
    <section className={`template-list`}>
      <Header />
      <section className={'template-list-header'}>{header}</section>
      <section className={'template-list-body'}>{body}</section>
    </section>
  );
};

export default List;
