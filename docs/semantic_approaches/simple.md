# Простой подход: инструкция для дизайнера

## Что это за подход?

Простой подход — это максимально упрощенная версия семантических токенов. Здесь нет категорий типа `action`, `background`, `brand` или `level_1`. Все токены называются просто: `primary`, `secondary`, `text`, `border`.

## Как это работает?

### Основная идея

Вместо того чтобы думать "это действие или фон?" или "это бренд или нейтральный?", ты просто думаешь: "это primary", "это secondary", "это текст". Все токены на одном уровне, без сложных категорий.

### Структура токенов

Все токены находятся в файле `tokens/semantic_simple.json` и организованы так:

```
semantic_simple.color.primary          - главный цвет (синий)
semantic_simple.color.secondary       - второстепенный цвет (серый)
semantic_simple.color.text             - текст
semantic_simple.color.background      - фон
semantic_simple.color.border           - граница
semantic_simple.color.status_*         - статусы
```

## Как выбирать токены?

### Шаг 1: Определи, что нужно

Спроси себя: "Что это за элемент?"

- **Primary элемент** (primary кнопка) → `color.primary`
- **Secondary элемент** (secondary кнопка) → `color.secondary`
- **Текст** → `color.text` или `color.text_secondary`
- **Фон** → `color.background` или `color.background_secondary`
- **Граница** → `color.border` или `color.border_focus`
- **Статус** → `color.status_success/error/warning`

### Шаг 2: Выбери конкретный токен

Все токены на одном уровне, просто выбирай нужный:

**Для цветов:**
- `primary` - главный цвет (синий 500)
- `primary_hover` - hover состояние (синий 600)
- `primary_active` - active состояние (синий 700)
- `secondary` - второстепенный цвет (серый 100)
- `secondary_hover` - hover состояние (серый 200)
- `tertiary` - третичный цвет (серый 50)

**Для текста:**
- `text` - главный текст (темно-серый 900)
- `text_secondary` - второстепенный текст (серый 600)
- `text_tertiary` - третичный текст (серый 400)
- `text_inverse` - инверсный текст (белый)
- `text_disabled` - неактивный текст (серый 400)

**Для фона:**
- `background` - главный фон (белый)
- `background_secondary` - второстепенный фон (серый 50)
- `background_tertiary` - третичный фон (серый 100)
- `background_inverse` - инверсный фон (темно-серый 900)

**Для границ:**
- `border` - обычная граница (серый 300)
- `border_hover` - граница при hover (серый 400)
- `border_focus` - граница при focus (синий 500)
- `border_error` - граница ошибки (красный 500)
- `border_disabled` - неактивная граница (серый 200)

**Для статусов:**
- `status_success` - успех (зеленый 500)
- `status_error` - ошибка (красный 500)
- `status_warning` - предупреждение (желтый 500)
- `status_*_background` - фон для статуса

### Шаг 3: Используй токен в компоненте

Когда создаешь компонентный токен, просто ссылайся на семантический:

```json
{
  "button": {
    "primary": {
      "background": {
        "default": "{semantic_simple.color.primary}",
        "hover": "{semantic_simple.color.primary_hover}"
      },
      "text": {
        "default": "{semantic_simple.color.text_inverse}"
      }
    }
  }
}
```

## Примеры использования

### Пример 1: Primary кнопка

**Вопрос:** Что нужно для primary кнопки?

**Ответ:**
- Фон → primary цвет → `primary`
- Фон при hover → primary hover → `primary_hover`
- Текст → инверсный текст → `text_inverse`

**Результат:**
```json
"button.primary.background.default": "{semantic_simple.color.primary}"
"button.primary.background.hover": "{semantic_simple.color.primary_hover}"
"button.primary.text.default": "{semantic_simple.color.text_inverse}"
```

### Пример 2: Secondary кнопка

**Вопрос:** Что нужно для secondary кнопки?

**Ответ:**
- Фон → secondary цвет → `secondary`
- Фон при hover → secondary hover → `secondary_hover`
- Текст → главный текст → `text`
- Граница → обычная граница → `border`

