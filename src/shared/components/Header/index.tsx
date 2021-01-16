import React, { FC } from "react";
import { ColorsEnum } from "../../../assets/enum";
import Icon from "../Icon";

import backIcon from "../../../assets/icons/back.svg";
import "./styles.scss";
import { Link, useHistory } from "react-router-dom";

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <header className="global-align-center global-justify-between header">
      <button onClick={handleBack} className="header-back-icon">
        <img src={backIcon} alt="" />
      </button>

      <Link to="/">
        <Icon name="proffy" size={1} color={ColorsEnum.WHITE1} />
      </Link>
    </header>
  );
};

export default Header;
