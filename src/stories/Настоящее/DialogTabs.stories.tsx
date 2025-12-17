import React, { useState } from 'react';
import { DialogTabs } from 'uikit-main/DialogTabs';
import '../design-system.scss';
import 'uikit-main/DialogTabs/dialogTabs.scss';

/**
 * Компонент: DialogTabs
 * 
 * Диалог с переключаемым по табам контентом в виде текста
 * с возможностью скачивания контента в формате лога.
 */

export default {
    title: 'Настоящее/DialogTabs',
    component: DialogTabs,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Диалог с переключаемым по табам контентом в виде текста с возможностью скачивания контента в формате лога.'
            }
        }
    },
    tags: ['autodocs'],
};

const mockData = [
    { label: 'Лог 1', content: 'Содержимое первого лога\nСтрока 2\nСтрока 3' },
    { label: 'Лог 2', content: 'Содержимое второго лога\nДополнительная информация' },
    { label: 'Лог 3', content: 'Содержимое третьего лога' },
];

export const Default = {
    render: () => {
        const [visible, setVisible] = useState(false);
        return (
            <div style={{ padding: '20px' }}>
                <button onClick={() => setVisible(true)} style={{ padding: '10px 20px' }}>
                    Открыть диалог
                </button>
                <DialogTabs
                    visible={visible}
                    onHide={() => setVisible(false)}
                    data={mockData}
                />
            </div>
        );
    }
};

