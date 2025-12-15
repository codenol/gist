# Создание компонентных токенов для инпута

## Задача

Я дизайнер и у меня задача создать компонент "инпут" (поле ввода). Мне нужно определить все токены, которые будут использоваться для стилизации этого компонента. В этой документации я опишу процесс создания токенов для всех четырех подходов к организации семантических токенов.

## Общие части для всех подходов

### Структура компонента

Все подходы используют одинаковую структуру инпута:
- **Состояния**: default, hover, focus, error, disabled
- **Размеры**: small, medium, large
- **Элементы**: background, text, placeholder, border, padding, typography, border_radius

### Основные токены

Независимо от подхода, инпут требует следующие токены:
- `input.background.*` — фон для всех состояний
- `input.text.*` — текст (default, placeholder, disabled)
- `input.border.*` — граница для всех состояний (default, hover, focus, error, disabled)
- `input.padding.*` — отступы
- `input.typography.*` — типографика
- `input.size.*` — размеры

## Различия между подходами

### 1. Подход по функциональности

**Философия**: Думаю о том, **что делает** каждый элемент.

**Ключевые семантические токены**:
- `semantic_functional.color.background.primary` — белый фон для ввода данных
- `semantic_functional.color.text.primary` — основной текст
- `semantic_functional.color.text.tertiary` — placeholder (менее важный текст)
- `semantic_functional.color.border.focus` — граница в фокусе (важное функциональное состояние)
- `semantic_functional.color.status.error_background` — фон ошибки

**Особенности мышления**:
- Фон = функциональная роль → `color.background.*`
- Текст = функциональная роль → `color.text.*`
- Фокус = важное состояние → `color.border.focus`
- Ошибка = статус → `color.status.*`

**Преимущества**: Интуитивность, четкое понимание функционального назначения.

### 2. Подход по ролям

**Философия**: Думаю о **роли** каждого элемента в системе.

**Ключевые семантические токены**:
- `semantic_roles.color.surface.primary` — поверхность для ввода
- `semantic_roles.color.neutral.text_primary` — нейтральный текст
- `semantic_roles.color.neutral.text_tertiary` — нейтральный placeholder
- `semantic_roles.color.interactive.focus` — интерактивное состояние фокуса
- `semantic_roles.color.status.error` — статус ошибки

**Особенности мышления**:
- Инпут = поверхность → `color.surface.*`
- Текст = нейтральный элемент → `color.neutral.*`
- Фокус = интерактивное состояние → `color.interactive.*`
- Ошибка = статус → `color.status.*`

**Преимущества**: Идеально для White Label, четкое разделение ролей.

### 3. Подход по иерархии

**Философия**: Думаю о **уровне важности** каждого элемента.

**Ключевые семантические токены**:
- `semantic_hierarchy.color.level_1.background` — основной уровень для активного инпута
- `semantic_hierarchy.color.level_1.text` — основной текст
- `semantic_hierarchy.color.level_1.action` — фокус (действие первого уровня)
- `semantic_hierarchy.color.level_3.text_secondary` — placeholder (третичный уровень)
- `semantic_hierarchy.color.level_2.background` — для disabled (менее важный)

**Особенности мышления**:
- Активный инпут = level_1 → `color.level_1.*`
- Placeholder = level_3 → `color.level_3.*`
- Disabled = level_2/level_3 → менее важные уровни
- Фокус = level_1.action → важное действие

**Преимущества**: Четкая иерархия важности, легко масштабировать.

### 4. Подход по контексту

**Философия**: Использую готовые токены из контекста инпута.

**Ключевые семантические токены**:
- `semantic_context.color.input.background` — уже определен!
- `semantic_context.color.input.text.*` — все состояния текста определены!
- `semantic_context.color.input.border.*` — все состояния границы определены!
- `semantic_context.spacing.input.*` — все spacing определены!

**Особенности мышления**:
- Просто мапплю компонентные токены на контекстные
- Все уже готово в контексте инпута
- Не нужно думать о функциональности, ролях или иерархии

**Преимущества**: Максимальная простота, специфичность для компонента.

## Сравнительная таблица

| Аспект | Функциональность | Роли | Иерархия | Контекст |
|--------|------------------|------|----------|----------|
| **Фон default** | `background.primary` | `surface.primary` | `level_1.background` | `input.background` |
| **Текст default** | `text.primary` | `neutral.text_primary` | `level_1.text` | `input.text` |
| **Placeholder** | `text.tertiary` | `neutral.text_tertiary` | `level_3.text_secondary` | `input.text_placeholder` |
| **Border focus** | `border.focus` | `interactive.focus` | `level_1.action` | `input.border_focus` |
| **Border error** | `border.error` | `status.error` | `status.error` | `input.border_error` |
| **Сложность** | Низкая | Средняя | Средняя | Очень низкая |
| **White Label** | Сложно | Идеально | Средне | Сложно |

## Особенности для инпута

Инпут имеет уникальные состояния, которые важно правильно обработать:
- **Focus** — критически важное состояние для доступности
- **Error** — должно быть четко видно пользователю
- **Placeholder** — должен быть менее заметным, чем основной текст
- **Disabled** — должен явно показывать неактивность

## Детальная документация по каждому подходу

Для более подробного изучения каждого подхода, см. отдельные документы:

- [Подход по функциональности](functional.md)
- [Подход по ролям](roles.md)
- [Подход по иерархии](hierarchy.md)
- [Подход по контексту](context.md)

