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

**Философия**: Создаю токены специально для компонента, ссылаясь напрямую на базовый слой.

**Ключевые особенности**:
- **Семантический слой не нужен** — компонентные токены ссылаются напрямую на `base.*`
- `input.background.default` → `{base.color.white}`
- `input.border.focus` → `{base.color.blue.500}`
- `input.padding.x` → `{base.spacing.md}`
- Каждый компонент имеет свои собственные токены, не переиспользуемые другими компонентами

**Особенности мышления**:
- Это инпут → создаю токены специально для инпута
- Выбираю базовые токены напрямую, без промежуточного слоя
- Не нужно думать о функциональности, ролях или иерархии
- Токены максимально специфичны для компонента

**Преимущества**: Максимальная простота и скорость. Прямая связь с базовым слоем. Понятность.

**Недостатки**: Нет абстракции — сложнее менять значения для всех компонентов. Сложнее White Label — нужно менять компонентные токены.

## Сравнительная таблица

| Аспект | Функциональность | Роли | Иерархия | Контекст |
|--------|------------------|------|----------|----------|
| **Фон default** | `background.primary` → `base.color.white` | `surface.primary` → `base.color.white` | `level_1.background` → `base.color.white` | `base.color.white` (напрямую) |
| **Текст default** | `text.primary` → `base.color.gray.900` | `neutral.text_primary` → `base.color.gray.900` | `level_1.text` → `base.color.gray.900` | `base.color.gray.900` (напрямую) |
| **Border focus** | `border.focus` → `base.color.blue.500` | `interactive.focus` → `base.color.blue.500` | `level_1.action` → `base.color.blue.500` | `base.color.blue.500` (напрямую) |
| **Семантический слой** | Нужен (переиспользование) | Нужен (переиспользование) | Нужен (переиспользование) | **Не нужен** (нет переиспользования) |
| **Сложность** | Низкая | Средняя | Средняя | Очень низкая |
| **White Label** | Сложно | Идеально | Средне | Сложно |

## Особенности для инпута

Инпут имеет уникальные состояния, которые важно правильно обработать:
- **Focus** — критически важное состояние для доступности
- **Error** — должно быть четко видно пользователю
- **Placeholder** — должен быть менее заметным, чем основной текст
- **Disabled** — должен явно показывать неактивность

## Важное замечание о контекстном подходе

При контекстном подходе **семантический слой не нужен**, потому что:
1. Токены компонента специфичны только для него (например, `input.border.focus` используется только в инпуте)
2. Переиспользование токенов инпута в других компонентах — плохая практика (путает дизайнеров)
3. Семантический слой просто дублировал бы компонентный слой 1:1 без добавления абстракции

Поэтому компонентные токены ссылаются напрямую на базовый слой: `input.border.focus = "{base.color.blue.500}"`

⚠️ **Важно:** При большом количестве компонентов (50+) контекстный подход без семантического слоя создает проблемы масштабирования. Подробнее см. [Масштабирование контекстного подхода](../../context_approach_scaling.md).

## Детальная документация по каждому подходу

Для более подробного изучения каждого подхода, см. отдельные документы:

- [Подход по функциональности](functional.md)
- [Подход по ролям](roles.md)
- [Подход по иерархии](hierarchy.md)
- [Подход по контексту](context.md)

## Тест: Проверь свои знания

### Вопрос 1
При подходе по функциональности, какой токен используется для границы инпута в состоянии focus?

a) `semantic_functional.color.border.default`  
b) `semantic_functional.color.border.focus`  
c) `semantic_functional.color.action.primary`  
d) `semantic_functional.color.interactive.focus`

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: b)</b><br>
Focus — это важное функциональное состояние границы, поэтому используется `color.border.focus`. Это специальный токен для состояния фокуса.
</details>

### Вопрос 2
При подходе по ролям, какой токен используется для placeholder текста?

a) `semantic_roles.color.neutral.text_primary`  
b) `semantic_roles.color.neutral.text_secondary`  
c) `semantic_roles.color.neutral.text_tertiary`  
d) `semantic_roles.color.text.placeholder`

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: c)</b><br>
Placeholder — это третичный нейтральный текст, менее важный чем основной текст. Используется `color.neutral.text_tertiary`.
</details>

### Вопрос 3
При подходе по иерархии, какой уровень используется для placeholder текста?

a) `level_1`  
b) `level_2`  
c) `level_3`  
d) `level_0`

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: c)</b><br>
Placeholder — это наименее важный текст в инпуте, поэтому используется `level_3`. Это приглушенный, вспомогательный текст.
</details>

### Вопрос 4
Сколько состояний имеет инпут?

a) 3 (default, hover, focus)  
b) 4 (default, hover, focus, error)  
c) 5 (default, hover, focus, error, disabled)  
d) 6 (default, hover, focus, error, disabled, active)

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: c)</b><br>
Инпут имеет 5 состояний: default (обычное), hover (при наведении), focus (в фокусе), error (ошибка), disabled (неактивное).
</details>

### Вопрос 5
При подходе по функциональности, какой токен используется для фона инпута с ошибкой?

a) `semantic_functional.color.background.error`  
b) `semantic_functional.color.status.error`  
c) `semantic_functional.color.status.error_background`  
d) `semantic_functional.color.border.error`

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: c)</b><br>
Ошибка — это статус, поэтому используется `color.status.error_background`. Это специальный фон для состояния ошибки.
</details>

### Вопрос 6
При подходе по ролям, какой токен используется для состояния focus?

a) `semantic_roles.color.brand.primary`  
b) `semantic_roles.color.interactive.focus`  
c) `semantic_roles.color.neutral.border_focus`  
d) `semantic_roles.color.surface.focus`

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: b)</b><br>
Focus — это интерактивное состояние, поэтому используется `color.interactive.focus`. Это состояние взаимодействия пользователя с элементом.
</details>

### Вопрос 7
При подходе по иерархии, какой уровень используется для активного инпута (default состояние)?

a) `level_1`  
b) `level_2`  
c) `level_3`  
d) Зависит от контекста

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: a)</b><br>
Активный инпут — это основной элемент для ввода данных, поэтому используется `level_1`. Это самый важный уровень для активного состояния.
</details>

### Вопрос 8
При контекстном подходе, на что ссылается токен `input.border.error`?

a) `{semantic_functional.color.border.error}`  
b) `{semantic_roles.color.status.error}`  
c) `{base.color.red.500}`  
d) `{semantic_hierarchy.color.status.error}`

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: c)</b><br>
При контекстном подходе семантический слой не используется. Компонентные токены ссылаются напрямую на базовый слой: `{base.color.red.500}`.
</details>

### Вопрос 9
Какой токен используется для текста placeholder при подходе по функциональности?

a) `semantic_functional.color.text.primary`  
b) `semantic_functional.color.text.secondary`  
c) `semantic_functional.color.text.tertiary`  
d) `semantic_functional.color.text.placeholder`

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: c)</b><br>
Placeholder — это третичный текст, менее важный чем основной. Используется `color.text.tertiary` — это функциональная роль для менее важного текста.
</details>

### Вопрос 10
Почему состояние focus критически важно для инпута?

a) Потому что оно красивое  
b) Потому что оно помогает пользователю понять, где находится курсор и какой элемент активен  
c) Потому что оно нужно для анимации  
d) Потому что оно используется в мобильных версиях

<details>
<summary>Показать ответ</summary>
<b>Правильный ответ: b)</b><br>
Состояние focus критически важно для доступности и UX. Оно помогает пользователю понять, где находится курсор и какой элемент активен, особенно важно для пользователей клавиатурной навигации и скринридеров.
</details>

