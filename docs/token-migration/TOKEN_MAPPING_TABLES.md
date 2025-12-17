# Таблицы соответствия токенов

Этот документ содержит подробные таблицы соответствия старых токенов новым с указанием, откуда брать значения.

## Как использовать эти таблицы

1. **Найдите нужный компонент** в таблице ниже
2. **Найдите старый токен** в колонке "Старый токен"
3. **Скопируйте значение** из старого токена в новый токен
4. **Если токена нет** - используйте рекомендацию из палитры с обоснованием

### Как скопировать значение из старого токена

**В Figma:**
1. Откройте Variables (Local variables)
2. Найдите старый токен (например, `Button.primary.accent.default-bg`)
3. Откройте его для просмотра значения
4. При создании нового токена используйте "Bind to variable" и выберите старый токен
5. Затем переименуйте токен в новую структуру

### Как использовать цвет из палитры

**В Figma:**
1. Откройте Variables (Local variables)
2. Найдите коллекцию "Pallet"
3. Найдите нужный цвет (например, `bondi-blue`)
4. Выберите нужный оттенок (например, `600`)
5. При создании нового токена используйте "Bind to variable" и выберите цвет из палитры
6. Это создаст связь с палитрой, что позволит легко обновлять цвета в будущем

## Button

### Primary Accent (Filled)

