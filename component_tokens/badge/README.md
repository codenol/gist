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

**Философия**: Создаю токены специально для компонента, ссылаясь напрямую на базовый слой.

**Ключевые особенности**:
- **Семантический слой не нужен** — компонентные токены ссылаются напрямую на `base.*`
- `badge.variant.success.background` → `{base.color.green.50}`
- `badge.variant.info.background` → `{base.color.blue.500}`
- `badge.padding.x` → `{base.spacing.sm}`
- Каждый компонент имеет свои собственные токены, не переиспользуемые другими компонентами

**Особенности мышления**:
- Это бейдж → создаю токены специально для бейджа
- Выбираю базовые токены напрямую, без промежуточного слоя
- Не нужно думать о функциональности, ролях или иерархии
- Токены максимально специфичны для компонента

**Преимущества**: Максимальная простота и скорость. Прямая связь с базовым слоем. Понятность.

**Недостатки**: Нет абстракции — сложнее менять значения для всех компонентов. Сложнее White Label — нужно менять компонентные токены.

## Сравнительная таблица

| Аспект | Функциональность | Роли | Иерархия | Контекст |
|--------|------------------|------|----------|----------|
| **Success фон** | `status.success_background` → `base.color.green.50` | `status.success_background` → `base.color.green.50` | `status.success_background` → `base.color.green.50` | `base.color.green.50` (напрямую) |
| **Error фон** | `status.error_background` → `base.color.red.50` | `status.error_background` → `base.color.red.50` | `status.error_background` → `base.color.red.50` | `base.color.red.50` (напрямую) |
| **Info фон** | `action.primary` → `base.color.blue.500` | `brand.primary` → `base.color.blue.500` | `level_1.action` → `base.color.blue.500` | `base.color.blue.500` (напрямую) |
| **Border radius** | `border_radius.full` → `base.border_radius.full` | `border_radius.role.pill` → `base.border_radius.full` | `border_radius.level_3` → `base.border_radius.lg` | `base.border_radius.full` (напрямую) |
| **Семантический слой** | Нужен (переиспользование) | Нужен (переиспользование) | Нужен (переиспользование) | **Не нужен** (нет переиспользования) |
| **Сложность** | Низкая | Средняя | Средняя | Очень низкая |
| **White Label** | Сложно | Идеально | Средне | Сложно |

## Особенности для бейджа

Бейдж имеет уникальные особенности:
- **Варианты статусов** — должны быть четко различимы
- **Компактность** — бейдж должен быть компактным
- **Pill форма** — обычно используется полное скругление
- **Размеры** — должны масштабироваться пропорционально

## Важное замечание о контекстном подходе

При контекстном подходе **семантический слой не нужен**, потому что:
1. Токены компонента специфичны только для него (например, `badge.variant.success.background` используется только в бейдже)
2. Переиспользование токенов бейджа в других компонентах — плохая практика (путает дизайнеров)
3. Семантический слой просто дублировал бы компонентный слой 1:1 без добавления абстракции

Поэтому компонентные токены ссылаются напрямую на базовый слой: `badge.variant.success.background = "{base.color.green.50}"`

⚠️ **Важно:** При большом количестве компонентов (50+) контекстный подход без семантического слоя создает проблемы масштабирования. Подробнее см. [Масштабирование контекстного подхода](../../context_approach_scaling.md).

## Детальная документация по каждому подходу

Для более подробного изучения каждого подхода, см. отдельные документы:

- [Подход по функциональности](functional.md)
- [Подход по ролям](roles.md)
- [Подход по иерархии](hierarchy.md)
- [Подход по контексту](context.md)

## Тест: Проверь свои знания

### Вопрос 1
При подходе по функциональности, какой токен используется для фона success бейджа?

a) `semantic_functional.color.status.success`  
b) `semantic_functional.color.status.success_background`  
c) `semantic_functional.color.background.success`  
d) `semantic_functional.color.green.50`

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: b)</b><br>
Success бейдж — это статус успеха, поэтому используется `color.status.success_background`. Это специальный фон для статуса успеха.
</details>

