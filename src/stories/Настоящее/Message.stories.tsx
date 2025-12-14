import React from 'react';
import { Message } from 'uikit-main/Message';
import '../design-system.scss';
import 'uikit-main/Message/index.scss';

/**
 * Компонент: Message
 * 
 * Расширенная обёртка над Message из PrimeReact с поддержкой
 * кастомных иконок, кнопок действия, переключаемого контента
 * и управления видимостью через ref.
 */

export default {
    title: 'Настоящее/Message',
    component: Message,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Расширенная обёртка над Message из PrimeReact с поддержкой кастомных иконок, кнопок действия, переключаемого контента и управления видимостью через ref.'
            }
        }
    },
    tags: ['autodocs'],
};

export const Success = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <Message severity="success" text="Операция выполнена успешно" />
        </div>
    )
};

export const Info = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <Message severity="info" text="Информационное сообщение" />
        </div>
    )
};

export const Warning = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <Message severity="warn" text="Предупреждение" />
        </div>
    )
};

export const Error = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <Message severity="error" text="Произошла ошибка" />
        </div>
    )
};

export const Closable = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <Message severity="info" text="Это сообщение можно закрыть" closable={true} />
        </div>
    )
};

export const WithToggledContent = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <Message
                severity="info"
                text="Сообщение с дополнительным контентом"
                toggledContent="Это дополнительный контент, который можно показать или скрыть"
            />
        </div>
    )
};

export const WithActions = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <Message
                severity="warn"
                text="Подтвердите действие"
                acceptBtn={true}
                rejectBtn={true}
                onAccept={() => alert('Принято')}
                onReject={() => alert('Отклонено')}
            />
        </div>
    )
};

