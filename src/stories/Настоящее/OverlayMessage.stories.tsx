import React, { useRef, useState } from 'react';
import { OverlayMessage } from 'uikit-main/OverlayMessage';
import { Button } from 'primereact/button';
import '../design-system.scss';

/**
 * Компонент: OverlayMessage
 * 
 * Сообщение во всплывающей панели, комбинация OverlayPanel и Message.
 */

export default {
    title: 'Настоящее/OverlayMessage',
    component: OverlayMessage,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Сообщение во всплывающей панели, комбинация OverlayPanel и Message.'
            }
        }
    },
    tags: ['autodocs'],
};

export const Default = {
    render: () => {
        const targetRef = useRef(null);
        const [visible, setVisible] = useState(false);
        return (
            <div style={{ padding: '50px', textAlign: 'center' }}>
                <Button
                    ref={targetRef}
                    label="Показать сообщение"
                    onClick={() => setVisible(true)}
                />
                <OverlayMessage
                    target={targetRef}
                    visible={visible}
                    onHide={() => setVisible(false)}
                    severity="info"
                    text="Это сообщение во всплывающей панели"
                />
            </div>
        );
    }
};

export const WithDifferentSeverities = {
    render: () => {
        const targetRef = useRef(null);
        const [visible, setVisible] = useState(false);
        const [severity, setSeverity] = useState<'success' | 'info' | 'warn' | 'error'>('info');
        return (
            <div style={{ padding: '50px', textAlign: 'center' }}>
                <div style={{ marginBottom: '20px' }}>
                    <Button
                        label="Success"
                        onClick={() => {
                            setSeverity('success');
                            setVisible(true);
                        }}
                        style={{ marginRight: '10px' }}
                    />
                    <Button
                        label="Info"
                        onClick={() => {
                            setSeverity('info');
                            setVisible(true);
                        }}
                        style={{ marginRight: '10px' }}
                    />
                    <Button
                        label="Warning"
                        onClick={() => {
                            setSeverity('warn');
                            setVisible(true);
                        }}
                        style={{ marginRight: '10px' }}
                    />
                    <Button
                        label="Error"
                        onClick={() => {
                            setSeverity('error');
                            setVisible(true);
                        }}
                    />
                </div>
                <Button ref={targetRef} label="Целевая кнопка" />
                <OverlayMessage
                    target={targetRef}
                    visible={visible}
                    onHide={() => setVisible(false)}
                    severity={severity}
                    text={`Сообщение с severity: ${severity}`}
                />
            </div>
        );
    }
};













