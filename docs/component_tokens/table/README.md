# Создание компонентных токенов для таблицы

## Задача

Я дизайнер и у меня задача создать компонент "таблица". Мне нужно определить все токены, которые будут использоваться для стилизации этого компонента. В этой документации я опишу процесс создания токенов для всех четырех подходов к организации семантических токенов.

## Общие части для всех подходов

### Структура компонента

Все подходы используют одинаковую структуру таблицы:
- **Элементы**: header (заголовок), row (строка), cell (ячейка)
- **Состояния строк**: default, hover, selected
- **Элементы стилизации**: background, text, border, spacing, typography

### Основные токены

Независимо от подхода, таблица требует следующие токены:
- `table.header.*` — заголовок (background, text, border)
- `table.row.*` — строки (background для всех состояний, text, border)
- `table.cell.*` — ячейки (padding, text)
- `table.border.*` — границы
- `table.typography.*` — типографика (header, body)
- `table.spacing.*` — отступы (row_gap, cell_gap)

## Различия между подходами

### 1. Подход по функциональности

**Философия**: Думаю о том, **что делает** каждый элемент.

**Ключевые семантические токены**:
- `semantic_functional.color.background.secondary` — для заголовка (вторичный фон)
- `semantic_functional.color.background.primary` — для строк (основной фон)
- `semantic_functional.color.action.primary` — для selected строки (действие выбора)
- `semantic_functional.color.text.primary` — основной текст
- `semantic_functional.color.text.inverse` — текст на selected строке

**Особенности мышления**:
- Заголовок = структурирует данные → `background.secondary`
- Строка = содержит данные → `background.primary`
- Selected = действие → `action.primary`

**Преимущества**: Интуитивность, понятное назначение каждого элемента.

### 2. Подход по ролям

**Философия**: Думаю о **роли** каждого элемента в системе.

**Ключевые семантические токены**:
- `semantic_roles.color.surface.secondary` — для заголовка (вторичная поверхность)
- `semantic_roles.color.surface.primary` — для строк (основная поверхность)
- `semantic_roles.color.interactive.default` — для selected строки (интерактивный элемент)
- `semantic_roles.color.neutral.text_primary` — нейтральный текст
- `semantic_roles.color.brand.primary` — для sorted колонки (брендовый элемент)

**Особенности мышления**:
- Заголовок = поверхность → `surface.secondary`
- Строка = поверхность → `surface.primary`
- Selected = интерактивный элемент → `interactive.*`
- Sorted = бренд → `brand.primary`

**Преимущества**: Идеально для White Label, системность мышления.

### 3. Подход по иерархии

**Философия**: Думаю о **уровне важности** каждого элемента.

**Ключевые семантические токены**:
- `semantic_hierarchy.color.level_2.background` — для заголовка (средний уровень)
- `semantic_hierarchy.color.level_1.background` — для строк (основной уровень)
- `semantic_hierarchy.color.level_1.action` — для selected строки (действие первого уровня)
- `semantic_hierarchy.color.level_1.text` — основной текст
- `semantic_hierarchy.color.level_2.text_secondary` — вторичный текст

**Особенности мышления**:
- Заголовок = level_2 → `color.level_2.*`
- Строка = level_1 → `color.level_1.*`
- Selected = level_1.action → важное действие
- Вторичный текст = level_2 → менее важный

**Преимущества**: Четкая визуальная иерархия, легко масштабировать.

### 4. Подход по контексту

**Философия**: Использую готовые токены из контекста похожих компонентов.

**Ключевые семантические токены**:
- `semantic_context.color.card.*` — для строк и ячеек (строка похожа на карточку)
- `semantic_context.color.button.primary.*` — для selected строки (действие выбора)
- `semantic_context.spacing.card.*` — для spacing
- `semantic_context.typography.card.*` — для типографики

**Особенности мышления**:
- Строка = карточка → `color.card.*`
- Selected = действие → `color.button.primary.*`
- Переиспользование контекстных токенов

**Преимущества**: Консистентность с другими компонентами, простота.

## Сравнительная таблица

| Аспект | Функциональность | Роли | Иерархия | Контекст |
|--------|------------------|------|----------|----------|
| **Header фон** | `background.secondary` | `surface.secondary` | `level_2.background` | `card.background` |
| **Row фон** | `background.primary` | `surface.primary` | `level_1.background` | `card.background` |
| **Selected фон** | `action.primary` | `interactive.default` | `level_1.action` | `button.primary.background` |
| **Row текст** | `text.primary` | `neutral.text_primary` | `level_1.text` | `card.text` |
| **Сложность** | Низкая | Средняя | Средняя | Низкая |
| **White Label** | Сложно | Идеально | Средне | Сложно |

## Особенности для таблицы

Таблица имеет сложную структуру, которая требует правильной обработки:
- **Заголовок** — должен выделяться, но не доминировать
- **Hover** — должен быть заметным, но не отвлекающим
- **Selected** — должен быть четко виден
- **Границы** — должны помогать читать данные, не перегружая интерфейс

## Детальная документация по каждому подходу

Для более подробного изучения каждого подхода, см. отдельные документы:

- [Подход по функциональности](functional.md)
- [Подход по ролям](roles.md)
- [Подход по иерархии](hierarchy.md)
- [Подход по контексту](context.md)

