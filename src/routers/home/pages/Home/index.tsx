import React, { FC } from "react";
import { Col, Container, Row, Visible } from "react-grid-system";

import { t } from "../../../../i18n";
import { Icon, Text } from "../../../../shared/components";
import { Default } from "../../../../shared/templates";
import BannerMobile from "../../../../assets/img/mobile-banner-home.png";
import "./styles.scss";
import { colorTypes } from "../../../../assets/utils/types";

const HomeBanner: FC = () => {
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

const HomeTodo: FC = () => {
  return (
    <Row>
      <Col>
        <div>
          <Icon
            className="home-icon"
            name="study"
            color={colorTypes.white}
            size={40}
          />
          <Text type="h5" value={t("home:toStudy")} />
        </div>

        <div>
          <Icon
            className="home-icon"
            name="class"
            color={colorTypes.white}
            size={40}
          />
          <Text type="h5" value={t("home:giveClasses")} />
        </div>
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
              <HomeBanner />
              <HomeTodo />
            </Container>
          </article>
        }
      />
    </section>
  );
};

export default Home;
