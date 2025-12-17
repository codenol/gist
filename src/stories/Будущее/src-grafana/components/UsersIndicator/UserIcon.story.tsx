import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Будущее/Iconography/UserIcon',
  parameters: {
    docs: {
      description: {
        component: 'Здесь будет UserIcon — иконка',
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
        Здесь будет UserIcon — иконка
      </p>
      <p style={{ fontSize: '0.9rem', color: '#999' }}>
        Компонент находится в разработке
      </p>
    </div>
  );
};
