import React from 'react';
import {
    IconAcceptCircle,
    IconChevronCircle,
    IconCloseCircle,
    IconInfoCircle,
    IconWarningCircle,
} from 'uikit-main/IconsComponent';
import '../design-system.scss';

/**
 * Компонент: IconsComponent
 * 
 * Набор кастомных иконок: IconAcceptCircle, IconChevronCircle,
 * IconCloseCircle, IconInfoCircle, IconWarningCircle.
 */

export default {
    title: 'Настоящее/IconsComponent',
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Набор кастомных иконок: IconAcceptCircle, IconChevronCircle, IconCloseCircle, IconInfoCircle, IconWarningCircle.'
            }
        }
    },
    tags: ['autodocs'],
};

export const AllIcons = {
    render: () => (
        <div style={{ padding: '20px', display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
                <IconAcceptCircle size={48} />
                <p style={{ marginTop: '10px' }}>IconAcceptCircle</p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <IconChevronCircle size={48} />
                <p style={{ marginTop: '10px' }}>IconChevronCircle</p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <IconCloseCircle size={48} />
                <p style={{ marginTop: '10px' }}>IconCloseCircle</p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <IconInfoCircle size={48} />
                <p style={{ marginTop: '10px' }}>IconInfoCircle</p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <IconWarningCircle size={48} />
                <p style={{ marginTop: '10px' }}>IconWarningCircle</p>
            </div>
        </div>
    )
};

export const DifferentSizes = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
                <IconAcceptCircle size={24} />
                <span>24px</span>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
                <IconAcceptCircle size={32} />
                <span>32px</span>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
                <IconAcceptCircle size={48} />
                <span>48px</span>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <IconAcceptCircle size={64} />
                <span>64px</span>
            </div>
        </div>
    )
};













