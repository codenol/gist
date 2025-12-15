# Подход по иерархии: инструкция для дизайнера

## Что это за подход?

При подходе по иерархии ты думаешь о **уровне важности** каждого элемента в интерфейсе. Токены организованы по уровням: level_1 (самый важный), level_2 (средний), level_3 (наименее важный).

## Как это работает?

### Основная идея

Вместо того чтобы думать "это действие" или "это бренд", ты думаешь: "это самый важный элемент", "это средний по важности", "это наименее важный". Все токены разбиты на уровни по их визуальной и функциональной важности.

### Структура токенов

Все токены находятся в файле `tokens/semantic_hierarchy.json` и организованы так:

```
semantic_hierarchy.color.level_1.*     - самый важный уровень (primary кнопки, главный текст)
semantic_hierarchy.color.level_2.*    - средний уровень (secondary кнопки, второстепенный текст)
semantic_hierarchy.color.level_3.*    - наименее важный уровень (disabled, приглушенный текст)
semantic_hierarchy.color.status.*     - статусы (success, error, warning)
```

## Как выбирать токены?

### Шаг 1: Определи уровень важности элемента

Спроси себя: "Насколько важен этот элемент в интерфейсе?"

- **Level 1** - самый важный (primary кнопки, главный текст, основные действия)
- **Level 2** - средний (secondary кнопки, второстепенный текст, обычные элементы)
- **Level 3** - наименее важный (disabled элементы, приглушенный текст, фоновые элементы)
- **Status** - статусы (success, error, warning) - отдельная категория

### Шаг 2: Выбери тип элемента

Внутри каждого уровня есть типы элементов:

**Для Level 1:**
- `level_1.background` - главный фон (белый)
- `level_1.text` - главный текст (темный)
- `level_1.border` - главная граница
- `level_1.action` - главное действие (синий)
- `level_1.action_hover` - hover состояние
- `level_1.action_active` - active состояние

**Для Level 2:**
- `level_2.background` - средний фон (светло-серый)
- `level_2.text` - средний текст (темный)
- `level_2.text_secondary` - второстепенный текст (серый)
- `level_2.border` - средняя граница
- `level_2.action` - среднее действие

**Для Level 3:**
- `level_3.background` - приглушенный фон (серый)
- `level_3.text` - приглушенный текст (серый)
- `level_3.text_secondary` - очень приглушенный текст (светло-серый)
- `level_3.border` - приглушенная граница
- `level_3.action` - приглушенное действие (серый)

**Для статусов:**
- `status.success` - успех
- `status.error` - ошибка
- `status.warning` - предупреждение
- `status.*_background` - фон для статуса

### Шаг 3: Используй токен в компоненте

Когда создаешь компонентный токен, просто ссылайся на семантический:

```json
{
  "button": {
    "primary": {
      "background": {
        "default": "{semantic_hierarchy.color.level_1.action}",
        "hover": "{semantic_hierarchy.color.level_1.action_hover}"
      },
      "text": {
        "default": "{semantic_hierarchy.color.level_1.text}"
      }
    }
  }
}
```

## Примеры использования

### Пример 1: Primary кнопка

**Вопрос:** Какой уровень важности у primary кнопки?

**Ответ:**
- Это самый важный элемент → `level_1.action`
- Текст на ней → главный текст → `level_1.text`

**Результат:**
```json
"button.primary.background.default": "{semantic_hierarchy.color.level_1.action}"
"button.primary.text.default": "{semantic_hierarchy.color.level_1.text}"
```

### Пример 2: Secondary кнопка

**Вопрос:** Какой уровень важности у secondary кнопки?

**Ответ:**
- Это средний по важности элемент → `level_2.background`
- Текст на ней → средний текст → `level_2.text`

**Результат:**
```json
"button.secondary.background.default": "{semantic_hierarchy.color.level_2.background}"
"button.secondary.text.default": "{semantic_hierarchy.color.level_2.text}"
```