**Результат:**
```json
"button.secondary.background.default": "{semantic_simple.color.secondary}"
"button.secondary.background.hover": "{semantic_simple.color.secondary_hover}"
"button.secondary.text.default": "{semantic_simple.color.text}"
"button.secondary.border.default": "{semantic_simple.color.border}"
```

### Пример 3: Input поле

**Вопрос:** Что нужно для input поля?

**Ответ:**
- Фон → главный фон → `background`
- Текст → главный текст → `text`
- Placeholder → второстепенный текст → `text_secondary`
- Граница → обычная граница → `border`
- Граница при focus → focus граница → `border_focus`
- Граница при ошибке → ошибка → `border_error`

**Результат:**
```json
"input.background.default": "{semantic_simple.color.background}"
"input.text.default": "{semantic_simple.color.text}"
"input.text.placeholder": "{semantic_simple.color.text_secondary}"
"input.border.default": "{semantic_simple.color.border}"
"input.border.focus": "{semantic_simple.color.border_focus}"
"input.border.error": "{semantic_simple.color.border_error}"
```

### Пример 4: Badge со статусом

**Вопрос:** Что нужно для success badge?

**Ответ:**
- Фон → статус успех фон → `status_success_background`
- Текст → главный текст → `text`
- Граница → статус успех → `status_success`

**Результат:**
```json
"badge.success.background": "{semantic_simple.color.status_success_background}"
"badge.success.text": "{semantic_simple.color.text}"
"badge.success.border": "{semantic_simple.color.status_success}"
```

## Spacing, Typography, Border Radius

### Spacing

Для отступов используй простые размеры:

- `spacing.small` - маленький (8px)
- `spacing.medium` - средний (16px)
- `spacing.large` - большой (24px)
- `spacing.xlarge` - очень большой (32px)

**Пример:**
```json
"button.padding.x": "{semantic_simple.spacing.medium}"
"button.padding.y": "{semantic_simple.spacing.small}"
```

### Typography

Для типографики используй простые названия:

- `typography.font_size.body/body_small/heading_*` - размеры
- `typography.font_weight.regular/medium/semibold/bold` - веса
- `typography.line_height.normal/tight/relaxed` - высота строки

**Пример:**
```json
"button.typography.font_size": "{semantic_simple.typography.font_size.body}"
"button.typography.font_weight": "{semantic_simple.typography.font_weight.medium}"
```

### Border Radius

Для скругления используй простые размеры:

- `border_radius.small` - маленькое (2px)
- `border_radius.medium` - среднее (4px)
- `border_radius.large` - большое (8px)
- `border_radius.full` - полное (9999px)

**Пример:**
```json
"button.border_radius": "{semantic_simple.border_radius.medium}"
```

## Преимущества подхода

✅ **Максимальная простота** - нет категорий, все на одном уровне
✅ **Быстрота** - не нужно думать о категориях
✅ **Без ошибок** - нет пересечений между категориями
✅ **Интуитивность** - простые названия: primary, secondary, text

## Недостатки подхода

❌ **Может быть неочевидно** - не всегда понятно, что такое `primary` (цвет или компонент?)
❌ **Ограниченность** - сложно расширять без добавления новых токенов
❌ **Меньше структуры** - все токены на одном уровне

## Когда использовать?

- ✅ Когда нужна максимальная простота
- ✅ Когда команда небольшая
- ✅ Когда не нужна сложная структура
- ✅ Для быстрого прототипирования
- ✅ Когда все понимают простые названия

## Примеры компонентов

⚠️ **Примечание:** Примеры компонентов для простого подхода пока не созданы, так как это новый подход. Ты можешь использовать этот подход, создавая компонентные токены по аналогии с другими подходами.

Для понимания структуры компонентных токенов посмотри примеры других подходов:

- [Кнопка (Button) - функциональный подход](../component_tokens/button/functional.md)
- [Инпут (Input) - функциональный подход](../component_tokens/input/functional.md)
- [Таблица (Table) - функциональный подход](../component_tokens/table/functional.md)
- [Бейдж (Badge) - функциональный подход](../component_tokens/badge/functional.md)

## См. также

- [Сравнение всех подходов](../README.md)
- [Стоимость создания семантического слоя](../semantic_layer_cost_benefit.md)
- [Файл с токенами](../../tokens/semantic_simple.json)

