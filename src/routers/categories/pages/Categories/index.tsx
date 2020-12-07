import React, { FC } from "react";
import { Container } from "react-grid-system";

import { t } from "../../../../i18n";
import { List } from "../../../../shared/templates";
import "./styles.scss";

const Categories: FC = () => {
  return (
    <List
      content={
        <section>
          <div className="global-header-bkg"></div>
          <Container fluid>
            <section className="global-relative">
              <h1>{t("categories:categories")}</h1>
            </section>
          </Container>
        </section>
      }
    />
  );
};

export default Categories;
