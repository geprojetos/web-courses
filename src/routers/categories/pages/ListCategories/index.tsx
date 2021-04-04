import React, { FC, useMemo, useState } from 'react';
import { Container } from 'react-grid-system';
import { ColorsEnum } from '../../../../assets/enum';
import { t } from '../../../../i18n';
import { Button, Select, Text } from '../../../../shared/components';
import { List } from '../../../../shared/templates';
import './styles.scss';

interface DropdownProps {
  name: string;
  description: string;
}

const mockListCategories = [
  {
    id: new Date(),
    categorie: 'UX',
    name: 'UX',
    description: 'Description categorie UX',
  },
  {
    id: new Date(),
    categorie: 'UX 2',
    name: 'UX',
    description: 'Description categorie UX 2',
  },
  {
    id: new Date(),
    categorie: 'Front end',
    name: 'Front end',
    description: 'Description categorie Front',
  },
];

const ListCategories: FC = () => {
  const [filteredCategories, setFilteredCategories] = useState<DropdownProps[]>(
    mockListCategories
  );

  const drowdownComponent = useMemo(() => {
    const dropdownItems =
      mockListCategories.length > 0
        ? mockListCategories.map((item) => ({
            value: item.categorie.trim().toLowerCase().replace(' ', ''),
            label: item.name,
          }))
        : [];

    return (
      <Select
        options={dropdownItems}
        label={t('categories:filterByCategory')}
        onSelected={(value: string) => handleSelected(value)}
      />
    );
  }, []);

  const handleSelected = (value: string) => {
    if (value) {
      const filteredValues = filteredCategories.filter((item) => {
        const nameFormated = item.name.trim().toLowerCase().replace(' ', '');
        const selectedFormated = value.trim().toLowerCase().replace(' ', '');

        return nameFormated === selectedFormated;
      });

      setFilteredCategories(filteredValues);
    }
  };

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
            {drowdownComponent}
          </section>
        </Container>
      }
      body={
        <Container fluid>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((item, index) => (
              <div className='categories-box' key={index}>
                <Text
                  type='h5'
                  color={ColorsEnum.GRAY3}
                  className='categories-box-title'>
                  {item.name}
                </Text>
                <Text
                  type='p'
                  color={ColorsEnum.GRAY3}
                  className='categories-box-title'>
                  {item.description}
                </Text>
              </div>
            ))
          ) : (
            <div className='categories-box'>
              <Text
                type='h5'
                color={ColorsEnum.GRAY3}
                className='categories-box-title'>
                {t('categories:youDontHave')}
              </Text>
            </div>
          )}
        </Container>
      }
    />
  );
};

export default ListCategories;
