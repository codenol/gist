import React, { useState } from 'react';
import { StepWizard } from 'uikit-main/StepWizard';
import '../design-system.scss';
import 'uikit-main/StepWizard/stepWizard.scss';

/**
 * Компонент: StepWizard
 * 
 * Визард со списком шагов, поддерживает различные статусы шагов
 * (DONE, PROCESSING, ERROR, WARNING).
 */

export default {
    title: 'Настоящее/StepWizard',
    component: StepWizard,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Визард со списком шагов, поддерживает различные статусы шагов (DONE, PROCESSING, ERROR, WARNING).'
            }
        }
    },
    tags: ['autodocs'],
};

export const Default = {
    render: () => {
        const [currentStep, setCurrentStep] = useState(0);
        const steps = [
            { name: 'Шаг 1', status: 'DONE' as const, content: <div>Содержимое шага 1</div> },
            { name: 'Шаг 2', status: 'PROCESSING' as const, content: <div>Содержимое шага 2</div> },
            { name: 'Шаг 3', status: 'NONE' as const, content: <div>Содержимое шага 3</div> },
        ];
        return (
            <div style={{ padding: '20px', maxWidth: '800px' }}>
                <StepWizard
                    steps={steps}
                    content={steps[currentStep]?.content}
                    onStepClick={(step, index) => setCurrentStep(index)}
                />
            </div>
        );
    }
};

export const WithError = {
    render: () => {
        const steps = [
            { name: 'Шаг 1', status: 'DONE' as const },
            { name: 'Шаг 2', status: 'ERROR' as const },
            { name: 'Шаг 3', status: 'NONE' as const },
        ];
        return (
            <div style={{ padding: '20px', maxWidth: '800px' }}>
                <StepWizard steps={steps} />
            </div>
        );
    }
};

export const WithWarning = {
    render: () => {
        const steps = [
            { name: 'Шаг 1', status: 'DONE' as const },
            { name: 'Шаг 2', status: 'WARNING' as const },
            { name: 'Шаг 3', status: 'NONE' as const },
        ];
        return (
            <div style={{ padding: '20px', maxWidth: '800px' }}>
                <StepWizard steps={steps} />
            </div>
        );
    }
};

export const AllStatuses = {
    render: () => {
        const steps = [
            { name: 'Завершено', status: 'DONE' as const },
            { name: 'В процессе', status: 'PROCESSING' as const },
            { name: 'Ошибка', status: 'ERROR' as const },
            { name: 'Предупреждение', status: 'WARNING' as const },
            { name: 'Не начато', status: 'NONE' as const },
        ];
        return (
            <div style={{ padding: '20px', maxWidth: '800px' }}>
                <StepWizard steps={steps} />
            </div>
        );
    }
};

