import React, { FC } from 'react';

import { t } from '../../../../i18n';
import './styles.scss'

const Home: FC = () => {
  return (
    <div className="center">
      <h1>{t('common:welcome')}</h1>
    </div>
  );
};

export default Home;
