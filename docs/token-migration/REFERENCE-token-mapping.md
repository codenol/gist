# Справочник: Маппинг токенов

Таблица соответствия старых токенов новым.

## Button

| Старый токен | Новый токен |
|-------------|-------------|
| `Button.primary.accent.default-bg` | `color.button.filled.accent.background.default` |
| `Button.primary.accent.hover-bg` | `color.button.filled.accent.background.hover` |
| `Button.primary.accent.press-bg` | `color.button.filled.accent.background.active` |
| `Button.primary.accent.focus-stroke` | `color.button.filled.accent.border.focus` |
| `Button.primary.accent.disabled-bg` | `color.button.filled.accent.background.disabled` |
| `Button.primary.accent.disabled-text` | `color.button.filled.accent.text.disabled` |
| `Button.primary.danger.default-bg` | `color.button.filled.danger.background.default` |
| `Button.primary.danger.hover-bg` | `color.button.filled.danger.background.hover` |
| `Button.primary.danger.press-bg` | `color.button.filled.danger.background.active` |
| `Button.primary.danger.focus-stroke` | `color.button.filled.danger.border.focus` |
| `Button.primary.danger.disabled-bg` | `color.button.filled.danger.background.disabled` |
| `Button.primary.warning.*` | `color.button.filled.warning.*` |
| `Button.primary.success.*` | `color.button.filled.success.*` |
| `Button.primary.info.*` | `color.button.filled.info.*` |
| `Button.primary.neutral.*` | `color.button.filled.neutral.*` |
| `Button.secondary.*` | `color.button.outline.*` |
| `Button.tertiary.*` | `color.button.ghost.*` |

## Badge

| Старый токен | Новый токен |
|-------------|-------------|
| `Badges.gray.surface` | `color.badge.neutral.background.default` |
| `Badges.gray.text` | `color.badge.neutral.text.default` |
| `Badges.gray.stroke` | `color.badge.neutral.border.default` |
| `Badges.gray.surface-light` | `color.badge.neutral.background.light` |
| `Badges.gray-warm.surface` | `color.badge.neutral.warm.background.default` |
| `Badges.gray-warm.text` | `color.badge.neutral.warm.text.default` |
| `Badges.gray-warm.stroke` | `color.badge.neutral.warm.border.default` |
| `Badges.accent.*` | `color.badge.accent.*` |
| `Badges.danger.*` | `color.badge.danger.*` |
| `Badges.warning.*` | `color.badge.warning.*` |
| `Badges.success.*` | `color.badge.success.*` |
| `Badges.info.*` | `color.badge.info.*` |

## Status

| Старый токен | Новый токен |
|-------------|-------------|
| `Status.critical.surface` | `color.status.critical.background.default` |
| `Status.critical.text` | `color.status.critical.text.default` |
| `Status.warning.surface` | `color.status.warning.background.default` |
| `Status.warning.text` | `color.status.warning.text.default` |
| `Status.warning-strong.surface` | `color.status.warning.background.strong` |
| `Status.warning-strong.text` | `color.status.warning.text.strong` |
| `Status.success.surface` | `color.status.success.background.default` |
| `Status.success.text` | `color.status.success.text.default` |
| `Status.info.*` | `color.status.info.*` |
| `Status.neutral.*` | `color.status.neutral.*` |

## Chip

| Старый токен | Новый токен |
|-------------|-------------|
| `Background.chips.default` | `color.chip.default.background.default` |

## DataTable

| Старый токен | Новый токен |
|-------------|-------------|
| `Background.card.level-1` | `color.table.row.background.default` |
| `Background.card.hover` | `color.table.row.background.hover` |
| `Background.header.table` | `color.table.header.background.default` |
| `Background.card.header-table` | `color.table.header.background.default` |

## Общие паттерны

### Background → background
- `{Component}.{variant}.surface` → `color.{component}.{variant}.background.default`
- `{Component}.{variant}.default-bg` → `color.{component}.{variant}.background.default`

### Text → text
- `{Component}.{variant}.text` → `color.{component}.{variant}.text.default`
- `{Component}.{variant}.disabled-text` → `color.{component}.{variant}.text.disabled`

### Border → border
- `{Component}.{variant}.stroke` → `color.{component}.{variant}.border.default`
- `{Component}.{variant}.focus-stroke` → `color.{component}.{variant}.border.focus`

### Press → active
- `{Component}.{variant}.press-bg` → `color.{component}.{variant}.background.active`
- `{Component}.{variant}.press-*` → `color.{component}.{variant}.*.active`

---

**← Вернуться:** [README.md](README.md)

