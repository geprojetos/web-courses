import React, { FC } from "react";

import { t } from "../../../../i18n";
import { Button, Text } from "../../../../shared/components";
import { Default } from "../../../../shared/templates";
import "./styles.scss";
import BannerMobile from "../../../../assets/img/mobile-banner-home.png";
import { Col, Container, Row, Visible } from "react-grid-system";

const Home: FC = () => {
  return (
    <Default
      content={
        <section>
          <Container fluid>
            <Row>
              <Visible xs>
                <img src={BannerMobile} alt="Banner" />
              </Visible>
              <Col>
                <Text type="h5" value={t("home:welcome")} />
                <Text type="h6" value={t("home:whatDoYou")} />
              </Col>
            </Row>

            <Row>
              <Col>
                <Button type="default" size="large" />
                <Button type="icon" size="large" />
              </Col>
            </Row>
          </Container>
        </section>
      }
    />
  );
};

export default Home;
