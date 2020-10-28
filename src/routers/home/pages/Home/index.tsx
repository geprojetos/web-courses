import React, { FC } from "react";
import { Col, Container, Row, Visible } from "react-grid-system";

import { t } from "../../../../i18n";
import { Button, Text } from "../../../../shared/components";
import { Default } from "../../../../shared/templates";
import BannerMobile from "../../../../assets/img/mobile-banner-home.png";
import "./styles.scss";

const BannerInternal: FC = () => {
  return (
    <>
      <Row>
        <figure className="home-banner">
          <Visible xs>
            <img src={BannerMobile} alt="Banner" />
          </Visible>
        </figure>
      </Row>

      <Row>
        <Col>
          <Text type="h5" value={t("home:welcome")} />
          <Text type="h6" value={t("home:whatDoYou")} />
        </Col>
      </Row>
    </>
  );
};

const TodoInternal: FC = () => {
  return (
    <Row>
      <Col>
        <Button type="default" size="large" />
        <Button type="icon" size="large" />
      </Col>
    </Row>
  );
};

const Home: FC = () => {
  return (
    <section className="home-container">
      <Default
        content={
          <article className="home-wrapper">
            <Container fluid>
              <BannerInternal />
              <TodoInternal />
            </Container>
          </article>
        }
      />
    </section>
  );
};

export default Home;
