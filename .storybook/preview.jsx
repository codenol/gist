import React from 'react';
import { Provider } from 'react-redux';
import { addLocale } from 'primereact/api';
import { mockStore } from './store';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
// @grafana/ui стили загружаются автоматически через компоненты
// import '@grafana/ui/dist/index.css'; // Убрано - файл может не существовать
// import '../src/App.scss'; // Убрано - файл не существует
import './preview.scss';
// Импорт tokens.scss через алиас
import '@design-tokens/tokens.scss';

// Настройка русской локали для PrimeReact
addLocale('ru', {
    firstDayOfWeek: 1,
    dayNames: ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    dayNamesShort: ['Воск', 'Пон', 'Втор', 'Сре', 'Чет', 'Пят', 'Суб'],
    dayNamesMin: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
    monthNames: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентебрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    today: 'Сегодня',
    clear: 'Очистить',
});

// Функция для применения темы
const applyTheme = (themeValue) => {
    if (typeof document === 'undefined') return;
    
    const body = document.body;
    const html = document.documentElement;
    
    // Удаляем все классы тем
    body.classList.remove('layout-theme-light', 'layout-theme-dark');
    html.classList.remove('layout-theme-light', 'layout-theme-dark');
    
    // Применяем выбранную тему
    if (themeValue === 'light') {
        body.classList.add('layout-theme-light');
        html.classList.add('layout-theme-light');
    } else if (themeValue === 'dark') {
        body.classList.add('layout-theme-dark');
        html.classList.add('layout-theme-dark');
    }
    // Для 'system' не добавляем классы, используется системная тема через media queries
    
    // Также применяем к возможным контейнерам Storybook
    const storybookRoot = document.getElementById('storybook-root');
    const root = document.getElementById('root');
    const storybookPreview = document.querySelector('[id*="storybook-preview"]');
    const storybookWrapper = document.querySelector('[class*="storybook"]');
    
    // Применяем к storybook-root
    if (storybookRoot) {
        storybookRoot.classList.remove('layout-theme-light', 'layout-theme-dark');
        if (themeValue === 'light') {
            storybookRoot.classList.add('layout-theme-light');
        } else if (themeValue === 'dark') {
            storybookRoot.classList.add('layout-theme-dark');
        }
    }
    
    // Применяем к root
    if (root) {
        root.classList.remove('layout-theme-light', 'layout-theme-dark');
        if (themeValue === 'light') {
            root.classList.add('layout-theme-light');
        } else if (themeValue === 'dark') {
            root.classList.add('layout-theme-dark');
        }
    }
    
    // Применяем к другим возможным контейнерам Storybook
    if (storybookPreview) {
        storybookPreview.classList.remove('layout-theme-light', 'layout-theme-dark');
        if (themeValue === 'light') {
            storybookPreview.classList.add('layout-theme-light');
        } else if (themeValue === 'dark') {
            storybookPreview.classList.add('layout-theme-dark');
        }
    }
    
    if (storybookWrapper) {
        storybookWrapper.classList.remove('layout-theme-light', 'layout-theme-dark');
        if (themeValue === 'light') {
            storybookWrapper.classList.add('layout-theme-light');
        } else if (themeValue === 'dark') {
            storybookWrapper.classList.add('layout-theme-dark');
        }
    }
    
    // Также применяем к iframe, если Storybook использует iframe
    try {
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach((iframe) => {
            try {
                if (iframe.contentDocument && iframe.contentDocument.body) {
                    const iframeBody = iframe.contentDocument.body;
                    const iframeHtml = iframe.contentDocument.documentElement;
                    
                    if (iframeBody) {
                        iframeBody.classList.remove('layout-theme-light', 'layout-theme-dark');
                        if (themeValue === 'light') {
                            iframeBody.classList.add('layout-theme-light');
                        } else if (themeValue === 'dark') {
                            iframeBody.classList.add('layout-theme-dark');
                        }
                    }
                    
                    if (iframeHtml) {
                        iframeHtml.classList.remove('layout-theme-light', 'layout-theme-dark');
                        if (themeValue === 'light') {
                            iframeHtml.classList.add('layout-theme-light');
                        } else if (themeValue === 'dark') {
                            iframeHtml.classList.add('layout-theme-dark');
                        }
                    }
                }
            } catch (e) {
                // Игнорируем ошибки доступа к iframe (CORS)
            }
        });
    } catch (e) {
        // Игнорируем ошибки
    }
};

