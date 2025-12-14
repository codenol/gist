import React from 'react';
import { ContextMenuProvider } from 'uikit-main/context/ContextMenuContext';
import { useContextMenu } from 'uikit-main/hook/useContextMenu';
import type { MenuItem } from 'primereact/menuitem';
import '../design-system.scss';

/**
 * Компонент: ContextMenu
 * 
 * Провайдер для контекстного меню с поддержкой создания меню из данных таблицы.
 */

const ContextMenuExample = () => {
    const { toggleContextMenu } = useContextMenu();

    const menuItems: MenuItem[] = [
        { label: 'Редактировать', icon: 'pi pi-pencil', command: () => alert('Редактировать') },
        { label: 'Удалить', icon: 'pi pi-trash', command: () => alert('Удалить') },
        { separator: true },
        { label: 'Копировать', icon: 'pi pi-copy', command: () => alert('Копировать') },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <div
                style={{
                    padding: '50px',
                    border: '1px solid #ccc',
                    textAlign: 'center',
                    cursor: 'pointer',
                }}
                onClick={(e) => toggleContextMenu(e, menuItems)}
                onContextMenu={(e) => {
                    e.preventDefault();
                    toggleContextMenu(e, menuItems);
                }}
            >
                Кликните правой кнопкой мыши или левой кнопкой мыши здесь
            </div>
        </div>
    );
};

export default {
    title: 'Настоящее/ContextMenu',
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Провайдер для контекстного меню с поддержкой создания меню из данных таблицы.'
            }
        }
    },
    decorators: [
        (Story) => (
            <ContextMenuProvider>
                <Story />
            </ContextMenuProvider>
        ),
    ],
    tags: ['autodocs'],
};

export const Default = {
    render: () => <ContextMenuExample />
};













