import React, { FC } from 'react';
import { Container } from 'react-grid-system';
import { Link } from 'react-router-dom';
import { ColorsEnum } from '../../../../assets/enum';
import { t } from '../../../../i18n';
import { Select, Text } from '../../../../shared/components';
import { List } from '../../../../shared/templates';
import './styles.scss';

const ListCategories: FC = () => {
  return (
    <List
      content={
        <section className='categories'>
          <div className='global-header-bkg'></div>
          <Container fluid>
            <section className='global-relative'>
              <Text className='categories-title' type='h1'>
                {t('categories:availableCategories')}
              </Text>
              <Select options={[]} label={t('categories:matter')} />

              <div className='categories-box'>
                <div className='categories-name'>
                  <Text type='p' color={ColorsEnum.GRAY3}>
                    {t('categories:availableCategories')}
                  </Text>
                </div>
              </div>
            </section>
          </Container>
        </section>
      }
    />
  );
};

export default ListCategories;
