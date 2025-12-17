# Подход по функциональности: инструкция для дизайнера

## Что это за подход?

При подходе по функциональности ты думаешь о том, **что делает** каждый элемент в интерфейсе. Токены организованы по их функциональному назначению: это фон, текст, граница, действие или статус.

## Как это работает?

### Основная идея

Вместо того чтобы думать "это кнопка" или "это брендовый цвет", ты думаешь: "это действие", "это фон", "это текст". Все токены разбиты на категории по их функции.

### Структура токенов

Все токены находятся в файле `tokens/semantic_functional.json` и организованы так:

```
semantic_functional.color.background.*     - для фонов
semantic_functional.color.text.*           - для текста
semantic_functional.color.border.*        - для границ
semantic_functional.color.action.*        - для действий (кнопки, ссылки)
semantic_functional.color.status.*        - для статусов (success, error, warning)
```

## Как выбирать токены?

### Шаг 1: Определи функцию элемента

Спроси себя: "Что делает этот элемент?"

- **Фон** → `color.background.*`
- **Текст** → `color.text.*`
- **Граница** → `color.border.*`
- **Действие** (кнопка, ссылка) → `color.action.*`
- **Статус** (успех, ошибка, предупреждение) → `color.status.*`

### Шаг 2: Выбери уровень важности

Внутри каждой категории есть уровни:

**Для фона:**
- `background.primary` - главный фон (обычно белый)
- `background.secondary` - второстепенный фон (светло-серый)
- `background.tertiary` - третичный фон (серый)
- `background.inverse` - инверсный фон (темный)

**Для текста:**
- `text.primary` - главный текст (темный)
- `text.secondary` - второстепенный текст (серый)
- `text.tertiary` - третичный текст (светло-серый)
- `text.inverse` - инверсный текст (белый)
- `text.disabled` - неактивный текст

**Для действий:**
- `action.primary` - главное действие (синий)
- `action.primary_hover` - hover состояние
- `action.primary_active` - active состояние
- `action.secondary` - второстепенное действие (серый)

**Для границ:**
- `border.default` - обычная граница
- `border.hover` - граница при hover
- `border.focus` - граница при focus (синяя)
- `border.error` - граница ошибки (красная)
- `border.disabled` - неактивная граница

**Для статусов:**
- `status.success` - успех (зеленый)
- `status.error` - ошибка (красный)
- `status.warning` - предупреждение (желтый)
- `status.*_background` - фон для статуса

### Шаг 3: Используй токен в компоненте

Когда создаешь компонентный токен, просто ссылайся на семантический:

```json
{
  "button": {
    "primary": {
      "background": {
        "default": "{semantic_functional.color.action.primary}",
        "hover": "{semantic_functional.color.action.primary_hover}"
      },
      "text": {
        "default": "{semantic_functional.color.text.inverse}"
      }
    }
  }
}
```

## Примеры использования

### Пример 1: Primary кнопка

**Вопрос:** Что нужно для primary кнопки?

**Ответ:**
- Фон → это действие → `action.primary`
- Текст → инверсный (белый на синем) → `text.inverse`
- Граница → такая же как фон → `action.primary`

**Результат:**
```json
"button.primary.background.default": "{semantic_functional.color.action.primary}"
"button.primary.text.default": "{semantic_functional.color.text.inverse}"
"button.primary.border.default": "{semantic_functional.color.action.primary}"
```

### Пример 2: Input поле

**Вопрос:** Что нужно для input поля?

**Ответ:**
- Фон → главный фон → `background.primary`
- Текст → главный текст → `text.primary`
- Граница → обычная → `border.default`
- Граница при focus → `border.focus`
- Граница при ошибке → `border.error`

**Результат:**
```json
"input.background.default": "{semantic_functional.color.background.primary}"
"input.text.default": "{semantic_functional.color.text.primary}"
"input.border.default": "{semantic_functional.color.border.default}"
"input.border.focus": "{semantic_functional.color.border.focus}"
"input.border.error": "{semantic_functional.color.border.error}"
```

### Пример 3: Badge со статусом

**Вопрос:** Что нужно для success badge?

**Ответ:**
- Фон → статус успех → `status.success_background`
- Текст → темный текст на светлом фоне → `text.primary`
- Граница → статус успех → `status.success`

**Результат:**
```json
"badge.success.background": "{semantic_functional.color.status.success_background}"
"badge.success.text": "{semantic_functional.color.text.primary}"
"badge.success.border": "{semantic_functional.color.status.success}"
```

## Spacing, Typography, Border Radius

### Spacing

Для отступов используй:
- `spacing.padding.small/medium/large` - для padding
- `spacing.margin.small/medium/large` - для margin
- `spacing.gap.small/medium/large` - для gap между элементами

**Пример:**
```json
"button.padding.x": "{semantic_functional.spacing.padding.medium}"
"button.padding.y": "{semantic_functional.spacing.padding.small}"
```

### Typography

Для типографики используй:
- `typography.font_size.body/heading_*` - размеры
- `typography.font_weight.body/heading_*` - веса
- `typography.line_height.body/heading/relaxed` - высота строки

**Пример:**
```json
"button.typography.font_size": "{semantic_functional.typography.font_size.body}"
"button.typography.font_weight": "{semantic_functional.typography.font_weight.body_emphasis}"
```

### Border Radius

Для скругления используй:
- `border_radius.small/medium/large/full` - уровни скругления

**Пример:**
```json
"button.border_radius": "{semantic_functional.border_radius.medium}"
```

## Преимущества подхода

✅ **Интуитивность** - легко понять, что делает каждый токен
✅ **Понятность** - название говорит само за себя
✅ **Быстрота** - не нужно думать о роли или иерархии

## Недостатки подхода

❌ **Может быть сложно для White Label** - функциональность привязана к конкретным значениям
❌ **Много категорий** - нужно помнить все категории (background, text, border, action, status)

## Когда использовать?

- ✅ Когда нужна интуитивность и понятность
- ✅ Когда команда небольшая и все понимают функциональность
- ✅ Когда не планируется White Label
- ✅ Для быстрого прототипирования

## Примеры компонентов

Чтобы увидеть, как этот подход применяется на практике, посмотри примеры:

- [Кнопка (Button)](../component_tokens/button/functional.md)
- [Инпут (Input)](../component_tokens/input/functional.md)
- [Таблица (Table)](../component_tokens/table/functional.md)
- [Бейдж (Badge)](../component_tokens/badge/functional.md)

## См. также

- [Сравнение всех подходов](../README.md)
- [Стоимость создания семантического слоя](../semantic_layer_cost_benefit.md)
- [Файл с токенами](../../tokens/semantic_functional.json)

