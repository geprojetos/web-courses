import React, { FC } from 'react';

import { LanguageEnum } from '../../../assets/enum';
import { Text } from '../';
import { t } from '../../../i18n';

import './styles.scss';
import { useLanguagesContext } from '../../../assets/context';

const ChangeLanguage: FC = () => {
  // hooks
  const { lang, setUpdate } = useLanguagesContext();

  /**
   * @alias handleChangeEn
   * @param {}
   * @description method used to change language for english
   */
  const handleChangeEn = () => {
    setUpdate(LanguageEnum.english);
  };

  /**
   * @alias handleChangePt
   * @param {}
   * @description method used to change language for portuguese
   */
  const handleChangePt = () => {
    setUpdate(LanguageEnum.portuguese);
  };

  return (
    <div className='home-language'>
      <Text type='p'>{t('home:language')}</Text>
      <button
        className={`home-language-button ${
          lang === LanguageEnum.portuguese && 'home-language-active'
        }`}
        onClick={handleChangePt}>
        <Text type='p'>{t('home:pt')}</Text>
      </button>
      <button
        className={`home-language-button ${
          lang === LanguageEnum.english && 'home-language-active'
        }`}
        onClick={handleChangeEn}>
        <Text type='p'>{t('home:en')}</Text>
      </button>
    </div>
  );
};

export default ChangeLanguage;