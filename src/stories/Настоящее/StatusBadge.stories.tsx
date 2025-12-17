import React from 'react';
import { StatusBadge } from 'uikit-main/StatusBadge';
import '../design-system.scss';
import 'uikit-main/StatusBadge/statusBadge.scss';

/**
 * Компонент: StatusBadge
 * 
 * Цветной бейдж со статусом, поддерживает различные коды статусов
 * и анимацию обновления.
 */

export default {
    title: 'Настоящее/StatusBadge',
    component: StatusBadge,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Цветной бейдж со статусом, поддерживает различные коды статусов и анимацию обновления.'
            }
        }
    },
    tags: ['autodocs'],
};

export const Success = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <StatusBadge code="ok" name="Успешно" />
        </div>
    )
};

export const Processing = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <StatusBadge code="PROCESSING" name="В процессе" />
        </div>
    )
};

export const Warning = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <StatusBadge code="Warning" name="Предупреждение" />
        </div>
    )
};

export const Critical = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <StatusBadge code="Critical" name="Критично" />
        </div>
    )
};

export const Small = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <StatusBadge code="ok" name="Успешно" isSmall={true} />
        </div>
    )
};

export const Updating = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <StatusBadge code="ok" name="Обновляется" isUpdating={true} />
        </div>
    )
};

export const AllStatuses = {
    render: () => (
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <StatusBadge code="ok" name="Успешно" />
            <StatusBadge code="PROCESSING" name="В процессе" />
            <StatusBadge code="Warning" name="Предупреждение" />
            <StatusBadge code="Critical" name="Критично" />
            <StatusBadge code="Down" name="Недоступно" />
            <StatusBadge code="N/A" name="Недоступно" />
            <StatusBadge code="NEW" name="Новый" />
        </div>
    )
};

