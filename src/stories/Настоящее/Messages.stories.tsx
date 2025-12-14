import React from 'react';
import { Messages } from 'uikit-main/Messages';
import '../design-system.scss';
import 'uikit-main/Messages/messages.scss';
import 'uikit-main/Message/index.scss';

/**
 * Компонент: Messages
 * 
 * Компонент для отображения множества сообщений,
 * использует Message из UIKIT.
 */

export default {
    title: 'Настоящее/Messages',
    component: Messages,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Компонент для отображения множества сообщений, использует Message из UIKIT.'
            }
        }
    },
    tags: ['autodocs'],
};

const mockMessages = [
    { severity: 'success', text: 'Первое сообщение об успехе' },
    { severity: 'info', text: 'Второе информационное сообщение' },
    { severity: 'warn', text: 'Третье предупреждение' },
];

export const Default = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <Messages messages={mockMessages} />
        </div>
    )
};

