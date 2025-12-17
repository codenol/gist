import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { TabMenuNavLink } from 'uikit-main/TabMenuNavLink';
import '../design-system.scss';
import 'uikit-main/TabMenuNavLink/tabMenuNavLink.scss';

/**
 * Компонент: TabMenuNavLink
 * 
 * Кастомное меню на табах с поддержкой подменю и навигации
 * через React Router.
 */

export default {
    title: 'Настоящее/TabMenuNavLink',
    component: TabMenuNavLink,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Кастомное меню на табах с поддержкой подменю и навигации через React Router.'
            }
        }
    },
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
    tags: ['autodocs'],
};

const mockItems = [
    { label: 'Главная', to: '/' },
    { label: 'О нас', to: '/about' },
    { label: 'Контакты', to: '/contacts' },
];

export const Default = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <TabMenuNavLink items={mockItems} />
        </div>
    )
};

