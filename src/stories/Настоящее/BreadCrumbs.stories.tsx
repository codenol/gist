import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CustomBreadCrumb } from 'uikit-main/BreadCrumbs';
import '../design-system.scss';
import 'uikit-main/BreadCrumbs/breadcrumbs.scss';

/**
 * Компонент: BreadCrumbs
 * 
 * Карточка с хлебными крошками, обёртка над primereact/breadcrumb
 * с поддержкой роутинга.
 */

export default {
    title: 'Настоящее/BreadCrumbs',
    component: CustomBreadCrumb,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Карточка с хлебными крошками, обёртка над primereact/breadcrumb с поддержкой роутинга.'
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

const mockRoutes = [
    { path: '/', breadcrumb: 'Главная' },
    { path: '/dashboard', breadcrumb: 'Панель управления' },
    { path: '/settings', breadcrumb: 'Настройки' },
];

export const Default = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <CustomBreadCrumb router={mockRoutes} />
        </div>
    )
};

export const WithAction = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <CustomBreadCrumb
                router={mockRoutes}
                action={<button style={{ padding: '8px 16px' }}>Действие</button>}
            />
        </div>
    )
};

export const WithCustomHome = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <CustomBreadCrumb
                router={mockRoutes}
                home={{
                    icon: <span>🏠</span>,
                    url: '/home'
                }}
            />
        </div>
    )
};

