import React from 'react';
import { ConfirmDialogProvider } from 'uikit-main/context/ConfirmDialogContext';
import { useConfirmDialog } from 'uikit-main/hook/useConfirmDialog';
import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog';
import '../design-system.scss';

/**
 * Компонент: ConfirmDialog
 * 
 * Провайдер для глобального управления модальными диалогами подтверждения.
 */

const ConfirmDialogExample = () => {
    const { confirmInfo } = useConfirmDialog();

    return (
        <div style={{ padding: '20px' }}>
            <Button
                label="Показать диалог подтверждения"
                onClick={() =>
                    confirmInfo({
                        message: 'Вы уверены, что хотите выполнить это действие?',
                        header: 'Подтверждение',
                        accept: () => alert('Действие подтверждено'),
                        reject: () => alert('Действие отменено'),
                    })
                }
            />
            <ConfirmDialog />
        </div>
    );
};

export default {
    title: 'Настоящее/ConfirmDialog',
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Провайдер для глобального управления модальными диалогами подтверждения.'
            }
        }
    },
    decorators: [
        (Story) => (
            <ConfirmDialogProvider>
                <Story />
            </ConfirmDialogProvider>
        ),
    ],
    tags: ['autodocs'],
};

export const Default = {
    render: () => <ConfirmDialogExample />
};













