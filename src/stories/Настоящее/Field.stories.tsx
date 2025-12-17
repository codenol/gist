import React from 'react';
import FieldTemplate from 'uikit-main/Field';
import { InputText } from 'primereact/inputtext';
import '../design-system.scss';
import 'uikit-main/Field/index.scss';

/**
 * Компонент: Field
 * 
 * Компонент поля формы с валидацией и тултипами.
 */

export default {
    title: 'Настоящее/Field',
    component: FieldTemplate,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Компонент поля формы с валидацией и тултипами.'
            }
        }
    },
    tags: ['autodocs'],
};

export const Default = {
    render: () => (
        <div style={{ padding: '20px', maxWidth: '400px' }}>
            <FieldTemplate tooltipName="Название поля">
                <InputText placeholder="Введите значение" />
            </FieldTemplate>
        </div>
    )
};

export const WithError = {
    render: () => (
        <div style={{ padding: '20px', maxWidth: '400px' }}>
            <FieldTemplate 
                tooltipName="Поле с ошибкой" 
                errorText="Это поле обязательно для заполнения"
                isErrorShown={true}
            >
                <InputText placeholder="Введите значение" />
            </FieldTemplate>
        </div>
    )
};

