# Подход по ролям: инструкция для дизайнера

## Что это за подход?

При подходе по ролям ты думаешь о **роли** каждого элемента в системе дизайна. Токены организованы по их роли: это бренд, нейтральный элемент, статус, интерактивный элемент или поверхность.

## Как это работает?

### Основная идея

Вместо того чтобы думать "это действие" или "это фон", ты думаешь: "это брендовый элемент", "это нейтральный элемент", "это интерактивный элемент". Все токены разбиты на категории по их роли в системе.

### Структура токенов

Все токены находятся в файле `tokens/semantic_roles.json` и организованы так:

```
semantic_roles.color.brand.*        - брендовые элементы (primary кнопки, логотипы)
semantic_roles.color.neutral.*     - нейтральные элементы (текст, границы)
semantic_roles.color.status.*      - статусы (success, error, warning)
semantic_roles.color.interactive.* - интерактивные элементы (hover, focus, active)
semantic_roles.color.surface.*     - поверхности (фоны)
```

## Как выбирать токены?

### Шаг 1: Определи роль элемента

Спроси себя: "Какую роль играет этот элемент в системе?"

- **Бренд** (primary кнопка, логотип) → `color.brand.*`
- **Нейтральный** (текст, границы) → `color.neutral.*`
- **Статус** (успех, ошибка, предупреждение) → `color.status.*`
- **Интерактивный** (hover, focus, active) → `color.interactive.*`
- **Поверхность** (фон) → `color.surface.*`

### Шаг 2: Выбери конкретный токен

Внутри каждой категории есть конкретные токены:

**Для бренда:**
- `brand.primary` - главный брендовый цвет
- `brand.primary_hover` - hover состояние
- `brand.primary_active` - active состояние
- `brand.secondary` - второстепенный брендовый цвет

**Для нейтрального:**
- `neutral.text_primary` - главный текст
- `neutral.text_secondary` - второстепенный текст
- `neutral.text_tertiary` - третичный текст
- `neutral.text_disabled` - неактивный текст
- `neutral.border_default` - обычная граница
- `neutral.border_hover` - граница при hover
- `neutral.border_disabled` - неактивная граница
- `neutral.light/medium/dark` - нейтральные фоны

**Для статусов:**
- `status.success` - успех
- `status.error` - ошибка
- `status.warning` - предупреждение
- `status.*_background` - фон для статуса

**Для интерактивных:**
- `interactive.default` - обычное состояние
- `interactive.hover` - hover
- `interactive.active` - active
- `interactive.focus` - focus
- `interactive.disabled` - disabled
- `interactive.secondary` - второстепенное интерактивное

**Для поверхностей:**
- `surface.primary` - главная поверхность (белый)
- `surface.secondary` - второстепенная поверхность (светло-серый)
- `surface.tertiary` - третичная поверхность (серый)
- `surface.inverse` - инверсная поверхность (темный)

### Шаг 3: Используй токен в компоненте

Когда создаешь компонентный токен, просто ссылайся на семантический:

```json
{
  "button": {
    "primary": {
      "background": {
        "default": "{semantic_roles.color.brand.primary}",
        "hover": "{semantic_roles.color.brand.primary_hover}"
      },
      "text": {
        "default": "{semantic_roles.color.surface.primary}"
      }
    }
  }
}
```

## Примеры использования

### Пример 1: Primary кнопка

**Вопрос:** Какую роль играет primary кнопка?

**Ответ:**
- Это брендовый элемент → `brand.primary`
- Текст на ней → поверхность (белый) → `surface.primary`

**Результат:**
```json
"button.primary.background.default": "{semantic_roles.color.brand.primary}"
"button.primary.text.default": "{semantic_roles.color.surface.primary}"
```

### Пример 2: Secondary кнопка

**Вопрос:** Какую роль играет secondary кнопка?

**Ответ:**
- Это нейтральная поверхность → `surface.secondary`
- Текст на ней → нейтральный текст → `neutral.text_primary`
- Граница → нейтральная граница → `neutral.border_default`

**Результат:**
```json
"button.secondary.background.default": "{semantic_roles.color.surface.secondary}"
"button.secondary.text.default": "{semantic_roles.color.neutral.text_primary}"
"button.secondary.border.default": "{semantic_roles.color.neutral.border_default}"
```

### Пример 3: Input поле

**Вопрос:** Какую роль играет input поле?

**Ответ:**
- Фон → поверхность → `surface.primary`
- Текст → нейтральный текст → `neutral.text_primary`
- Граница → нейтральная граница → `neutral.border_default`
- Граница при focus → интерактивная → `interactive.focus`
- Граница при ошибке → статус → `status.error`

**Результат:**
```json
"input.background.default": "{semantic_roles.color.surface.primary}"
"input.text.default": "{semantic_roles.color.neutral.text_primary}"
"input.border.default": "{semantic_roles.color.neutral.border_default}"
"input.border.focus": "{semantic_roles.color.interactive.focus}"
"input.border.error": "{semantic_roles.color.status.error}"
```

## Spacing, Typography, Border Radius

### Spacing

Для отступов используется концепция **ролей**:

- `spacing.role.compact` - компактный отступ
- `spacing.role.regular` - обычный отступ
- `spacing.role.spacious` - просторный отступ
- `spacing.role.extra_spacious` - очень просторный отступ

**Пример:**
```json
"button.padding.x": "{semantic_roles.spacing.role.regular}"
"button.padding.y": "{semantic_roles.spacing.role.compact}"
```

### Typography

Для типографики также используются роли:

- `typography.role.title` - заголовок страницы
- `typography.role.subtitle` - подзаголовок
- `typography.role.heading` - заголовок секции
- `typography.role.body` - основной текст
- `typography.role.body_small` - мелкий текст
- `typography.role.caption` - подпись

**Пример:**
```json
"button.typography.font_size": "{semantic_roles.typography.role.body.font_size}"
"button.typography.font_weight": "{semantic_roles.typography.role.body.font_weight}"
```

### Border Radius

Для скругления используются роли:

- `border_radius.role.sharp` - без скругления
- `border_radius.role.subtle` - легкое скругление
- `border_radius.role.rounded` - среднее скругление
- `border_radius.role.soft` - большое скругление
- `border_radius.role.pill` - полное скругление

**Пример:**
```json
"button.border_radius": "{semantic_roles.border_radius.role.rounded}"
```

## Преимущества подхода

✅ **Идеально для White Label** - роли остаются, значения меняются
✅ **Системность** - все элементы имеют четкую роль
✅ **Масштабируемость** - легко добавлять новые роли

## Недостатки подхода

❌ **Требует понимания системы** - нужно знать все роли
❌ **Может быть менее интуитивным** - не всегда очевидно, какая роль у элемента

## Когда использовать?

- ✅ Когда нужен White Label
- ✅ Когда команда большая и нужна системность
- ✅ Когда проект долгосрочный
- ✅ Когда нужна гибкость для разных брендов

## Примеры компонентов

Чтобы увидеть, как этот подход применяется на практике, посмотри примеры:

- [Кнопка (Button)](../component_tokens/button/roles.md)
- [Инпут (Input)](../component_tokens/input/roles.md)
- [Таблица (Table)](../component_tokens/table/roles.md)
- [Бейдж (Badge)](../component_tokens/badge/roles.md)

## См. также

- [Сравнение всех подходов](../README.md)
- [Стоимость создания семантического слоя](../semantic_layer_cost_benefit.md)
- [Файл с токенами](../../tokens/semantic_roles.json)

