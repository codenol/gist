import React, { useState } from 'react';
import { MultiSelect } from 'uikit-main/MultiSelect';
import '../design-system.scss';

/**
 * Компонент: MultiSelect
 * 
 * Обёртка над MultiSelect из PrimeReact с расширенной фильтрацией
 * и поддержкой выбора всех элементов.
 */

export default {
    title: 'Настоящее/MultiSelect',
    component: MultiSelect,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Обёртка над MultiSelect из PrimeReact с расширенной фильтрацией и поддержкой выбора всех элементов.'
            }
        }
    },
    tags: ['autodocs'],
};

const options = [
    { label: 'Опция 1', value: '1' },
    { label: 'Опция 2', value: '2' },
    { label: 'Опция 3', value: '3' },
    { label: 'Опция 4', value: '4' },
    { label: 'Опция 5', value: '5' },
];

export const Default = {
    render: () => {
        const [selected, setSelected] = useState([]);
        return (
            <div style={{ padding: '20px', maxWidth: '300px' }}>
                <MultiSelect
                    value={selected}
                    onChange={(e) => setSelected(e.value)}
                    options={options}
                    optionLabel="label"
                    optionValue="value"
                    placeholder="Выберите опции"
                />
            </div>
        );
    }
};

export const WithSelectAll = {
    render: () => {
        const [selected, setSelected] = useState([]);
        return (
            <div style={{ padding: '20px', maxWidth: '300px' }}>
                <MultiSelect
                    value={selected}
                    onChange={(e) => setSelected(e.value)}
                    options={options}
                    optionLabel="label"
                    optionValue="value"
                    placeholder="Выберите опции"
                    showSelectAll={true}
                />
            </div>
        );
    }
};

export const WithFilter = {
    render: () => {
        const [selected, setSelected] = useState([]);
        return (
            <div style={{ padding: '20px', maxWidth: '300px' }}>
                <MultiSelect
                    value={selected}
                    onChange={(e) => setSelected(e.value)}
                    options={options}
                    optionLabel="label"
                    optionValue="value"
                    placeholder="Выберите опции"
                    filter={true}
                    showSelectAll={true}
                />
            </div>
        );
    }
};













