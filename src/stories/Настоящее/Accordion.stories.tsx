import React from 'react';
import { Accordion } from 'uikit-main/accordion';
import '../design-system.scss';
import 'uikit-main/accordion/index.scss';

/**
 * Компонент: Accordion
 * 
 * Кастомный аккордеон с анимацией открытия/закрытия,
 * поддерживает заголовок, иконку сворачивания и динамическое содержимое.
 */

export default {
    title: 'Настоящее/Accordion',
    component: Accordion,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Кастомный аккордеон с анимацией открытия/закрытия, поддерживает заголовок, иконку сворачивания и динамическое содержимое.'
            }
        }
    },
    tags: ['autodocs'],
};

export const Default = {
    render: () => (
        <div style={{ padding: '20px', maxWidth: '600px' }}>
            <Accordion
                id="accordion-1"
                header={<h3>Заголовок аккордеона</h3>}
            >
                <div style={{ padding: '20px' }}>
                    <p>Это содержимое аккордеона. Оно может содержать любой контент.</p>
                    <p>Аккордеон автоматически сворачивается и разворачивается при клике на заголовок.</p>
                </div>
            </Accordion>
        </div>
    )
};

export const Multiple = {
    render: () => (
        <div style={{ padding: '20px', maxWidth: '600px' }}>
            <Accordion
                id="accordion-2"
                header={<h3>Первый аккордеон</h3>}
            >
                <div style={{ padding: '20px' }}>
                    <p>Содержимое первого аккордеона.</p>
                </div>
            </Accordion>
            <Accordion
                id="accordion-3"
                header={<h3>Второй аккордеон</h3>}
            >
                <div style={{ padding: '20px' }}>
                    <p>Содержимое второго аккордеона.</p>
                </div>
            </Accordion>
            <Accordion
                id="accordion-4"
                header={<h3>Третий аккордеон</h3>}
            >
                <div style={{ padding: '20px' }}>
                    <p>Содержимое третьего аккордеона.</p>
                </div>
            </Accordion>
        </div>
    )
};

export const WithComplexContent = {
    render: () => (
        <div style={{ padding: '20px', maxWidth: '600px' }}>
            <Accordion
                id="accordion-5"
                header={<h3>Аккордеон с формой</h3>}
            >
                <div style={{ padding: '20px' }}>
                    <form>
                        <div style={{ marginBottom: '10px' }}>
                            <label>Имя: </label>
                            <input type="text" style={{ marginLeft: '10px', padding: '5px' }} />
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <label>Email: </label>
                            <input type="email" style={{ marginLeft: '10px', padding: '5px' }} />
                        </div>
                        <button type="submit" style={{ padding: '8px 16px' }}>Отправить</button>
                    </form>
                </div>
            </Accordion>
        </div>
    )
};

