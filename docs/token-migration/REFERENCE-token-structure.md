# Справочник: Структура токенов

## Общая схема

```
[Category].[Component].[Variant].[SemanticRole].[Item].[State]
```

Где:
- **Category** - категория токена (color, spacing, typography, size, border_radius, shadow)
- **Component** - название компонента (button, badge, status, chip, etc.)
- **Variant** - вариант компонента (filled, outline, ghost для button; default, selected для chip)
- **SemanticRole** - семантическая роль (accent, danger, warning, success, info, neutral)
- **Item** - элемент компонента (background, text, border, icon)
- **State** - состояние элемента (default, hover, active, disabled, focus)

## Примеры для разных компонентов

### Button

```
color.button.filled.accent.background.default
color.button.filled.accent.background.hover
color.button.filled.accent.background.active
color.button.filled.accent.background.disabled
color.button.filled.accent.text.default
color.button.filled.accent.text.disabled
color.button.filled.accent.border.default
color.button.filled.accent.border.focus
```

**Варианты:** `filled`, `outline`, `ghost`
**Роли:** `accent`, `danger`, `warning`, `success`, `info`, `neutral`

### Badge

```
color.badge.neutral.background.default
color.badge.neutral.text.default
color.badge.neutral.border.default
color.badge.accent.background.default
color.badge.accent.text.default
```

**Варианты:** нет (только роли)
**Роли:** `neutral`, `accent`, `danger`, `warning`, `success`, `info`

### Status

```
color.status.critical.background.default
color.status.critical.text.default
color.status.warning.background.default
color.status.warning.text.default
```

**Варианты:** нет (только роли)
**Роли:** `critical`, `warning`, `success`, `info`, `neutral`

### Chip

```
color.chip.default.background.default
color.chip.selected.background.default
color.chip.disabled.background.default
```

**Варианты:** `default`, `selected`, `disabled`
**Роли:** нет

### Checkbox

```
color.checkbox.default.background.default
color.checkbox.default.border.default
color.checkbox.checked.background.default
color.checkbox.checked.border.default
color.checkbox.disabled.background.default
```

**Варианты:** `default`, `checked`, `disabled`
**Роли:** нет

### Toggle

```
color.toggle.default.background.default
color.toggle.checked.background.default
color.toggle.disabled.background.default
```

**Варианты:** `default`, `checked`, `disabled`
**Роли:** нет

### Message

```
color.message.info.background.default
color.message.info.text.default
color.message.error.background.default
color.message.error.text.default
```

**Варианты:** нет (только роли)
**Роли:** `info`, `error`, `warning`, `success`

### Toast

```
color.toast.success.background.default
color.toast.success.text.default
color.toast.error.background.default
```

**Варианты:** нет (только роли)
**Роли:** `success`, `error`, `warning`, `info`

### Tooltip

```
color.tooltip.default.background.default
color.tooltip.default.text.default
```

**Варианты:** `default`
**Роли:** нет

### DataTable

```
color.table.header.background.default
color.table.header.text.default
color.table.row.background.default
color.table.row.background.hover
color.table.row.background.selected
```

**Варианты:** `header`, `row`
**Роли:** нет

### Spinner

```
color.spinner.default.fill.default
```

**Варианты:** `default`
**Роли:** нет

## Состояния

Общие состояния для всех компонентов:
- `default` - обычное состояние
- `hover` - при наведении
- `active` - при нажатии
- `disabled` - неактивное состояние
- `focus` - в фокусе
- `selected` - выбранное состояние
- `checked` - отмеченное состояние

## Элементы

Общие элементы:
- `background` - фон
- `text` - текст
- `border` - граница
- `icon` - иконка
- `surface` - поверхность (синоним background для некоторых компонентов)
- `fill` - заливка (для Spinner)

## Семантические роли

Общие роли:
- `accent` - основной акцентный цвет
- `danger` - опасное действие
- `warning` - предупреждение
- `success` - успешное действие
- `info` - информационное
- `neutral` - нейтральное
- `critical` - критическое (для Status)

---

**← Вернуться:** [README.md](README.md)

