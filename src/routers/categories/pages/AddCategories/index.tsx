import React, { FC } from 'react';

import { Default } from '../../../../shared/templates';
import { t } from '../../../../i18n';
import './styles.scss';

const AddCategories: FC = () => {
  return (
    <Default
      content={
        <section>
          <h1>{t('addCategories:addCategories')}</h1>
        </section>
      }
    />
  );
};

export default AddCategories;
