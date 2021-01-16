import React, { FC, memo, useEffect } from "react";
import {
  Container,
  Hidden,
  ScreenClassRender,
  Visible,
  ScreenClass,
} from "react-grid-system";
import { Link } from "react-router-dom";

import { t } from "../../../../i18n";
import { Icon, Text, ChangeLanguage } from "../../../../shared/components";
import { Default } from "../../../../shared/templates";
import BannerMobile from "../../../../assets/img/mobile-banner-home.png";
import BannerDesktop from "../../../../assets/img/desktop-banner-home.png";
import { ColorsEnum } from "../../../../assets/enum";
import { screenObj } from "../../../../assets/types";
import studyIcon from "../../../../assets/icons/study.svg";
import classIcon from "../../../../assets/icons/class.svg";
import "./styles.scss";
import { useLanguagesContext } from "../../../../assets/context/languages";

const HomeBanner: FC = memo(() => {
  return (
    <div className="global-center home-banner">
      <Hidden xs sm md>
        <div className="global-direction-column">
          <Icon
            className="home-banner-proffy"
            size={10}
            name="proffy"
            color={ColorsEnum.WHITE1}
          />
          <Text type="h5">{t("home:yourPlatform")}</Text>
        </div>
      </Hidden>
      <figure>
        <Visible xs sm md>
          <img
            className="home-banner-icon"
            src={BannerMobile}
            alt={t("home:altBanner")}
            title={t("home:titleBanner")}
          />
        </Visible>

        <Hidden xs sm md>
          <img
            className="home-banner-icon"
            src={BannerDesktop}
            alt={t("home:altBanner")}
            title={t("home:titleBanner")}
          />
        </Hidden>
      </figure>
    </div>
  );
});

const HomeTodo: FC = () => {
  return (
    <ScreenClassRender
      render={(screenClass: ScreenClass) => {
        return (
          <section
            className={
              [screenObj.lg, screenObj.xl, screenObj.xxl].includes(screenClass)
                ? "global-center"
                : ""
            }>
            <div className="home-todo-title">
              <Text type="h5">{t("home:welcome")}</Text>
              <Text className="home-todo-subtitle" type="h6">
                {t("home:whatDoYou")}
              </Text>
            </div>

            <div className="global-flex global-justify-between">
              <div className="home-todo-action home-todo-study global-direction-column global-justify-between global-align-center">
                <img
                  className="home-todo-icon"
                  src={studyIcon}
                  alt={t("home:altIconStudy")}
                  title={t("home:titleIconStudy")}
                />
                <Text type="h5">{t("home:courses")}</Text>
              </div>

              <Link
                to="/categories/list"
                className="home-todo-action home-todo-class global-direction-column global-justify-between global-align-center">
                <img
                  className="home-todo-icon"
                  src={classIcon}
                  alt={t("home:altIconClasses")}
                  title={t("home:titleIconClasses")}
                />
                <Text type="h5">{t("home:categories")}</Text>
              </Link>
            </div>
          </section>
        );
      }}
    />
  );
};

const Home: FC = () => {
  const { lang } = useLanguagesContext();

  // hooks
  useEffect(() => {}, [lang]);

  return (
    <section className="home-container">
      <Default
        content={
          <article className="home-wrapper">
            <Container fluid>
              <ChangeLanguage />
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