### Вопрос 2
При подходе по ролям, какой токен используется для info бейджа?

a) `semantic_roles.color.status.info`  
b) `semantic_roles.color.brand.primary`  
c) `semantic_roles.color.interactive.default`  
d) `semantic_roles.color.surface.info`

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: b)</b><br>
Info бейдж — это брендовая информация, поэтому используется `color.brand.primary`. Это роль бренда в системе.
</details>

### Вопрос 3
При подходе по иерархии, какой уровень используется для info бейджа?

a) `level_1`  
b) `level_2`  
c) `level_3`  
d) Статусы не привязаны к уровням

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: a)</b><br>
Info бейдж — это важная информация, поэтому используется `level_1.action`. Это важный элемент первого уровня.
</details>

### Вопрос 4
Сколько вариантов имеет бейдж?

a) 3 (success, error, warning)  
b) 4 (success, error, warning, info)  
c) 5 (success, error, warning, info, neutral)  
d) 6 (success, error, warning, info, neutral, primary)

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: c)</b><br>
Бейдж имеет 5 вариантов: success (успех), error (ошибка), warning (предупреждение), info (информация), neutral (нейтральный).
</details>

### Вопрос 5
При подходе по функциональности, какой токен используется для neutral бейджа?

a) `semantic_functional.color.status.neutral`  
b) `semantic_functional.color.background.secondary`  
c) `semantic_functional.color.neutral.medium`  
d) `semantic_functional.color.surface.secondary`

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: b)</b><br>
Neutral бейдж — это нейтральный фон, поэтому используется `color.background.secondary`. Это функциональная роль для нейтрального элемента.
</details>

### Вопрос 6
При подходе по ролям, какой токен используется для neutral бейджа?

a) `semantic_roles.color.neutral.medium`  
b) `semantic_roles.color.surface.secondary`  
c) `semantic_roles.color.status.neutral`  
d) `semantic_roles.color.interactive.secondary`

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: b)</b><br>
Neutral бейдж — это нейтральная поверхность, поэтому используется `color.surface.secondary`. Это роль нейтрального элемента в системе.
</details>

### Вопрос 7
Какой border_radius обычно используется для бейджа?

a) `small`  
b) `medium`  
c) `large`  
d) `full` (pill)

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: d)</b><br>
Бейдж обычно использует полное скругление (`full` или `pill`), чтобы создать округлую форму. Это стандартная практика для бейджей.
</details>

### Вопрос 8
При контекстном подходе, на что ссылается токен `badge.variant.error.background`?

a) `{semantic_functional.color.status.error_background}`  
b) `{semantic_roles.color.status.error_background}`  
c) `{base.color.red.50}`  
d) `{semantic_hierarchy.color.status.error_background}`

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: c)</b><br>
При контекстном подходе семантический слой не используется. Компонентные токены ссылаются напрямую на базовый слой: `{base.color.red.50}`.
</details>

### Вопрос 9
При подходе по иерархии, как обрабатываются статусы (success, error, warning)?

a) Они привязаны к level_1  
b) Они привязаны к level_2  
c) Они привязаны к level_3  
d) Они не привязаны к уровням, это отдельная категория

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: d)</b><br>
Статусы (success, error, warning) не привязаны к уровням иерархии. Это отдельная категория `color.status.*`, потому что статусы важны независимо от уровня важности элемента.
</details>

### Вопрос 10
Почему бейдж должен быть компактным?

a) Потому что это красиво  
b) Потому что бейдж обычно используется для краткой информации и не должен занимать много места  
c) Потому что это требование дизайн-системы  
d) Потому что так проще кодить

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: b)</b><br>
Бейдж должен быть компактным, потому что он обычно используется для краткой информации (статус, категория, тег) и не должен занимать много места в интерфейсе. Компактность улучшает читаемость и не отвлекает от основного контента.
</details>

