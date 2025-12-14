import React from 'react';
import { CompanyProgressSpinner } from 'uikit-main/CompanyProgressSpinner';
import '../design-system.scss';
import 'uikit-main/CompanyProgressSpinner/index.scss';

/**
 * Компонент: CompanyProgressSpinner
 * 
 * Кастомный спиннер загрузки с анимацией горы и снега,
 * настраиваемый размер и цвета.
 */

export default {
    title: 'Настоящее/CompanyProgressSpinner',
    component: CompanyProgressSpinner,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Кастомный спиннер загрузки с анимацией горы и снега, настраиваемый размер и цвета.'
            }
        }
    },
    tags: ['autodocs'],
};

export const Default = {
    render: () => (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <CompanyProgressSpinner />
        </div>
    )
};

export const Small = {
    render: () => (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <CompanyProgressSpinner size={5} />
        </div>
    )
};

export const Large = {
    render: () => (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <CompanyProgressSpinner size={15} />
        </div>
    )
};

export const CustomColors = {
    render: () => (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <CompanyProgressSpinner
                size={10}
                bgMountain="#4a5568"
                bgSnow="#4299e1"
                bgWrapper="#f7fafc"
            />
        </div>
    )
};

export const MultipleSizes = {
    render: () => (
        <div style={{ padding: '50px', display: 'flex', gap: '40px', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
                <CompanyProgressSpinner size={5} />
                <p style={{ marginTop: '10px' }}>Маленький (5rem)</p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <CompanyProgressSpinner size={10} />
                <p style={{ marginTop: '10px' }}>Средний (10rem)</p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <CompanyProgressSpinner size={15} />
                <p style={{ marginTop: '10px' }}>Большой (15rem)</p>
            </div>
        </div>
    )
};

