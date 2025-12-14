import React from 'react';
import { ProgressBar } from 'uikit-main/ProgressBar';
import '../design-system.scss';
import 'uikit-main/ProgressBar/index.scss';

/**
 * Компонент: ProgressBar
 * 
 * Компонент прогрессбара с кастомными элементами по бокам
 * (левая и правая части, внутренний контент).
 */

export default {
    title: 'Настоящее/ProgressBar',
    component: ProgressBar,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Компонент прогрессбара с кастомными элементами по бокам (левая и правая части, внутренний контент).'
            }
        }
    },
    tags: ['autodocs'],
};

export const Default = {
    render: () => (
        <div style={{ padding: '20px', maxWidth: '600px' }}>
            <ProgressBar percentage={50} />
        </div>
    )
};

export const WithLabels = {
    render: () => (
        <div style={{ padding: '20px', maxWidth: '600px' }}>
            <ProgressBar percentage={75} left="0%" bar="75%" right="100%" />
        </div>
    )
};

export const DifferentPercentages = {
    render: () => (
        <div style={{ padding: '20px', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <ProgressBar percentage={25} left="Начало" bar="25%" right="Конец" />
            <ProgressBar percentage={50} left="Начало" bar="50%" right="Конец" />
            <ProgressBar percentage={75} left="Начало" bar="75%" right="Конец" />
            <ProgressBar percentage={100} left="Начало" bar="100%" right="Конец" />
        </div>
    )
};

