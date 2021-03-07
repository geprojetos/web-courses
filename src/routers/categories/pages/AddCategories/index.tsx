import React, { FC } from 'react';
import { Container } from 'react-grid-system';
import { useForm } from 'react-hook-form';

import { List } from '../../../../shared/templates';
import { t } from '../../../../i18n';
import './styles.scss';
import { Input, Text } from '../../../../shared/components';

const AddCategories: FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <List
      header={
        <Container fluid>
          <section>
            <Text className='categories-title' type='h1' align='center'>
              {t('categories:addCategorie')}
            </Text>
          </section>
        </Container>
      }
      body={
        <Container fluid>
          <section>
            <form
              className='global-flex global-direction-column add-categorie-form'
              onSubmit={handleSubmit(onSubmit)}>
              <Input
                ref={register({ required: true })}
                label={t('categories:name')}
                errors={errors}
                errorMessage={t('categories:nameRequired')}
              />
              <input type='submit' />
            </form>
          </section>
        </Container>
      }
    />
  );
};

export default AddCategories;
