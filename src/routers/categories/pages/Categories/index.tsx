import React, { FC } from 'react';
import { Container } from 'react-grid-system';

import { t } from '../../../../i18n';
import { Text } from '../../../../shared/components';
import { List } from '../../../../shared/templates';
import './styles.scss';

const Categories: FC = () => {
  return (
    <List
      content={
        <section className='categories'>
          <div className='global-header-bkg'></div>
          <Container fluid>
            <section className='global-relative'>
              <Text className='home-todo-subtitle' type='h6'>
                {t('home:whatDoYou')}
              </Text>
            </section>
          </Container>
        </section>
      }
    />
  );
};

export default Categories;
