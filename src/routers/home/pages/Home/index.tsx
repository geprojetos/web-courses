import React, { FC } from "react";
import { Container, Visible } from "react-grid-system";

import { t } from "../../../../i18n";
import { Icon, Text } from "../../../../shared/components";
import { Default } from "../../../../shared/templates";
import BannerMobile from "../../../../assets/img/mobile-banner-home.png";
import { colorTypes, languageTypes } from "../../../../assets/utils/types";
import "./styles.scss";
import { useLanguagesContext } from "../../../../assets/context/Languages";

interface HomeBannerProps {
  setUpdate: any;
}

const HomeBanner: FC<HomeBannerProps> = ({ setUpdate }: any) => {
  const handleChangeEn = () => {
    setUpdate(languageTypes.english);
  };

  const handleChangePt = () => {
    setUpdate(languageTypes.portuguese);
  };
  return (
    <>
      <Text type="p">{t("common:language")}</Text>
      <button className="home-button-language" onClick={handleChangePt}>
        <Text type="p">{t("common:pt")}</Text>
      </button>
      <button className="home-button-language" onClick={handleChangeEn}>
        <Text type="p">{t("common:en")}</Text>
      </button>
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
  const { setUpdate } = useLanguagesContext();

  return (
    <section className="home-container">
      <Default
        content={
          <article className="home-wrapper">
            <Container fluid>
              <HomeBanner setUpdate={setUpdate} />
              <HomeTodo />
            </Container>
          </article>
        }
      />
    </section>
  );
};

export default Home;
