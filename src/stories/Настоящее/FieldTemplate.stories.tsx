import React from 'react';
import FieldTemplate from 'uikit-main/FieldTemplate';
import '../design-system.scss';
import 'uikit-main/FieldTemplate/fieldTemplate.scss';

/**
 * Компонент: FieldTemplate
 * 
 * Компонент для визуализации поля с пользовательским вводом,
 * поддерживает тултипы, ошибки валидации.
 */

export default {
    title: 'Настоящее/FieldTemplate',
    component: FieldTemplate,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Компонент для визуализации поля с пользовательским вводом, поддерживает тултипы, ошибки валидации.'
            }
        }
    },
    tags: ['autodocs'],
};

export const Default = {
    render: () => (
        <div style={{ padding: '20px', maxWidth: '400px' }}>
            <FieldTemplate
                label="Название поля"
                value="Значение поля"
            />
        </div>
    )
};

export const WithError = {
    render: () => (
        <div style={{ padding: '20px', maxWidth: '400px' }}>
            <FieldTemplate
                label="Поле с ошибкой"
                value="Некорректное значение"
                error="Это поле обязательно для заполнения"
            />
        </div>
    )
};

export const WithTooltip = {
    render: () => (
        <div style={{ padding: '20px', maxWidth: '400px' }}>
            <FieldTemplate
                label="Поле с подсказкой"
                value="Значение"
                tooltip="Это подсказка для поля"
            />
        </div>
    )
};

