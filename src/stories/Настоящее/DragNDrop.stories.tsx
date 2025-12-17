import React, { useState } from 'react';
import { DragNDrop } from 'uikit-main/DragNDrop';
import '../design-system.scss';
import 'uikit-main/DragNDrop/dragndrop.scss';

/**
 * Компонент: DragNDrop
 * 
 * Компонент для перетаскивания элементов списка с кастомными
 * шаблонами и стилями.
 */

export default {
    title: 'Настоящее/DragNDrop',
    component: DragNDrop,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Компонент для перетаскивания элементов списка с кастомными шаблонами и стилями.'
            }
        }
    },
    tags: ['autodocs'],
};

export const Default = {
    render: () => {
        const [items, setItems] = useState(['Элемент 1', 'Элемент 2', 'Элемент 3', 'Элемент 4']);
        return (
            <div style={{ padding: '20px', maxWidth: '400px' }}>
                <DragNDrop
                    options={items}
                    onChange={(reordered) => setItems(reordered)}
                    template={(option, index) => (
                        <div style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '5px' }}>
                            {option}
                        </div>
                    )}
                />
            </div>
        );
    }
};

export const WithObjects = {
    render: () => {
        const [items, setItems] = useState([
            { id: 1, name: 'Задача 1', priority: 'Высокий' },
            { id: 2, name: 'Задача 2', priority: 'Средний' },
            { id: 3, name: 'Задача 3', priority: 'Низкий' },
        ]);
        return (
            <div style={{ padding: '20px', maxWidth: '500px' }}>
                <DragNDrop
                    options={items}
                    onChange={(reordered) => setItems(reordered)}
                    template={(option) => (
                        <div style={{ padding: '15px', border: '1px solid #ccc', marginBottom: '5px', borderRadius: '4px' }}>
                            <div style={{ fontWeight: 'bold' }}>{option.name}</div>
                            <div style={{ fontSize: '0.9em', color: '#666' }}>Приоритет: {option.priority}</div>
                        </div>
                    )}
                />
            </div>
        );
    }
};













