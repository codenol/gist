import React from 'react';
import { DataTableDynamic } from 'uikit-main/DataTable';
import '../design-system.scss';
import 'uikit-main/DataTable/index.scss';

/**
 * Компонент: DataTable
 * 
 * Кастомный компонент таблицы на основе PrimeReact с поддержкой
 * фильтрации, пагинации, раскрытия строк, выбора элементов.
 */

export default {
    title: 'Настоящее/DataTable',
    component: DataTableDynamic,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Кастомный компонент таблицы на основе PrimeReact с поддержкой фильтрации, пагинации, раскрытия строк, выбора элементов.'
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

export const Default = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <DataTableDynamic 
                data={mockData}
                columns={[
                    { field: 'name', header: 'Имя' },
                    { field: 'age', header: 'Возраст' },
                    { field: 'city', header: 'Город' },
                ]}
            />
        </div>
    )
};

