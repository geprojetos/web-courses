import React, { FC } from "react";

import { t } from "../../../../i18n";
import { Text } from "../../../../shared/components";
import { Default } from "../../../../shared/templates";
import "./styles.scss";

const Home: FC = () => {
  return (
    <Default
      content={
        <div className="center">
          <Text />
          <h1>{t("home:home")}</h1>
        </div>
      }
    />
  );
};

export default Home;
