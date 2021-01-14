import React, { FC } from "react";
import { Container } from "react-grid-system";

import { List } from "../../../../shared/templates";
import "./styles.scss";

const Categories: FC = () => {
  return (
    <List
      content={
        <section className="categories">
          <div className="global-header-bkg"></div>
          <Container fluid>
            <section className="global-relative"></section>
          </Container>
        </section>
      }
    />
  );
};

export default Categories;
