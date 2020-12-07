import React, { FC } from "react";
import {
  Container,
  Hidden,
  ScreenClassRender,
  Visible,
  ScreenClass,
} from "react-grid-system";

import { t } from "../../../../i18n";
import { Icon, Text } from "../../../../shared/components";
import { Default } from "../../../../shared/templates";
import BannerMobile from "../../../../assets/img/mobile-banner-home.png";
import BannerDesktop from "../../../../assets/img/desktop-banner-home.png";
import {
  ColorTypes,
  LanguageTypes,
  screenObj,
} from "../../../../assets/utils/types";
import { useLanguagesContext } from "../../../../assets/context/languages";
import studyIcon from "../../../../assets/icons/study.svg";
import classIcon from "../../../../assets/icons/class.svg";
import "./styles.scss";
import { Link } from "react-router-dom";

interface HomeBannerProps {
  setUpdate: any;
}

const HomeLanguages: FC<HomeBannerProps> = ({ setUpdate }) => {
  // hooks
  const { lang } = useLanguagesContext();

  /**
   * @alias handleChangeEn
   * @param {}
   * @description method used to change language for english
   */
  const handleChangeEn = () => {
    setUpdate(LanguageTypes.english);
  };

  /**
   * @alias handleChangePt
   * @param {}
   * @description method used to change language for portuguese
   */
  const handleChangePt = () => {
    setUpdate(LanguageTypes.portuguese);
  };

  return (
    <div className="home-language">
      <Text type="p">{t("home:language")}</Text>
      <button
        className={`home-language-button ${
          lang === LanguageTypes.portuguese && "home-language-active"
        }`}
        onClick={handleChangePt}>
        <Text type="p">{t("home:pt")}</Text>
      </button>
      <button
        className={`home-language-button ${
          lang === LanguageTypes.english && "home-language-active"
        }`}
        onClick={handleChangeEn}>
        <Text type="p">{t("home:en")}</Text>
      </button>
    </div>
  );
};

const HomeBanner: FC = () => {
  return (
    <div className="global-center home-banner">
      <Hidden xs sm md>
        <div className="global-direction-column">
          <Icon
            className="home-banner-proffy"
            size={10}
            name="proffy"
            color={ColorTypes.WHITE1}
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
};

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
  // hooks
  const { setUpdate } = useLanguagesContext();

  return (
    <section className="home-container">
      <Default
        content={
          <article className="home-wrapper">
            <Container fluid>
              <HomeLanguages setUpdate={setUpdate} />
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
