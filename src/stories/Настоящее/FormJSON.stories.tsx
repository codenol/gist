import React from 'react';
import { FormJSON } from 'uikit-main/FormJSON';
import '../design-system.scss';
import 'uikit-main/FormJSON/index.scss';

/**
 * Компонент: FormJSON
 * 
 * Главный компонент формы, построенной на основе JSON Schema (rjsf),
 * использует кастомные виджеты, шаблоны, валидацию и поддерживает
 * деление формы на страницы.
 */

export default {
    title: 'Настоящее/FormJSON',
    component: FormJSON,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Главный компонент формы, построенной на основе JSON Schema (rjsf), использует кастомные виджеты, шаблоны, валидацию и поддерживает деление формы на страницы.'
            }
        }
    },
    tags: ['autodocs'],
};

const simpleSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            title: 'Имя',
        },
        email: {
            type: 'string',
            format: 'email',
            title: 'Email',
        },
    },
    required: ['name', 'email'],
};

export const Default = {
    render: () => (
        <div style={{ padding: '20px', maxWidth: '600px' }}>
            <FormJSON schema={simpleSchema} onSubmit={(data) => console.log(data)} />
        </div>
    )
};

