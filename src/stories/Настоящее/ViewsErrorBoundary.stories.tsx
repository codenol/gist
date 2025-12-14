import React from 'react';
import { ViewsErrorBoundary } from 'uikit-main/ViewsErrorBoundary';
import '../design-system.scss';

/**
 * Компонент: ViewsErrorBoundary
 * 
 * Компонент для обработки ошибок с возможностью показать подробности
 * и обновить страницу.
 */

const ErrorComponent = ({ shouldThrow }: { shouldThrow: boolean }) => {
    if (shouldThrow) {
        throw new Error('Тестовая ошибка для демонстрации ErrorBoundary');
    }
    return <div>Компонент работает нормально</div>;
};

class ErrorBoundary extends React.Component<
    { children: React.ReactNode },
    { error: Error | null; hasError: boolean }
> {
    constructor(props: { children: React.ReactNode }) {
        super(props);
        this.state = { error: null, hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    resetErrorBoundary = () => {
        this.setState({ hasError: false, error: null });
    };

    render() {
        if (this.state.hasError) {
            return <ViewsErrorBoundary error={this.state.error} resetErrorBoundary={this.resetErrorBoundary} />;
        }
        return this.props.children;
    }
}

export default {
    title: 'Настоящее/ViewsErrorBoundary',
    component: ViewsErrorBoundary,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Компонент для обработки ошибок с возможностью показать подробности и обновить страницу.'
            }
        }
    },
    tags: ['autodocs'],
};

export const Default = {
    render: () => {
        const [shouldThrow, setShouldThrow] = React.useState(false);
        return (
            <ErrorBoundary>
                <div style={{ padding: '20px' }}>
                    <button
                        onClick={() => setShouldThrow(true)}
                        style={{ padding: '10px 20px', marginBottom: '20px' }}
                    >
                        Вызвать ошибку
                    </button>
                    <ErrorComponent shouldThrow={shouldThrow} />
                </div>
            </ErrorBoundary>
        );
    }
};













