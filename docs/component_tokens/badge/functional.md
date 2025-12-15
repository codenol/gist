# Создание компонентных токенов для бейджа: подход по функциональности

## Задача

Я дизайнер и у меня задача создать компонент "бейдж" (метка). Мне нужно определить все токены, которые будут использоваться для стилизации этого компонента, опираясь на семантический слой, организованный по функциональности.

## Выбор семантики

Я выбираю подход по функциональности (`semantic_functional`), потому что мне нужно думать о том, **что делает** каждый вариант бейджа. Бейдж показывает статус или категорию, поэтому мне важны функциональные категории: `status`, `action`, `background`, `text`.

## Процесс создания токенов

### Шаг 1: Анализ структуры бейджа

Сначала я думаю о том, из каких частей состоит бейдж:
- Фон (background) — показывает категорию/статус
- Текст (text) — читаемый текст на фоне
- Граница (border) — опционально
- Варианты: success, error, warning, info, neutral
- Размеры: small, medium, large

### Шаг 2: Выбор семантических токенов для вариантов статуса

Бейдж часто показывает статус, поэтому я использую токены статусов:
- **Success**: `semantic_functional.color.status.success_background` для фона, `semantic_functional.color.status.success` для текста и границы
- **Error**: `semantic_functional.color.status.error_background` для фона, `semantic_functional.color.status.error` для текста и границы
- **Warning**: `semantic_functional.color.status.warning_background` для фона, `semantic_functional.color.status.warning` для текста и границы

Это функционально правильно — бейдж показывает статус, поэтому я использую токены статусов.

### Шаг 3: Выбор токенов для info и neutral вариантов

Для info бейджа я использую:
- `semantic_functional.color.action.primary` — это действие/информация, функционально подходит
- `semantic_functional.color.text.inverse` — белый текст на цветном фоне

Для neutral бейджа:
- `semantic_functional.color.background.secondary` — нейтральный фон
- `semantic_functional.color.text.primary` — обычный текст
- `semantic_functional.color.border.default` — стандартная граница

### Шаг 4: Spacing для бейджа

Для отступов я думаю функционально:
- `semantic_functional.spacing.padding.small` для padding — бейдж должен быть компактным
- Для больших бейджей: `semantic_functional.spacing.padding.medium`

### Шаг 5: Typography

Для типографики:
- `semantic_functional.typography.font_size.body_small` — маленький текст, подходит для бейджа
- `semantic_functional.typography.font_weight.body_emphasis` — немного жирнее, чтобы выделить
- `semantic_functional.typography.line_height.body` — стандартная высота строки

### Шаг 6: Border radius

- `semantic_functional.border_radius.full` — полное скругление (pill), функционально подходит для бейджа, делает его похожим на метку

### Шаг 7: Размеры

Для размеров я варьирую padding и font_size:
- Small: `padding.small` + `font_size.xs`
- Medium: `padding.small` + `font_size.body_small`
- Large: `padding.medium` + `font_size.body`

## Примеры использования

```json
{
  "badge.variant.success.background": "{semantic_functional.color.status.success_background}",
  "badge.variant.success.text": "{semantic_functional.color.status.success}",
  "badge.padding.x": "{semantic_functional.spacing.padding.small}",
  "badge.border_radius": "{semantic_functional.border_radius.full}"
}
```

## Преимущества подхода

1. **Интуитивность**: Я сразу вижу, что `status.success` — для успеха, `status.error` — для ошибки
2. **Функциональность**: Каждый вариант бейджа функционально описывает свой статус
3. **Понятность**: Легко понять, какой токен использовать для какого варианта

## Размышления

Когда я создаю компонентные токены для бейджа, я мыслю так: "Что показывает этот бейдж?" Success бейдж показывает успех, поэтому `status.success`. Error бейдж показывает ошибку, поэтому `status.error`. Info бейдж показывает информацию/действие, поэтому `action.primary`.

Это естественный ход мысли для функционального подхода. Бейдж — это компонент, который функционально показывает статус или категорию, поэтому использование токенов статусов и действий логично.

