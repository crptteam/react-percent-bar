import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  select
} from '@storybook/addon-knobs/react';

import PercentBar from '../components/PercentBar';


const elements = storiesOf('PercentBar', module);

elements.addDecorator(withKnobs);

elements.add('default', () => {
  return (
    <PercentBar
      title="Реализованные"
      values={[
        {id: 1, percent: 4, count: 8, title:'Порча товара'},
        {id: 7, percent: 8, count: 16, title:'Продажа китайцам'},
        {id: 2, percent: 2, count: 4, title:'Хищение товара'},
        {id: 3, percent: 1, count: 2, title:'Отбор контрольных образцов'},
        {id: 4, percent: 1.5, count: 3, title:'Демонстрация на выставках и ярмарках'},
        {id: 5, percent: 1.5, count: 3, title:'Иное'},
      ]}
    />
  );
});
