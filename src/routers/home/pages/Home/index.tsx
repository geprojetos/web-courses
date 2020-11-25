import React, { FC } from "react";
import { Container, Visible } from "react-grid-system";

import { t } from "../../../../i18n";
import { Icon, Text } from "../../../../shared/components";
import { Default } from "../../../../shared/templates";
import BannerMobile from "../../../../assets/img/mobile-banner-home.png";
import { colorTypes } from "../../../../assets/utils/types";
import "./styles.scss";

const HomeBanner: FC = () => {
  return (
    <>
      <figure className="home-banner">
        <Visible xs>
          <img src={BannerMobile} alt="Banner" />
        </Visible>
      </figure>
    </>
  );
};

const HomeTodo: FC = () => {
  return (
    <section>
      <div className="home-title">
        <Text type="h5">{t("home:welcome")}</Text>
        <Text className="home-sub-title" type="h6">
          {t("home:whatDoYou")}
        </Text>
      </div>

      <div className="global-flex global-justify-between">
        <div className="home-todo home-todo-study global-direction-column global-justify-between global-align-center">
          <Icon
            className="home-icon"
            name="study"
            color={colorTypes.white}
            size={40}
          />
          <Text type="h5">{t("home:toStudy")}</Text>
        </div>

        <div className="home-todo home-todo-class global-direction-column global-justify-between global-align-center">
          <Icon
            className="home-icon"
            name="class"
            color={colorTypes.white}
            size={40}
          />
          <Text type="h5">{t("home:giveClasses")}</Text>
        </div>
      </div>
    </section>
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
