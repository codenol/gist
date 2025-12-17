import React from 'react';
import { AbsoluteToggletipWrapper } from 'uikit-main/Toggletip';
import '../design-system.scss';
import 'uikit-main/Toggletip/toggletip.scss';

/**
 * Компонент: Toggletip
 * 
 * Абсолютно позиционированный тоглтип (открывается по клику)
 * с поддержкой атрибутов data-*, автоматическим позиционированием
 * и обработкой скролла.
 */

export default {
    title: 'Настоящее/Toggletip',
    component: AbsoluteToggletipWrapper,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Абсолютно позиционированный тоглтип (открывается по клику) с поддержкой атрибутов data-*, автоматическим позиционированием и обработкой скролла.'
            }
        }
    },
    tags: ['autodocs'],
};

export const Default = {
    render: () => (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <AbsoluteToggletipWrapper id="toggletip-1" />
            <button
                data-toggletip-content="Это тоглтип, который открывается по клику"
                data-toggletip-position="top"
                data-toggletip-id="toggletip-1"
                style={{ padding: '10px 20px' }}
            >
                Кликните на меня
            </button>
        </div>
    )
};

export const DifferentPositions = {
    render: () => (
        <div style={{ padding: '100px', display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
            <AbsoluteToggletipWrapper id="toggletip-pos" />
            <button
                data-toggletip-content="Тоглтип сверху"
                data-toggletip-position="top"
                data-toggletip-id="toggletip-pos"
                style={{ padding: '10px 20px' }}
            >
                Top
            </button>
            <button
                data-toggletip-content="Тоглтип справа"
                data-toggletip-position="right"
                data-toggletip-id="toggletip-pos"
                style={{ padding: '10px 20px' }}
            >
                Right
            </button>
            <button
                data-toggletip-content="Тоглтип снизу"
                data-toggletip-position="bottom"
                data-toggletip-id="toggletip-pos"
                style={{ padding: '10px 20px' }}
            >
                Bottom
            </button>
            <button
                data-toggletip-content="Тоглтип слева"
                data-toggletip-position="left"
                data-toggletip-id="toggletip-pos"
                style={{ padding: '10px 20px' }}
            >
                Left
            </button>
        </div>
    )
};

