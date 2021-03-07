import React, { FC } from 'react';
import { Container } from 'react-grid-system';
import { ColorsEnum } from '../../../../assets/enum';
import { t } from '../../../../i18n';
import { Button, Select, Text } from '../../../../shared/components';
import { List } from '../../../../shared/templates';
import './styles.scss';

const ListCategories: FC = () => {
  return (
    <List
      header={
        <Container fluid>
          <section>
            <Text className='categories-title' type='h1' align='center'>
              {t('categories:availableCategories')}
            </Text>

            <Button align='right' link='/categories/add'>
              {t('categories:newCategorie')}
            </Button>
            <Select options={[]} label={t('categories:matter')} />
          </section>
        </Container>
      }
      body={
        <Container fluid>
          <div className='categories-box'>
            <div className='categories-name'>
              <Text type='p' color={ColorsEnum.GRAY3}>
                {t('categories:availableCategories')}
              </Text>
            </div>
          </div>
        </Container>
      }
    />
  );
};

export default ListCategories;
