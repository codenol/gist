import React from 'react';
import { DataTableDynamic } from 'uikit-main/DataTableDynamic';
import '../design-system.scss';
import 'uikit-main/DataTable/index.scss';

/**
 * Компонент: DataTableDynamic
 * 
 * Динамический компонент таблицы на основе PrimeReact,
 * создаёт колонки из массива конфигурации.
 */

export default {
    title: 'Настоящее/DataTableDynamic',
    component: DataTableDynamic,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Динамический компонент таблицы на основе PrimeReact, создаёт колонки из массива конфигурации.'
            }
        }
    },
    tags: ['autodocs'],
};

const mockData = [
    { id: 1, name: 'Иван', age: 25, city: 'Москва' },
    { id: 2, name: 'Мария', age: 30, city: 'Санкт-Петербург' },
    { id: 3, name: 'Петр', age: 28, city: 'Казань' },
];

const columns = [
    { field: 'name', header: 'Имя', isSortable: true },
    { field: 'age', header: 'Возраст', isSortable: true },
    { field: 'city', header: 'Город', isFilter: true },
];

export const Default = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <DataTableDynamic
                value={mockData}
                columns={columns}
            />
        </div>
    )
};

export const WithPagination = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <DataTableDynamic
                value={mockData}
                columns={columns}
                paginator={true}
                rows={2}
            />
        </div>
    )
};