### Пример 3: Disabled кнопка

**Вопрос:** Какой уровень важности у disabled кнопки?

**Ответ:**
- Это наименее важный элемент → `level_3.*`
- Фон → приглушенный → `level_3.background` или `level_3.text_secondary`
- Текст → приглушенный → `level_3.text_secondary`

**Результат:**
```json
"button.primary.background.disabled": "{semantic_hierarchy.color.level_3.text_secondary}"
"button.primary.text.disabled": "{semantic_hierarchy.color.level_3.text_secondary}"
```

### Пример 4: Input поле

**Вопрос:** Какой уровень важности у input поля?

**Ответ:**
- Фон → главный фон → `level_1.background`
- Текст → главный текст → `level_1.text`
- Граница → главная граница → `level_1.border`
- Граница при focus → главное действие → `level_1.action`
- Placeholder → приглушенный текст → `level_3.text_secondary`

**Результат:**
```json
"input.background.default": "{semantic_hierarchy.color.level_1.background}"
"input.text.default": "{semantic_hierarchy.color.level_1.text}"
"input.border.default": "{semantic_hierarchy.color.level_1.border}"
"input.border.focus": "{semantic_hierarchy.color.level_1.action}"
"input.text.placeholder": "{semantic_hierarchy.color.level_3.text_secondary}"
```

## Spacing, Typography, Border Radius

### Spacing

Для отступов используются уровни:

- `spacing.level_1.*` - компактные отступы (sm)
- `spacing.level_2.*` - средние отступы (md)
- `spacing.level_3.*` - большие отступы (lg)

**Пример:**
```json
"button.padding.x": "{semantic_hierarchy.spacing.level_2.padding}"
"button.padding.y": "{semantic_hierarchy.spacing.level_1.padding}"
```

### Typography

Для типографики также используются уровни:

- `typography.level_1.*` - самый важный текст (заголовки, 3xl)
- `typography.level_2.*` - средний текст (подзаголовки, xl)
- `typography.level_3.*` - обычный текст (body, base)
- `typography.body.*` - основной текст
- `typography.body_small.*` - мелкий текст

**Пример:**
```json
"button.typography.font_size": "{semantic_hierarchy.typography.level_3.font_size}"
"button.typography.font_weight": "{semantic_hierarchy.typography.level_3.font_weight}"
```

### Border Radius

Для скругления используются уровни:

- `border_radius.level_1` - маленькое скругление (sm)
- `border_radius.level_2` - среднее скругление (md)
- `border_radius.level_3` - большое скругление (lg)

**Пример:**
```json
"button.border_radius": "{semantic_hierarchy.border_radius.level_2}"
```

## Преимущества подхода

✅ **Четкая визуальная иерархия** - сразу видно, что важнее
✅ **Легко масштабировать** - можно добавить level_4, level_5
✅ **Понятная структура** - все по уровням важности

## Недостатки подхода

❌ **Может быть сложно определить уровень** - не всегда очевидно, какой уровень использовать
❌ **Требует понимания иерархии** - нужно знать все уровни

## Когда использовать?

- ✅ Когда важна визуальная иерархия
- ✅ Когда есть четкие уровни важности элементов
- ✅ Когда нужно легко масштабировать систему
- ✅ Для сложных интерфейсов с множеством уровней

## Примеры компонентов

Чтобы увидеть, как этот подход применяется на практике, посмотри примеры:

- [Кнопка (Button)](../component_tokens/button/hierarchy.md)
- [Инпут (Input)](../component_tokens/input/hierarchy.md)
- [Таблица (Table)](../component_tokens/table/hierarchy.md)
- [Бейдж (Badge)](../component_tokens/badge/hierarchy.md)

## См. также

- [Сравнение всех подходов](../README.md)
- [Стоимость создания семантического слоя](../semantic_layer_cost_benefit.md)
- [Файл с токенами](../../tokens/semantic_hierarchy.json)

