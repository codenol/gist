import React from 'react';
import { AbsoluteTooltip } from 'uikit-main/AbsoluteTooltip';
import '../design-system.scss';

/**
 * Компонент: AbsoluteTooltip
 * 
 * Абсолютно позиционированный тултип с поддержкой атрибутов data-*,
 * автоматическим позиционированием и следованием за курсором.
 */

export default {
    title: 'Настоящее/AbsoluteTooltip',
    component: AbsoluteTooltip,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Абсолютно позиционированный тултип с поддержкой атрибутов data-*, автоматическим позиционированием и следованием за курсором.'
            }
        }
    },
    tags: ['autodocs'],
};

export const Default = {
    render: () => (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <AbsoluteTooltip id="tooltip-1" />
            <button
                data-tooltip-content="Это простой тултип"
                data-tooltip-position="top"
                data-tooltip-id="tooltip-1"
                style={{ padding: '10px 20px' }}
            >
                Наведите на меня
            </button>
        </div>
    )
};

export const WithFollowCursor = {
    render: () => (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <AbsoluteTooltip id="tooltip-2" followCursor={true} />
            <button
                data-tooltip-content="Тултип следует за курсором"
                data-tooltip-position="top"
                data-tooltip-id="tooltip-2"
                data-tooltip-follow-cursor="true"
                style={{ padding: '10px 20px' }}
            >
                Наведите на меня
            </button>
        </div>
    )
};

export const DifferentPositions = {
    render: () => (
        <div style={{ padding: '100px', display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
            <AbsoluteTooltip id="tooltip-pos" />
            <button
                data-tooltip-content="Тултип сверху"
                data-tooltip-position="top"
                data-tooltip-id="tooltip-pos"
                style={{ padding: '10px 20px' }}
            >
                Top
            </button>
            <button
                data-tooltip-content="Тултип справа"
                data-tooltip-position="right"
                data-tooltip-id="tooltip-pos"
                style={{ padding: '10px 20px' }}
            >
                Right
            </button>
            <button
                data-tooltip-content="Тултип снизу"
                data-tooltip-position="bottom"
                data-tooltip-id="tooltip-pos"
                style={{ padding: '10px 20px' }}
            >
                Bottom
            </button>
            <button
                data-tooltip-content="Тултип слева"
                data-tooltip-position="left"
                data-tooltip-id="tooltip-pos"
                style={{ padding: '10px 20px' }}
            >
                Left
            </button>
        </div>
    )
};













