import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Будущее/Inputs/RadioButtonList',
  parameters: {
    docs: {
      description: {
        component: 'Здесь будет RadioButtonList — группа радиокнопок',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Placeholder: StoryFn = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
      <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
        Здесь будет RadioButtonList — группа радиокнопок
      </p>
      <p style={{ fontSize: '0.9rem', color: '#999' }}>
        Компонент находится в разработке
      </p>
    </div>
  );
};