// Применяем тему по умолчанию при загрузке
if (typeof document !== 'undefined') {
    // Применяем светлую тему по умолчанию
    applyTheme('light');
}

// Компонент-обертка для применения темы
const ThemeDecorator = ({ children, theme }) => {
    // Применяем тему синхронно при монтировании и при изменении
    React.useLayoutEffect(() => {
        applyTheme(theme);
        
        // Применяем несколько раз для надежности
        const timeouts = [
            setTimeout(() => applyTheme(theme), 0),
            setTimeout(() => applyTheme(theme), 50),
            setTimeout(() => applyTheme(theme), 100),
        ];
        
        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, [theme]);
    
    // Дополнительно применяем через useEffect для надежности
    React.useEffect(() => {
        applyTheme(theme);
        
        // Также применяем с задержками для случаев, когда DOM еще не готов
        const timeouts = [
            setTimeout(() => applyTheme(theme), 10),
            setTimeout(() => applyTheme(theme), 100),
            setTimeout(() => applyTheme(theme), 300),
        ];
        
        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, [theme]);
    
    // Определяем класс темы для обертки
    const themeClass = theme === 'light' 
        ? 'layout-theme-light' 
        : theme === 'dark' 
        ? 'layout-theme-dark' 
        : '';

    // Оборачиваем children в div с классом темы, чтобы CSS переменные применялись
    return (
        <div 
            className={themeClass} 
            style={{ 
                minHeight: '100vh', 
                width: '100%',
                background: 'var(--background-card-level-1)',
                padding: '1rem',
                overflow: 'visible'
            }}
        >
            {children}
        </div>
    );
};

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: 'todo',
        },

        backgrounds: {
            disable: true, // Отключаем стандартные фоны Storybook, используем темы проекта
        },

        options: {
            storySort: (a, b) => {
                // Определяем порядок категорий верхнего уровня
                const CATEGORY_ORDER = [
                    'начни тут',
                    'настоящее',
                    'будущее',
                    'устаревшее',
                ];

                const aTitle = a.title.toLowerCase();
                const bTitle = b.title.toLowerCase();
                const [aCategory] = aTitle.split('/');
                const [bCategory] = bTitle.split('/');

                // Сортируем по категориям верхнего уровня
                const aCategoryIndex = CATEGORY_ORDER.indexOf(aCategory);
                const bCategoryIndex = CATEGORY_ORDER.indexOf(bCategory);

                // Если категории найдены в порядке, сортируем по порядку
                if (aCategoryIndex !== -1 && bCategoryIndex !== -1) {
                    if (aCategoryIndex !== bCategoryIndex) {
                        return aCategoryIndex - bCategoryIndex;
                    }
                }

                // Если одна из категорий не найдена, ставим её в конец
                if (aCategoryIndex === -1 && bCategoryIndex !== -1) {
                    return 1;
                }
                if (aCategoryIndex !== -1 && bCategoryIndex === -1) {
                    return -1;
                }

                // Внутри категории сортируем "Начни тут" первым
                if (aTitle.includes('начни тут') && !bTitle.includes('начни тут')) {
                    return -1;
                }
                if (!aTitle.includes('начни тут') && bTitle.includes('начни тут')) {
                    return 1;
                }

                // Docs страницы идут первыми внутри категории
                if (a.type === 'docs' && b.type !== 'docs') {
                    return -1;
                }
                if (a.type !== 'docs' && b.type === 'docs') {
                    return 1;
                }

                // Остальное сортируем алфавитно
                return aTitle.localeCompare(bTitle, undefined, { numeric: true });
            },
        },
    },

    globalTypes: {
        theme: {
            description: 'Тема приложения',
            defaultValue: 'light',
            toolbar: {
                title: 'Тема',
                icon: 'circlehollow',
                items: [
                    { value: 'light', title: 'Светлая', icon: 'circlehollow' },
                    { value: 'dark', title: 'Темная', icon: 'circle' },
                    { value: 'system', title: 'Системная', icon: 'sidebar' },
                ],
                dynamicTitle: true,
            },
        },
    },

    decorators: [
        (Story, context) => {
            const theme = context.globals.theme || 'light';
            return (
                <Provider store={mockStore}>
                    <ThemeDecorator theme={theme}>
                        <Story />
                    </ThemeDecorator>
                </Provider>
            );
        },
    ],
};

export default preview;