| Новый токен | Старый токен | Откуда брать значение | Примечание |
|-------------|--------------|------------------------|------------|
| `color.button.filled.accent.background.default` | `Button.primary.accent.default-bg` | Скопировать значение напрямую | Использует `bondi-blue/600` из палитры |
| `color.button.filled.accent.background.hover` | `Button.primary.accent.hover-bg` | Скопировать значение напрямую | Использует `bondi-blue/500` из палитры |
| `color.button.filled.accent.background.active` | `Button.primary.accent.press-bg` | Скопировать значение напрямую | Использует `bondi-blue/650` из палитры |
| `color.button.filled.accent.background.disabled` | `Button.primary.accent.disabled-bg` | Скопировать значение напрямую | Использует `bondi-blue/200` из палитры |
| `color.button.filled.accent.text.default` | **НЕТ** | **Палитра: `white/950`** | **Обоснование:** Белый текст на цветном фоне для контраста. В Light режиме используйте `white/950` (#FFFFFF), в Dark режиме проверьте текущий цвет текста в компоненте |
| `color.button.filled.accent.text.disabled` | `Button.primary.accent.disabled-text` | Скопировать значение напрямую | Использует `white/950` из палитры |
| `color.button.filled.accent.border.default` | **НЕТ** | **Палитра: совпадает с background или прозрачный** | **Обоснование:** Для filled кнопки граница обычно совпадает с фоном или прозрачная. Используйте то же значение, что и `background.default` |
| `color.button.filled.accent.border.focus` | `Button.primary.accent.focus-stroke` | Скопировать значение напрямую | Использует `bondi-blue/500` из палитры |

### Primary Danger (Filled)

| Новый токен | Старый токен | Откуда брать значение | Примечание |
|-------------|--------------|------------------------|------------|
| `color.button.filled.danger.background.default` | `Button.primary.danger.default-bg` | Скопировать значение напрямую | Использует `red/600` из палитры |
| `color.button.filled.danger.background.hover` | `Button.primary.danger.hover-bg` | Скопировать значение напрямую | Использует `red/550` из палитры |
| `color.button.filled.danger.background.active` | `Button.primary.danger.press-bg` | Скопировать значение напрямую | Использует `red/650` из палитры |
| `color.button.filled.danger.background.disabled` | `Button.primary.danger.disabled-bg` | Скопировать значение напрямую | Использует `red/200` из палитры |
| `color.button.filled.danger.text.default` | **НЕТ** | **Палитра: `white/950`** | **Обоснование:** Белый текст на красном фоне для контраста |
| `color.button.filled.danger.text.disabled` | **НЕТ** | **Палитра: `white/300` (Light), `white/950` (Dark)** | **Обоснование:** Приглушенный белый для disabled состояния |
| `color.button.filled.danger.border.default` | **НЕТ** | **Палитра: совпадает с background** | **Обоснование:** Для filled кнопки граница совпадает с фоном |
| `color.button.filled.danger.border.focus` | `Button.primary.danger.focus-stroke` | Скопировать значение напрямую | Использует `red/300` из палитры |

### Primary Warning (Filled)

| Новый токен | Старый токен | Откуда брать значение | Примечание |
|-------------|--------------|------------------------|------------|
| `color.button.filled.warning.background.default` | `Button.primary.warning.default-bg` | Скопировать значение напрямую | Использует `orange/550` из палитры |
| `color.button.filled.warning.background.hover` | `Button.primary.warning.hover-bg` | Скопировать значение напрямую | Использует `orange/400` из палитры |
| `color.button.filled.warning.background.active` | `Button.primary.warning.press-bg` | Скопировать значение напрямую | Использует `orange/600` из палитры |
| `color.button.filled.warning.background.disabled` | `Button.primary.warning.disabled-bg` | Скопировать значение напрямую | Использует `orange/200` из палитры |
| `color.button.filled.warning.text.default` | **НЕТ** | **Палитра: `white/950`** | **Обоснование:** Белый текст на оранжевом фоне для контраста |
| `color.button.filled.warning.text.disabled` | **НЕТ** | **Палитра: `white/300` (Light), `white/950` (Dark)** | **Обоснование:** Приглушенный белый для disabled |
| `color.button.filled.warning.border.default` | **НЕТ** | **Палитра: совпадает с background** | **Обоснование:** Для filled кнопки граница совпадает с фоном |
| `color.button.filled.warning.border.focus` | `Button.primary.warning.focus-stroke` | Скопировать значение напрямую | Использует `orange/300` из палитры |

### Primary Success (Filled)

| Новый токен | Старый токен | Откуда брать значение | Примечание |
|-------------|--------------|------------------------|------------|
| `color.button.filled.success.background.default` | `Button.primary.success.default-bg` | Скопировать значение напрямую | Использует `green/600` из палитры |
| `color.button.filled.success.background.hover` | `Button.primary.success.hover-bg` | Скопировать значение напрямую | Использует `green/500` из палитры |
| `color.button.filled.success.background.active` | `Button.primary.success.press-bg` | Скопировать значение напрямую | Использует `green/650` из палитры |
| `color.button.filled.success.background.disabled` | `Button.primary.success.disabled-bg` | Скопировать значение напрямую | Использует `green/200` из палитры |
| `color.button.filled.success.text.default` | **НЕТ** | **Палитра: `white/950`** | **Обоснование:** Белый текст на зеленом фоне для контраста |
| `color.button.filled.success.text.disabled` | **НЕТ** | **Палитра: `white/300` (Light), `white/950` (Dark)** | **Обоснование:** Приглушенный белый для disabled |
| `color.button.filled.success.border.default` | **НЕТ** | **Палитра: совпадает с background** | **Обоснование:** Для filled кнопки граница совпадает с фоном |
| `color.button.filled.success.border.focus` | `Button.primary.success.focus-stroke` | Скопировать значение напрямую | Использует `green/300` из палитры |

### Primary Info (Filled)

| Новый токен | Старый токен | Откуда брать значение | Примечание |
|-------------|--------------|------------------------|------------|
| `color.button.filled.info.background.default` | `Button.primary.info.default-bg` | Скопировать значение напрямую | Проверьте в токенах |
| `color.button.filled.info.background.hover` | `Button.primary.info.hover-bg` | Скопировать значение напрямую | Проверьте в токенах |
| `color.button.filled.info.background.active` | `Button.primary.info.press-bg` | Скопировать значение напрямую | Проверьте в токенах |
| `color.button.filled.info.background.disabled` | `Button.primary.info.disabled-bg` | Скопировать значение напрямую | Проверьте в токенах |
| `color.button.filled.info.text.default` | **НЕТ** | **Палитра: `white/950`** | **Обоснование:** Белый текст на синем фоне для контраста |
| `color.button.filled.info.text.disabled` | **НЕТ** | **Палитра: `white/300` (Light), `white/950` (Dark)** | **Обоснование:** Приглушенный белый для disabled |
| `color.button.filled.info.border.default` | **НЕТ** | **Палитра: совпадает с background** | **Обоснование:** Для filled кнопки граница совпадает с фоном |
| `color.button.filled.info.border.focus` | `Button.primary.info.focus-stroke` | Скопировать значение напрямую | Проверьте в токенах |

### Primary Neutral (Filled)

| Новый токен | Старый токен | Откуда брать значение | Примечание |
|-------------|--------------|------------------------|------------|
| `color.button.filled.neutral.background.default` | `Button.primary.neutral.default-bg` | Скопировать значение напрямую | Проверьте в токенах |
| `color.button.filled.neutral.background.hover` | `Button.primary.neutral.hover-bg` | Скопировать значение напрямую | Проверьте в токенах |
| `color.button.filled.neutral.background.active` | `Button.primary.neutral.press-bg` | Скопировать значение напрямую | Проверьте в токенах |
| `color.button.filled.neutral.background.disabled` | `Button.primary.neutral.disabled-bg` | Скопировать значение напрямую | Проверьте в токенах |
| `color.button.filled.neutral.text.default` | **НЕТ** | **Палитра: `cool-gray/800` (Light), `cool-gray/200` (Dark)** | **Обоснование:** Темный текст на светлом фоне для контраста |
| `color.button.filled.neutral.text.disabled` | **НЕТ** | **Палитра: `cool-gray/400` (Light), `cool-gray/700` (Dark)** | **Обоснование:** Приглушенный серый для disabled |
| `color.button.filled.neutral.border.default` | **НЕТ** | **Палитра: совпадает с background** | **Обоснование:** Для filled кнопки граница совпадает с фоном |
| `color.button.filled.neutral.border.focus` | `Button.primary.neutral.focus-stroke` | Скопировать значение напрямую | Проверьте в токенах |

### Secondary (Outline)

| Новый токен | Старый токен | Откуда брать значение | Примечание |
|-------------|--------------|------------------------|------------|
| `color.button.outline.accent.background.default` | **НЕТ** | **Палитра: прозрачный (alpha: 0)** | **Обоснование:** Outline кнопка имеет прозрачный фон |
| `color.button.outline.accent.background.hover` | `Button.secondary.accent.hover-bg` | Скопировать значение напрямую | Использует `bondi-blue/200` из палитры |
| `color.button.outline.accent.background.active` | `Button.secondary.accent.press-bg` | Скопировать значение напрямую | Использует `bondi-blue/400` из палитры |
| `color.button.outline.accent.background.disabled` | **НЕТ** | **Палитра: прозрачный (alpha: 0)** | **Обоснование:** Disabled outline кнопка имеет прозрачный фон |
| `color.button.outline.accent.text.default` | `Button.secondary.accent.default-text` | Скопировать значение напрямую | Использует `bondi-blue/850` из палитры |
| `color.button.outline.accent.text.disabled` | **НЕТ** | **Палитра: `cool-gray/400` (Light), `cool-gray/700` (Dark)** | **Обоснование:** Приглушенный серый для disabled текста |
| `color.button.outline.accent.border.default` | **НЕТ** | **Палитра: `bondi-blue/600`** | **Обоснование:** Граница outline кнопки использует основной цвет акцента |
| `color.button.outline.accent.border.focus` | `Button.secondary.accent.focus-stroke` | Скопировать значение напрямую | Проверьте в токенах |

**Примечание:** Повторите для всех ролей (danger, warning, success, info, neutral) по аналогии с accent.

### Tertiary (Ghost)

| Новый токен | Старый токен | Откуда брать значение | Примечание |
|-------------|--------------|------------------------|------------|
| `color.button.ghost.accent.background.default` | **НЕТ** | **Палитра: прозрачный (alpha: 0)** | **Обоснование:** Ghost кнопка имеет прозрачный фон |
| `color.button.ghost.accent.background.hover` | `Button.tertiary.accent.hover-bg` | Скопировать значение напрямую | Использует `bondi-blue/100` из палитры |
| `color.button.ghost.accent.background.active` | `Button.tertiary.accent.press-bg` | Скопировать значение напрямую | Использует `bondi-blue/200` из палитры |
| `color.button.ghost.accent.background.disabled` | **НЕТ** | **Палитра: прозрачный (alpha: 0)** | **Обоснование:** Disabled ghost кнопка имеет прозрачный фон |
| `color.button.ghost.accent.text.default` | `Button.tertiary.accent.default-text` | Скопировать значение напрямую | Использует `bondi-blue/600` из палитры |
| `color.button.ghost.accent.text.disabled` | **НЕТ** | **Палитра: `cool-gray/400` (Light), `cool-gray/700` (Dark)** | **Обоснование:** Приглушенный серый для disabled текста |
| `color.button.ghost.accent.border.default` | **НЕТ** | **Палитра: прозрачный (alpha: 0)** | **Обоснование:** Ghost кнопка не имеет границы |
| `color.button.ghost.accent.border.focus` | **НЕТ** | **Палитра: `bondi-blue/500`** | **Обоснование:** Focus состояние для ghost кнопки может иметь тонкую границу |

**Примечание:** Повторите для всех ролей по аналогии с accent.

## Badge

### Neutral (Gray)

| Новый токен | Старый токен | Откуда брать значение | Примечание |
|-------------|--------------|------------------------|------------|
| `color.badge.neutral.background.default` | `Badges.gray.surface` | Скопировать значение напрямую | Использует `cool-gray/300` из палитры |
| `color.badge.neutral.background.light` | `Badges.gray.surface-light` | Скопировать значение напрямую | Использует `cool-gray/100` из палитры |
| `color.badge.neutral.border.default` | `Badges.gray.stroke` | Скопировать значение напрямую | Использует `cool-gray/400` из палитры |
| `color.badge.neutral.text.default` | `Badges.gray.text` | Скопировать значение напрямую | Использует `cool-gray/800` из палитры |

### Neutral Warm (Gray Warm)

| Новый токен | Старый токен | Откуда брать значение | Примечание |
|-------------|--------------|------------------------|------------|
| `color.badge.neutral.warm.background.default` | `Badges.gray-warm.surface` | Скопировать значение напрямую | Использует `warm-gray/300` из палитры |
| `color.badge.neutral.warm.background.light` | `Badges.gray-warm.surface-light` | Скопировать значение напрямую | Использует `warm-gray/100` из палитры |
| `color.badge.neutral.warm.border.default` | `Badges.gray-warm.stroke` | Скопировать значение напрямую | Использует `warm-gray/400` из палитры |
| `color.badge.neutral.warm.text.default` | `Badges.gray-warm.text` | Скопировать значение напрямую | Использует `warm-gray/800` из палитры |

### Accent

| Новый токен | Старый токен | Откуда брать значение | Примечание |
|-------------|--------------|------------------------|------------|
| `color.badge.accent.background.default` | `Badges.accent.surface` | Скопировать значение напрямую | Проверьте в токенах |
| `color.badge.accent.background.light` | `Badges.accent.surface-light` | Скопировать значение напрямую | Проверьте в токенах |
| `color.badge.accent.border.default` | `Badges.accent.stroke` | Скопировать значение напрямую | Проверьте в токенах |
| `color.badge.accent.text.default` | `Badges.accent.text` | Скопировать значение напрямую | Проверьте в токенах |

**Примечание:** Повторите для danger, warning, success, info по аналогии.

## Status

### Critical

| Новый токен | Старый токен | Откуда брать значение | Примечание |
|-------------|--------------|------------------------|------------|
| `color.status.critical.background.default` | `Status.critical.surface` | Скопировать значение напрямую | Использует `red/200` из палитры |
| `color.status.critical.text.default` | `Status.critical.text` | Скопировать значение напрямую | Использует `red/900` из палитры |

### Warning

| Новый токен | Старый токен | Откуда брать значение | Примечание |
|-------------|--------------|------------------------|------------|
| `color.status.warning.background.default` | `Status.warning.surface` | Скопировать значение напрямую | Использует `yellow/200` из палитры |
| `color.status.warning.text.default` | `Status.warning.text` | Скопировать значение напрямую | Использует `yellow/900` из палитры |
| `color.status.warning.background.strong` | `Status.warning-strong.surface` | Скопировать значение напрямую | Использует `orange/200` из палитры |
| `color.status.warning.text.strong` | `Status.warning-strong.text` | Скопировать значение напрямую | Использует `orange/900` из палитры |

### Success

| Новый токен | Старый токен | Откуда брать значение | Примечание |
|-------------|--------------|------------------------|------------|
| `color.status.success.background.default` | `Status.success.surface` | Скопировать значение напрямую | Проверьте в токенах |
| `color.status.success.text.default` | `Status.success.text` | Скопировать значение напрямую | Проверьте в токенах |

**Примечание:** Повторите для info и neutral по аналогии.

## Chip

| Новый токен | Старый токен | Откуда брать значение | Примечание |
|-------------|--------------|------------------------|------------|
| `color.chip.default.background.default` | `Background.chips.default` | Скопировать значение напрямую | Использует `cool-gray/100` из палитры |
| `color.chip.selected.background.default` | **НЕТ** | **Палитра: `bondi-blue/100` (Light), `bondi-blue/800` (Dark)** | **Обоснование:** Выбранный чип должен иметь акцентный цвет для визуального выделения |
| `color.chip.selected.text.default` | **НЕТ** | **Палитра: `bondi-blue/850` (Light), `bondi-blue/200` (Dark)** | **Обоснование:** Текст на выбранном чипе должен контрастировать с фоном |
| `color.chip.disabled.background.default` | **НЕТ** | **Палитра: `cool-gray/100` (Light), `nile-blue/850` (Dark)** | **Обоснование:** Disabled чип использует нейтральный фон |
| `color.chip.disabled.text.default` | **НЕТ** | **Палитра: `cool-gray/400` (Light), `cool-gray/700` (Dark)** | **Обоснование:** Приглушенный серый для disabled текста |

## DataTable

| Новый токен | Старый токен | Откуда брать значение | Примечание |
|-------------|--------------|------------------------|------------|
| `color.table.header.background.default` | `Background.header.table` или `Background.card.header-table` | Скопировать значение напрямую | Проверьте оба токена, используйте подходящий |
| `color.table.header.text.default` | **НЕТ** | **Палитра: `cool-gray/800` (Light), `cool-gray/200` (Dark)** | **Обоснование:** Темный текст на светлом фоне заголовка для контраста |
| `color.table.row.background.default` | `Background.card.level-1` | Скопировать значение напрямую | Использует `white/950` (Light) или `nile-blue/850` (Dark) |
| `color.table.row.background.hover` | `Background.card.hover` | Скопировать значение напрямую | Использует `cool-gray/100` (Light) или `nile-blue/750` (Dark) |
| `color.table.row.background.selected` | **НЕТ** | **Палитра: `bondi-blue/100` (Light), `bondi-blue/800` (Dark)** | **Обоснование:** Выбранная строка должна иметь акцентный цвет для визуального выделения |
| `color.table.row.text.default` | **НЕТ** | **Палитра: `cool-gray/800` (Light), `cool-gray/200` (Dark)** | **Обоснование:** Основной текст таблицы |
| `color.table.row.text.selected` | **НЕТ** | **Палитра: `bondi-blue/850` (Light), `bondi-blue/200` (Dark)** | **Обоснование:** Текст в выбранной строке должен контрастировать с фоном |

## Общие рекомендации по палитре

### Доступные цвета в палитре "Pallet"

В вашей палитре доступны следующие цвета:
- `warm-gray` - теплый серый
- `cool-gray` - холодный серый
- `nile-blue` - синий (для темных фонов)
- `tory-blue` - темно-синий
- `cornflower-blue` - васильковый синий
- `bondi-blue` - основной акцентный синий
- `java` - бирюзовый
- `shamrock` - зеленый
- `green` - зеленый
- `yellow` - желтый
- `orange` - оранжевый
- `red` - красный
- `rose` - розовый
- `violet` - фиолетовый
- `white` - белый
- `black` - черный

### Цвета для текста на цветном фоне

- **Белый текст:** `white/950` (#FFFFFF) - для всех цветных фонов (accent, danger, warning, success) в Light режиме
- **Темный текст:** `cool-gray/800` (Light) или `cool-gray/200` (Dark) - для светлых фонов
- **В Dark режиме:** Проверьте текущий цвет текста в компоненте, обычно это `white/950` или `cool-gray/200`

### Цвета для фонов в Dark режиме

- **Нейтральные фоны:** `nile-blue/850` или `nile-blue/900` - для карточек и контейнеров
- **Светлые фоны:** `nile-blue/750` или `nile-blue/800` - для hover состояний
- **Акцентные фоны:** Используйте более темные оттенки (например, `bondi-blue/800` для selected состояний)

### Цвета для disabled состояний

- **Disabled фон:** Используйте светлый оттенок основного цвета (например, `bondi-blue/200` для accent в Light режиме)
- **Disabled текст:** 
  - Для цветных кнопок: `white/300` (Light) или `white/950` (Dark)
  - Для нейтральных: `cool-gray/400` (Light) или `cool-gray/700` (Dark)

### Цвета для границ

- **Filled кнопки:** Граница совпадает с фоном или прозрачная
- **Outline кнопки:** Граница использует основной цвет (например, `bondi-blue/600`)
- **Ghost кнопки:** Граница прозрачная или отсутствует

### Цвета для focus состояний

- **Focus граница:** Используйте светлый оттенок основного цвета (например, `bondi-blue/500` или `bondi-blue/300`)
- **В Dark режиме:** Может использоваться более светлый оттенок для лучшей видимости

### Как найти цвет в палитре Figma

1. Откройте Variables в Figma
2. Найдите коллекцию "Pallet"
3. Найдите нужный цвет (например, `bondi-blue`)
4. Выберите нужный оттенок (например, `600`)
5. Используйте "Bind to variable" при создании нового токена, чтобы связать его с палитрой

---

**← Вернуться:** [README.md](README.md)

