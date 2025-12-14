import React from 'react';
import { BlockUIProvider } from 'uikit-main/context/BlockUIContext';
import { useBlockUI } from 'uikit-main/hook/useBlockUI';
import { Button } from 'primereact/button';
import '../design-system.scss';

/**
 * Компонент: BlockUI
 * 
 * Провайдер для блокировки UI с кастомными шаблонами.
 */

const BlockUIExample = () => {
    const { setUIblocked, resetUIblocker } = useBlockUI();

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
                <Button
                    label="Заблокировать UI"
                    onClick={() => setUIblocked(true)}
                    style={{ marginRight: '10px' }}
                />
                <Button
                    label="Разблокировать UI"
                    onClick={() => resetUIblocker()}
                />
            </div>
            <div style={{ padding: '20px', border: '1px solid #ccc', minHeight: '200px' }}>
                <p>Это контент, который будет заблокирован</p>
                <Button label="Кнопка внутри" />
            </div>
        </div>
    );
};

export default {
    title: 'Настоящее/BlockUI',
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Провайдер для блокировки UI с кастомными шаблонами.'
            }
        }
    },
    decorators: [
        (Story) => (
            <BlockUIProvider>
                <Story />
            </BlockUIProvider>
        ),
    ],
    tags: ['autodocs'],
};

export const Default = {
    render: () => <BlockUIExample />
};













