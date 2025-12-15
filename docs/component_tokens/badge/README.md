# Создание компонентных токенов для бейджа

## Задача

Я дизайнер и у меня задача создать компонент "бейдж" (метка). Мне нужно определить все токены, которые будут использоваться для стилизации этого компонента. В этой документации я опишу процесс создания токенов для всех четырех подходов к организации семантических токенов.

## Общие части для всех подходов

### Структура компонента

Все подходы используют одинаковую структуру бейджа:
- **Варианты**: success, error, warning, info, neutral
- **Размеры**: small, medium, large
- **Элементы**: background, text, border, padding, typography, border_radius

### Основные токены

Независимо от подхода, бейдж требует следующие токены:
- `badge.variant.*` — варианты (success, error, warning, info, neutral)
- `badge.padding.*` — отступы
- `badge.border_radius` — скругление (обычно full/pill)
- `badge.typography.*` — типографика
- `badge.size.*` — размеры

## Различия между подходами

### 1. Подход по функциональности

**Философия**: Думаю о том, **что делает** каждый вариант бейджа.

**Ключевые семантические токены**:
- `semantic_functional.color.status.success_background` — для success (статус успеха)
- `semantic_functional.color.status.error_background` — для error (статус ошибки)
- `semantic_functional.color.status.warning_background` — для warning (статус предупреждения)
- `semantic_functional.color.action.primary` — для info (действие/информация)
- `semantic_functional.color.background.secondary` — для neutral (нейтральный фон)

**Особенности мышления**:
- Статусы = функциональная категория → `color.status.*`
- Info = действие → `color.action.*`
- Neutral = фон → `color.background.*`

**Преимущества**: Интуитивность, понятное назначение каждого варианта.

### 2. Подход по ролям

**Философия**: Думаю о **роли** каждого варианта в системе.

**Ключевые семантические токены**:
- `semantic_roles.color.status.success_background` — роль статуса успеха
- `semantic_roles.color.status.error_background` — роль статуса ошибки
- `semantic_roles.color.status.warning_background` — роль статуса предупреждения
- `semantic_roles.color.brand.primary` — для info (брендовая информация)
- `semantic_roles.color.surface.secondary` — для neutral (нейтральная поверхность)

**Особенности мышления**:
- Статусы = роль статуса → `color.status.*`
- Info = роль бренда → `color.brand.*`
- Neutral = роль нейтрального элемента → `color.surface.*` + `color.neutral.*`

**Преимущества**: Идеально для White Label, четкое разделение ролей.

### 3. Подход по иерархии

**Философия**: Думаю о **уровне важности** каждого варианта.

**Ключевые семантические токены**:
- `semantic_hierarchy.color.status.success_background` — статусы не привязаны к уровням
- `semantic_hierarchy.color.status.error_background` — статусы важны независимо
- `semantic_hierarchy.color.status.warning_background` — статусы важны независимо
- `semantic_hierarchy.color.level_1.action` — для info (важная информация)
- `semantic_hierarchy.color.level_2.background` — для neutral (менее важная информация)

**Особенности мышления**:
- Статусы = отдельная категория (не привязаны к уровням)
- Info = level_1 → важная информация
- Neutral = level_2 → менее важная информация

**Преимущества**: Четкая иерархия важности, статусы выделены отдельно.

### 4. Подход по контексту

**Философия**: Использую готовые токены из контекста похожих компонентов.

**Ключевые семантические токены**:
- `semantic_context.color.alert.success.*` — для success (бейдж похож на alert)
- `semantic_context.color.alert.error.*` — для error
- `semantic_context.color.alert.warning.*` — для warning
- `semantic_context.color.button.primary.*` — для info (похож на кнопку)
- `semantic_context.color.card.*` — для neutral (похож на карточку)

**Особенности мышления**:
- Статусы = alert → `color.alert.*`
- Info = button → `color.button.primary.*`
- Neutral = card → `color.card.*`
- Переиспользование контекстных токенов

**Преимущества**: Консистентность с другими компонентами, простота.

## Сравнительная таблица

| Аспект | Функциональность | Роли | Иерархия | Контекст |
|--------|------------------|------|----------|----------|
| **Success фон** | `status.success_background` | `status.success_background` | `status.success_background` | `alert.success.background` |
| **Error фон** | `status.error_background` | `status.error_background` | `status.error_background` | `alert.error.background` |
| **Info фон** | `action.primary` | `brand.primary` | `level_1.action` | `button.primary.background` |
| **Neutral фон** | `background.secondary` | `surface.secondary` | `level_2.background` | `card.background` |
| **Border radius** | `border_radius.full` | `border_radius.role.pill` | `border_radius.level_3` | `border_radius.alert` |
| **Сложность** | Низкая | Средняя | Средняя | Низкая |
| **White Label** | Сложно | Идеально | Средне | Сложно |

## Особенности для бейджа

Бейдж имеет уникальные особенности:
- **Варианты статусов** — должны быть четко различимы
- **Компактность** — бейдж должен быть компактным
- **Pill форма** — обычно используется полное скругление
- **Размеры** — должны масштабироваться пропорционально

## Детальная документация по каждому подходу

Для более подробного изучения каждого подхода, см. отдельные документы:

- [Подход по функциональности](functional.md)
- [Подход по ролям](roles.md)
- [Подход по иерархии](hierarchy.md)
- [Подход по контексту](context.md)

