import React from 'react';
import { BakedDataTable } from 'uikit-main/BakedDataTable';
import '../design-system.scss';
import 'uikit-main/DataTable/index.scss';

/**
 * Компонент: BakedDataTable
 * 
 * Готовая таблица данных с предустановленными настройками.
 */

export default {
    title: 'Настоящее/BakedDataTable',
    component: BakedDataTable,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Готовая таблица данных с предустановленными настройками.'
            }
        }
    },
    tags: ['autodocs'],
};

const mockData = [
    { id: 1, name: 'Иван', age: 25 },
    { id: 2, name: 'Мария', age: 30 },
    { id: 3, name: 'Петр', age: 28 },
];

const columns = [
    { field: 'name', header: 'Имя' },
    { field: 'age', header: 'Возраст' },
];

export const Default = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <BakedDataTable data={mockData} columnsTable={columns} />
        </div>
    )
};

