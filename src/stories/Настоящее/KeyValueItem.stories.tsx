import React from 'react';
import { KeyValueItem } from 'uikit-main/KeyValueItem';
import '../design-system.scss';
import 'uikit-main/KeyValueItem/keyValueItem.scss';

/**
 * Компонент: KeyValueItem
 * 
 * Компонент для отображения пары ключ-значение
 * с поддержкой описания через тултип.
 */

export default {
    title: 'Настоящее/KeyValueItem',
    component: KeyValueItem,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Компонент для отображения пары ключ-значение с поддержкой описания через тултип.'
            }
        }
    },
    tags: ['autodocs'],
};

export const Default = {
    render: () => (
        <div style={{ padding: '20px', maxWidth: '600px' }}>
            <KeyValueItem
                title="Название"
                value="Значение"
            />
        </div>
    )
};

export const WithDescription = {
    render: () => (
        <div style={{ padding: '20px', maxWidth: '600px' }}>
            <KeyValueItem
                title="Параметр с описанием"
                value="Значение"
                description="Это описание параметра, которое отображается в тултипе при наведении на иконку информации"
            />
        </div>
    )
};

export const WithUnderline = {
    render: () => (
        <div style={{ padding: '20px', maxWidth: '600px' }}>
            <KeyValueItem
                title="Параметр 1"
                value="Значение 1"
                underline={true}
            />
            <KeyValueItem
                title="Параметр 2"
                value="Значение 2"
                underline={true}
            />
            <KeyValueItem
                title="Параметр 3"
                value="Значение 3"
            />
        </div>
    )
};

export const ComplexValue = {
    render: () => (
        <div style={{ padding: '20px', maxWidth: '600px' }}>
            <KeyValueItem
                title="Статус"
                value={<span style={{ color: 'green' }}>Активен</span>}
            />
            <KeyValueItem
                title="Список"
                value={
                    <ul style={{ margin: 0, paddingLeft: '20px' }}>
                        <li>Элемент 1</li>
                        <li>Элемент 2</li>
                    </ul>
                }
            />
        </div>
    )
};

