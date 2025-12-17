import React from 'react';
import { Tooltip } from 'uikit-main/Tooltip';
import { Button } from 'primereact/button';
import '../design-system.scss';
import 'uikit-main/Tooltip/tooltip.scss';

/**
 * Компонент: Tooltip
 * 
 * Тултип с поддержкой позиционирования, активации по клику или ховеру,
 * с задержкой появления.
 */

export default {
    title: 'Настоящее/Tooltip',
    component: Tooltip,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Тултип с поддержкой позиционирования, активации по клику или ховеру, с задержкой появления.'
            }
        }
    },
    tags: ['autodocs'],
};

export const Default = {
    render: () => (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <Tooltip target=".tooltip-target" content="Это простой тултип" />
            <Button label="Наведите на меня" className="tooltip-target" />
        </div>
    )
};

export const WithDifferentPositions = {
    render: () => (
        <div style={{ padding: '100px', display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
            <Tooltip target=".tooltip-top" content="Тултип сверху" position="top" />
            <Button label="Top" className="tooltip-top" />
            
            <Tooltip target=".tooltip-right" content="Тултип справа" position="right" />
            <Button label="Right" className="tooltip-right" />
            
            <Tooltip target=".tooltip-bottom" content="Тултип снизу" position="bottom" />
            <Button label="Bottom" className="tooltip-bottom" />
            
            <Tooltip target=".tooltip-left" content="Тултип слева" position="left" />
            <Button label="Left" className="tooltip-left" />
        </div>
    )
};

export const WithClickActivation = {
    render: () => (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <Tooltip target=".tooltip-click" content="Тултип активируется по клику" event="click" />
            <Button label="Кликните на меня" className="tooltip-click" />
        </div>
    )
};

