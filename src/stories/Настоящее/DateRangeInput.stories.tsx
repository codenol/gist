import React, { useState } from 'react';
import { DateRangeInput } from 'uikit-main/DateRangeInput';
import '../design-system.scss';
import 'uikit-main/DateRangeInput/dateRangeInput.scss';

/**
 * Компонент: DateRangeInput
 * 
 * Кастомный инпут с выбором даты начала и конца интервала,
 * поддерживает "быстрые" интервалы.
 */

export default {
    title: 'Настоящее/DateRangeInput',
    component: DateRangeInput,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Кастомный инпут с выбором даты начала и конца интервала, поддерживает "быстрые" интервалы.'
            }
        }
    },
    tags: ['autodocs'],
};

export const Default = {
    render: () => {
        const [range, setRange] = useState(null);
        return (
            <div style={{ padding: '20px', maxWidth: '400px' }}>
                <DateRangeInput
                    value={range}
                    onChange={(e) => setRange(e.value)}
                />
            </div>
        );
    }
};

export const WithQuickIntervals = {
    render: () => {
        const [range, setRange] = useState(null);
        return (
            <div style={{ padding: '20px', maxWidth: '400px' }}>
                <DateRangeInput
                    value={range}
                    onChange={(e) => setRange(e.value)}
                    quickIntervals={['today', 'yesterday', 'last7days', 'last30days']}
                />
            </div>
        );
    }
};

