# Инвентарь токенов дизайн-системы

Документ содержит полный список всех токенов, которые нужно мигрировать.

## Компоненты для миграции

### 1. Button (Приоритет 1)

**Структура:** `Button.{variant}.{role}.{property}`

**Варианты:**
- `primary` - основной вариант кнопки
- `secondary` - вторичный вариант (если есть)
- `tertiary` - третичный вариант (если есть)

**Роли:**
- `accent` - основной акцентный цвет
- `danger` - опасное действие
- `warning` - предупреждение
- `success` - успешное действие
- `info` - информационное
- `neutral` - нейтральное

**Свойства для каждой роли:**
- `default-bg` - фон по умолчанию
- `hover-bg` - фон при наведении
- `press-bg` - фон при нажатии
- `focus-stroke` - граница в фокусе
- `disabled-bg` - фон в disabled состоянии
- `disabled-text` - текст в disabled состоянии

**Примеры токенов:**
- `Button.primary.accent.default-bg`
- `Button.primary.accent.hover-bg`
- `Button.primary.accent.press-bg`
- `Button.primary.accent.focus-stroke`
- `Button.primary.accent.disabled-bg`
- `Button.primary.accent.disabled-text`
- `Button.primary.danger.*` (аналогично)
- `Button.primary.warning.*`
- `Button.primary.success.*`
- `Button.primary.info.*`
- `Button.primary.neutral.*`

---

### 2. Badge (Приоритет 2)

**Структура:** `Badges.{role}.{property}`

**Роли:**
- `gray` - нейтральный серый
- `gray-warm` - теплый серый
- `accent` - акцентный
- `danger` - опасный
- `warning` - предупреждение
- `success` - успешный
- `info` - информационный
- `neutral` - нейтральный

**Свойства для каждой роли:**
- `surface` - фон
- `surface-light` - светлый фон (если есть)
- `stroke` - граница
- `text` - текст

**Примеры токенов:**
- `Badges.gray.surface`
- `Badges.gray.surface-light`
- `Badges.gray.stroke`
- `Badges.gray.text`
- `Badges.gray-warm.*` (аналогично)
- `Badges.accent.*`
- `Badges.danger.*`
- `Badges.warning.*`
- `Badges.success.*`
- `Badges.info.*`

---

### 3. Status (Приоритет 2)

**Структура:** `Status.{role}.{property}`

**Роли:**
- `critical` - критический
- `warning` - предупреждение
- `warning-strong` - сильное предупреждение
- `success` - успешный
- `info` - информационный
- `neutral` - нейтральный

**Свойства для каждой роли:**
- `surface` - фон
- `text` - текст

**Примеры токенов:**
- `Status.critical.surface`
- `Status.critical.text`
- `Status.warning.surface`
- `Status.warning.text`
- `Status.warning-strong.surface`
- `Status.warning-strong.text`
- `Status.success.*`
- `Status.info.*`
- `Status.neutral.*`

---

### 4. Chip (Приоритет 3)

**Структура:** `Background.chips.{property}`

**Свойства:**
- `default` - значение по умолчанию

**Примеры токенов:**
- `Background.chips.default`

---

### 5. Checkbox (Приоритет 3)

**Примечание:** Токены для Checkbox могут быть в разных местах. Нужно проверить в Figma.

**Ожидаемые токены:**
- Background для default состояния
- Border для default состояния
- Background для checked состояния
- Border для checked состояния
- Background для disabled состояния

---

### 6. Toggle (Приоритет 3)

**Примечание:** Токены для Toggle могут быть в разных местах. Нужно проверить в Figma.

**Ожидаемые токены:**
- Background для default состояния
- Background для checked состояния
- Background для disabled состояния

---

### 7. Message (Приоритет 4)

**Примечание:** Токены для Message могут быть в разных местах. Нужно проверить в Figma.

**Ожидаемые токены:**
- Background для каждого варианта (info, error, warning, success)
- Text для каждого варианта

---

### 8. Toast (Приоритет 4)

**Примечание:** Токены для Toast могут быть в разных местах. Нужно проверить в Figma.

**Ожидаемые токены:**
- Background для каждого варианта (success, error, warning, info)
- Text для каждого варианта

---

### 9. Tooltip (Приоритет 4)

**Примечание:** Токены для Tooltip могут быть в разных местах. Нужно проверить в Figma.

**Ожидаемые токены:**
- Background для default состояния
- Text для default состояния

---

### 10. DataTable (Приоритет 5)

**Структура:** Использует токены из `Background.card.*` и `Background.header.*`

**Ожидаемые токены:**
- `Background.card.level-1` - фон строки по умолчанию
- `Background.card.hover` - фон строки при наведении
- `Background.card.header-table` - фон заголовка таблицы
- `Background.header.table` - фон заголовка таблицы

---

### 11. Spinner (Приоритет 5)

**Примечание:** Токены для Spinner могут быть в разных местах. Нужно проверить в Figma.

**Ожидаемые токены:**
- Fill для default состояния

---

## Общие токены (не компонентные)

### Background
- `Background.back.surface`
- `Background.brand.logo`
- `Background.brand.text`
- `Background.card.level-1`
- `Background.card.level-2`
- `Background.card.hover`
- `Background.card.press`
- `Background.card.striped-rows`
- `Background.card.header-table`
- `Background.chips.default`
- `Background.header.level-1`
- `Background.header.level-2`
- `Background.header.table`

### Text
- `Text.primary`
- `Text.secondary`
- `Text.tertiary`
- `Text.disabled`
- `Text.danger`

### Border
- Различные токены границ

### Icon
- Токены для иконок

### Alarm
- Токены для алармов

### Indicator
- Токены для индикаторов

### Chart
- Токены для графиков

---

## Статистика

**Всего компонентов для миграции:** 11

**Приоритет 1:** 1 компонент (Button)
**Приоритет 2:** 2 компонента (Badge, Status)
**Приоритет 3:** 3 компонента (Chip, Checkbox, Toggle)
**Приоритет 4:** 3 компонента (Message, Toast, Tooltip)
**Приоритет 5:** 2 компонента (DataTable, Spinner)

---

## Примечания

- Некоторые компоненты могут не иметь явных токенов в текущей структуре
- Нужно проверить в Figma, какие токены используются в компонентах
- Старые токены будут сохранены для обратной совместимости

