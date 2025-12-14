import React from 'react';
import { UIkitProvider } from 'uikit-main/UIkitProvider';
import { useToast } from 'uikit-main/hook/useToast';
import { useConfirmDialog } from 'uikit-main/hook/useConfirmDialog';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { ConfirmDialog } from 'primereact/confirmdialog';
import '../design-system.scss';

/**
 * Компонент: UIkitProvider
 * 
 * Единая обвязка для всех провайдеров uikit'а
 * (Toast, BlockUI, ContextMenu, ConfirmDialog, AbsoluteTooltip).
 */

const UIkitProviderExample = () => {
    const { showToast } = useToast();
    const { confirmInfo } = useConfirmDialog();

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
                <Button
                    label="Показать Toast"
                    onClick={() => showToast({ severity: 'info', summary: 'Тест', detail: 'UIkitProvider работает' })}
                />
                <Button
                    label="Показать ConfirmDialog"
                    onClick={() =>
                        confirmInfo({
                            message: 'Это диалог подтверждения',
                            header: 'Подтверждение',
                            accept: () => alert('Принято'),
                        })
                    }
                />
            </div>
            <Toast />
            <ConfirmDialog />
        </div>
    );
};

export default {
    title: 'Настоящее/UIkitProvider',
    component: UIkitProvider,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Единая обвязка для всех провайдеров uikit\'а (Toast, BlockUI, ContextMenu, ConfirmDialog, AbsoluteTooltip).'
            }
        }
    },
    decorators: [
        (Story) => (
            <UIkitProvider>
                <Story />
            </UIkitProvider>
        ),
    ],
    tags: ['autodocs'],
};

export const Default = {
    render: () => <UIkitProviderExample />
};

export const WithAbsoluteTooltip = {
    render: () => (
        <UIkitProvider withAbsoluteTooltip={true}>
            <div style={{ padding: '50px', textAlign: 'center' }}>
                <button
                    data-tooltip-content="Тултип работает через UIkitProvider"
                    data-tooltip-position="top"
                    data-tooltip-id="default"
                    style={{ padding: '10px 20px' }}
                >
                    Наведите на меня
                </button>
            </div>
        </UIkitProvider>
    )
};













