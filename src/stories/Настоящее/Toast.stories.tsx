import React from 'react';
import { ToastProvider } from 'uikit-main/context/ToastContext';
import { useToast } from 'uikit-main/hook/useToast';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import '../design-system.scss';

/**
 * Компонент: Toast
 * 
 * Провайдер для глобального управления всплывающими уведомлениями.
 */

const ToastExample = () => {
    const { showToast } = useToast();

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
                <Button
                    label="Показать Success"
                    onClick={() => showToast({ severity: 'success', summary: 'Успешно', detail: 'Операция выполнена' })}
                />
                <Button
                    label="Показать Info"
                    onClick={() => showToast({ severity: 'info', summary: 'Информация', detail: 'Информационное сообщение' })}
                />
                <Button
                    label="Показать Warning"
                    onClick={() => showToast({ severity: 'warn', summary: 'Предупреждение', detail: 'Предупреждающее сообщение' })}
                />
                <Button
                    label="Показать Error"
                    onClick={() => showToast({ severity: 'error', summary: 'Ошибка', detail: 'Произошла ошибка' })}
                />
            </div>
            <Toast />
        </div>
    );
};

export default {
    title: 'Настоящее/Toast',
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Провайдер для глобального управления всплывающими уведомлениями.'
            }
        }
    },
    decorators: [
        (Story) => (
            <ToastProvider>
                <Story />
            </ToastProvider>
        ),
    ],
    tags: ['autodocs'],
};

export const Default = {
    render: () => <ToastExample />
};













