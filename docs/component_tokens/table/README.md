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

**Философия**: Создаю токены специально для компонента, ссылаясь напрямую на базовый слой.

**Ключевые особенности**:
- **Семантический слой не нужен** — компонентные токены ссылаются напрямую на `base.*`
- `table.header.background.default` → `{base.color.gray.50}`
- `table.row.background.selected` → `{base.color.blue.500}`
- `table.cell.padding.x` → `{base.spacing.md}`
- Каждый компонент имеет свои собственные токены, не переиспользуемые другими компонентами

**Особенности мышления**:
- Это таблица → создаю токены специально для таблицы
- Выбираю базовые токены напрямую, без промежуточного слоя
- Не нужно думать о функциональности, ролях или иерархии
- Токены максимально специфичны для компонента

**Преимущества**: Максимальная простота и скорость. Прямая связь с базовым слоем. Понятность.

**Недостатки**: Нет абстракции — сложнее менять значения для всех компонентов. Сложнее White Label — нужно менять компонентные токены.

## Сравнительная таблица

| Аспект | Функциональность | Роли | Иерархия | Контекст |
|--------|------------------|------|----------|----------|
| **Header фон** | `background.secondary` → `base.color.gray.50` | `surface.secondary` → `base.color.gray.50` | `level_2.background` → `base.color.gray.50` | `base.color.gray.50` (напрямую) |
| **Row фон** | `background.primary` → `base.color.white` | `surface.primary` → `base.color.white` | `level_1.background` → `base.color.white` | `base.color.white` (напрямую) |
| **Selected фон** | `action.primary` → `base.color.blue.500` | `interactive.default` → `base.color.blue.500` | `level_1.action` → `base.color.blue.500` | `base.color.blue.500` (напрямую) |
| **Семантический слой** | Нужен (переиспользование) | Нужен (переиспользование) | Нужен (переиспользование) | **Не нужен** (нет переиспользования) |
| **Сложность** | Низкая | Средняя | Средняя | Очень низкая |
| **White Label** | Сложно | Идеально | Средне | Сложно |

## Особенности для таблицы

Таблица имеет сложную структуру, которая требует правильной обработки:
- **Заголовок** — должен выделяться, но не доминировать
- **Hover** — должен быть заметным, но не отвлекающим
- **Selected** — должен быть четко виден
- **Границы** — должны помогать читать данные, не перегружая интерфейс

## Важное замечание о контекстном подходе

При контекстном подходе **семантический слой не нужен**, потому что:
1. Токены компонента специфичны только для него (например, `table.row.background.selected` используется только в таблице)
2. Переиспользование токенов таблицы в других компонентах — плохая практика (путает дизайнеров)
3. Семантический слой просто дублировал бы компонентный слой 1:1 без добавления абстракции

Поэтому компонентные токены ссылаются напрямую на базовый слой: `table.row.background.selected = "{base.color.blue.500}"`

⚠️ **Важно:** При большом количестве компонентов (50+) контекстный подход без семантического слоя создает проблемы масштабирования. Подробнее см. [Масштабирование контекстного подхода](../../context_approach_scaling.md).

## Детальная документация по каждому подходу

Для более подробного изучения каждого подхода, см. отдельные документы:

- [Подход по функциональности](functional.md)
- [Подход по ролям](roles.md)
- [Подход по иерархии](hierarchy.md)
- [Подход по контексту](context.md)

## Тест: Проверь свои знания

### Вопрос 1
При подходе по функциональности, какой токен используется для фона selected строки в таблице?

a) `semantic_functional.color.background.selected`  
b) `semantic_functional.color.action.primary`  
c) `semantic_functional.color.status.info`  
d) `semantic_functional.color.surface.selected`

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: b)</b><br>
Selected строка — это действие выбора, поэтому используется `color.action.primary`. Это функциональное действие пользователя.
</details>

### Вопрос 2
При подходе по ролям, какой токен используется для фона заголовка таблицы?

a) `semantic_roles.color.surface.primary`  
b) `semantic_roles.color.surface.secondary`  
c) `semantic_roles.color.neutral.medium`  
d) `semantic_roles.color.brand.primary`

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: b)</b><br>
Заголовок таблицы — это вторичная поверхность, которая выделяется, но не доминирует. Используется `color.surface.secondary`.
</details>

### Вопрос 3
При подходе по иерархии, какой уровень используется для обычных строк таблицы?

a) `level_1`  
b) `level_2`  
c) `level_3`  
d) Зависит от контекста

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: a)</b><br>
Обычные строки таблицы — это основной контент, поэтому используется `level_1`. Это самый важный уровень для данных.
</details>

### Вопрос 4
Сколько состояний имеет строка таблицы?

a) 2 (default, hover)  
b) 3 (default, hover, selected)  
c) 4 (default, hover, selected, active)  
d) 5 (default, hover, selected, active, disabled)

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: b)</b><br>
Строка таблицы имеет 3 состояния: default (обычное), hover (при наведении), selected (выбранное).
</details>

### Вопрос 5
При подходе по функциональности, какой токен используется для текста на selected строке?

a) `semantic_functional.color.text.primary`  
b) `semantic_functional.color.text.secondary`  
c) `semantic_functional.color.text.inverse`  
d) `semantic_functional.color.text.selected`

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: c)</b><br>
Текст на selected строке (которая имеет цветной фон) должен быть инверсным (белым), поэтому используется `color.text.inverse`.
</details>

### Вопрос 6
При подходе по ролям, какой токен используется для selected строки?

a) `semantic_roles.color.brand.primary`  
b) `semantic_roles.color.interactive.default`  
c) `semantic_roles.color.surface.selected`  
d) `semantic_roles.color.status.info`

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: b)</b><br>
Selected строка — это интерактивный элемент, с которым пользователь взаимодействует. Используется `color.interactive.default`.
</details>

### Вопрос 7
При подходе по иерархии, какой уровень используется для заголовка таблицы?

a) `level_1`  
b) `level_2`  
c) `level_3`  
d) `level_0`

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: b)</b><br>
Заголовок таблицы — это средний уровень важности. Он выделяется, но не доминирует над данными. Используется `level_2`.
</details>

### Вопрос 8
При контекстном подходе, на что ссылается токен `table.row.background.selected`?

a) `{semantic_functional.color.action.primary}`  
b) `{semantic_roles.color.interactive.default}`  
c) `{base.color.blue.500}`  
d) `{semantic_hierarchy.color.level_1.action}`

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: c)</b><br>
При контекстном подходе семантический слой не используется. Компонентные токены ссылаются напрямую на базовый слой: `{base.color.blue.500}`.
</details>

### Вопрос 9
Почему hover состояние важно для таблицы?

a) Потому что оно красивое  
b) Потому что оно помогает пользователю отслеживать строку, на которую он наводит курсор  
c) Потому что оно нужно для анимации  
d) Потому что оно используется в мобильных версиях

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: b)</b><br>
Hover состояние критически важно для таблиц, потому что помогает пользователю отслеживать строку, на которую он наводит курсор, особенно при работе с большими таблицами. Это улучшает читаемость и UX.
</details>

### Вопрос 10
При подходе по функциональности, какой токен используется для фона заголовка таблицы?

a) `semantic_functional.color.background.primary`  
b) `semantic_functional.color.background.secondary`  
c) `semantic_functional.color.surface.header`  
d) `semantic_functional.color.neutral.medium`

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: b)</b><br>
Заголовок таблицы — это вторичный фон, который структурирует данные. Используется `color.background.secondary` — это функциональная роль для структурирующего элемента.
</details>

