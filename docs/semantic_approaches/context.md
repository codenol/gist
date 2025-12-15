# Подход по контексту: инструкция для дизайнера

## Что это за подход?

При подходе по контексту ты **не используешь семантический слой**. Компонентные токены ссылаются напрямую на базовый слой (`base.*`), минуя семантический слой.

## Как это работает?

### Основная идея

Вместо того чтобы использовать промежуточный семантический слой, ты напрямую берешь значения из базового слоя. Это максимально просто: нужен синий цвет → берешь `base.color.blue.500`, нужен отступ → берешь `base.spacing.md`.

### Структура токенов

Семантический слой **не используется**. Все токены находятся в файле `tokens/base.json`:

```
base.color.blue.500          - синий цвет
base.color.gray.900          - темно-серый цвет
base.spacing.md              - средний отступ
base.border_radius.md        - среднее скругление
base.typography.font_size.base - базовый размер шрифта
```

## Как выбирать токены?

### Шаг 1: Определи, что нужно

Спроси себя: "Какое конкретное значение мне нужно?"

- Нужен синий цвет → `base.color.blue.500`
- Нужен белый фон → `base.color.white`
- Нужен средний отступ → `base.spacing.md`
- Нужен базовый размер шрифта → `base.typography.font_size.base`

### Шаг 2: Используй токен напрямую в компоненте

Когда создаешь компонентный токен, ссылайся напрямую на базовый слой:

```json
{
  "button": {
    "primary": {
      "background": {
        "default": "{base.color.blue.500}",
        "hover": "{base.color.blue.600}",
        "active": "{base.color.blue.700}"
      },
      "text": {
        "default": "{base.color.white}"
      }
    }
  }
}
```

## Примеры использования

### Пример 1: Primary кнопка

**Вопрос:** Какие конкретные значения нужны для primary кнопки?

**Ответ:**
- Фон → синий 500 → `base.color.blue.500`
- Фон при hover → синий 600 → `base.color.blue.600`
- Фон при active → синий 700 → `base.color.blue.700`
- Текст → белый → `base.color.white`

**Результат:**
```json
"button.primary.background.default": "{base.color.blue.500}"
"button.primary.background.hover": "{base.color.blue.600}"
"button.primary.background.active": "{base.color.blue.700}"
"button.primary.text.default": "{base.color.white}"
```

### Пример 2: Secondary кнопка

**Вопрос:** Какие конкретные значения нужны для secondary кнопки?

**Ответ:**
- Фон → серый 100 → `base.color.gray.100`
- Фон при hover → серый 200 → `base.color.gray.200`
- Текст → темно-серый 900 → `base.color.gray.900`
- Граница → серый 300 → `base.color.gray.300`

**Результат:**
```json
"button.secondary.background.default": "{base.color.gray.100}"
"button.secondary.background.hover": "{base.color.gray.200}"
"button.secondary.text.default": "{base.color.gray.900}"
"button.secondary.border.default": "{base.color.gray.300}"
```

### Пример 3: Input поле

**Вопрос:** Какие конкретные значения нужны для input поля?

**Ответ:**
- Фон → белый → `base.color.white`
- Текст → темно-серый 900 → `base.color.gray.900`
- Placeholder → серый 500 → `base.color.gray.500`
- Граница → серый 300 → `base.color.gray.300`
- Граница при focus → синий 500 → `base.color.blue.500`
- Граница при ошибке → красный 500 → `base.color.red.500`

**Результат:**
```json
"input.background.default": "{base.color.white}"
"input.text.default": "{base.color.gray.900}"
"input.text.placeholder": "{base.color.gray.500}"
"input.border.default": "{base.color.gray.300}"
"input.border.focus": "{base.color.blue.500}"
"input.border.error": "{base.color.red.500}"
```

## Spacing, Typography, Border Radius

### Spacing

Для отступов используй базовые значения:

- `base.spacing.xs` - очень маленький (4px)
- `base.spacing.sm` - маленький (8px)
- `base.spacing.md` - средний (16px)
- `base.spacing.lg` - большой (24px)
- `base.spacing.xl` - очень большой (32px)

**Пример:**
```json
"button.padding.x": "{base.spacing.md}"
"button.padding.y": "{base.spacing.sm}"
```

### Typography

Для типографики используй базовые значения:

- `base.typography.font_size.xs/sm/base/lg/xl/2xl/3xl` - размеры
- `base.typography.font_weight.light/regular/medium/semibold/bold` - веса
- `base.typography.line_height.tight/normal/relaxed` - высота строки

**Пример:**
```json
"button.typography.font_size": "{base.typography.font_size.base}"
"button.typography.font_weight": "{base.typography.font_weight.medium}"
"button.typography.line_height": "{base.typography.line_height.normal}"
```

### Border Radius

Для скругления используй базовые значения:

- `base.border_radius.none` - без скругления
- `base.border_radius.sm` - маленькое (2px)
- `base.border_radius.md` - среднее (4px)
- `base.border_radius.lg` - большое (8px)
- `base.border_radius.xl` - очень большое (12px)
- `base.border_radius.full` - полное (9999px)

**Пример:**
```json
"button.border_radius": "{base.border_radius.md}"
```

## Преимущества подхода

✅ **Максимальная простота** - не нужно думать о промежуточных слоях
✅ **Прямая связь** - четкая связь между компонентом и базовыми значениями
✅ **Понятность** - сразу видно, какое базовое значение используется
✅ **Быстрый старт** - можно сразу начинать работать

## Недостатки подхода

❌ **Нет абстракции** - сложнее менять значения для всех компонентов
❌ **Сложнее White Label** - нужно менять компонентные токены
❌ **Дублирование** - одни и те же значения повторяются в разных компонентах
❌ **Проблемы масштабирования** - при большом количестве компонентов изменения становятся трудоемкими

⚠️ **Важно:** При большом количестве компонентов (50+) контекстный подход создает серьезные проблемы масштабирования. Подробнее см. [Масштабирование контекстного подхода](../context_approach_scaling.md).

## Когда использовать?

- ✅ Для быстрого прототипирования
- ✅ Для небольших проектов (< 50 компонентов)
- ✅ Когда компоненты действительно уникальны
- ✅ Когда изменения редки (< 5-10 в год)
- ✅ Когда нет планов на White Label

## Примеры компонентов

Чтобы увидеть, как этот подход применяется на практике, посмотри примеры:

- [Кнопка (Button)](../component_tokens/button/context.md)
- [Инпут (Input)](../component_tokens/input/context.md)
- [Таблица (Table)](../component_tokens/table/context.md)
- [Бейдж (Badge)](../component_tokens/badge/context.md)

## См. также

- [Сравнение всех подходов](../README.md)
- [Масштабирование контекстного подхода](../context_approach_scaling.md)
- [Стоимость создания семантического слоя](../semantic_layer_cost_benefit.md)
- [Файл с базовыми токенами](../../tokens/base.json)

