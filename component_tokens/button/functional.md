# Создание компонентных токенов для кнопки: подход по функциональности

## Задача

Я дизайнер и у меня задача создать компонент "кнопка". Мне нужно определить все токены, которые будут использоваться для стилизации этого компонента, опираясь на семантический слой, организованный по функциональности.

## Выбор семантики

Я выбираю подход по функциональности (`semantic_functional`), потому что мне нужно думать о том, **что делает** каждый элемент кнопки, а не о его роли или контексте. Кнопка — это интерактивный элемент, который выполняет действия, поэтому мне важны функциональные категории: `action`, `background`, `text`, `border`.

## Процесс создания токенов

### Шаг 1: Анализ структуры кнопки

Сначала я думаю о том, из каких частей состоит кнопка:
- Фон (background) — может быть разным для разных состояний
- Текст (text) — должен быть читаемым на фоне
- Граница (border) — опционально, но часто нужна
- Состояния: default, hover, active, disabled
- Варианты: primary, secondary
- Размеры: small, medium, large

### Шаг 2: Выбор семантических токенов для primary кнопки

Для primary кнопки мне нужны токены действия:
- `semantic_functional.color.action.primary` — это идеально для фона по умолчанию, потому что это именно действие
- `semantic_functional.color.action.primary_hover` — для состояния hover
- `semantic_functional.color.action.primary_active` — для активного состояния

Для текста primary кнопки:
- `semantic_functional.color.text.inverse` — белый текст на цветном фоне, это функционально правильно

Для границы:
- `semantic_functional.color.action.primary` — та же, что и фон, для единообразия

### Шаг 3: Выбор токенов для secondary кнопки

Secondary кнопка менее важна, поэтому я использую:
- `semantic_functional.color.background.secondary` — это фон, а не действие
- `semantic_functional.color.background.tertiary` — для hover, более глубокий фон
- `semantic_functional.color.text.primary` — обычный текст, не инверсный
- `semantic_functional.color.border.default` — стандартная граница

### Шаг 4: Spacing и размеры

Для отступов я думаю функционально:
- `semantic_functional.spacing.padding.medium` для горизонтального padding — это стандартный отступ для интерактивных элементов
- `semantic_functional.spacing.padding.small` для вертикального — кнопка должна быть компактной
- `semantic_functional.spacing.gap.small` для gap между иконкой и текстом

Для размеров я варьирую padding и font_size:
- Small: `padding.small` + `font_size.body_small`
- Medium: `padding.medium` + `font_size.body`
- Large: `padding.large` + `font_size.heading_small`

### Шаг 5: Typography

Для типографики я выбираю функциональные роли:
- `font_size.body` — стандартный размер для текста кнопки
- `font_weight.body_emphasis` — немного жирнее обычного текста, чтобы подчеркнуть важность
- `line_height.body` — стандартная высота строки

### Шаг 6: Border radius и shadow

- `border_radius.medium` — умеренное скругление, функционально подходит для кнопок
- `shadow.small` для default, `shadow.medium` для hover — создает ощущение глубины при взаимодействии

## Примеры использования

```json
{
  "button.primary.background.default": "{semantic_functional.color.action.primary}",
  "button.primary.text.default": "{semantic_functional.color.text.inverse}",
  "button.padding.x": "{semantic_functional.spacing.padding.medium}"
}
```

## Преимущества подхода

1. **Интуитивность**: Я сразу вижу, что `action.primary` — это для действий, `background.secondary` — для фона
2. **Гибкость**: Легко переиспользовать токены для других интерактивных элементов
3. **Понятность**: Любой дизайнер сразу поймет, что `color.action.*` используется для действий

## Размышления

Когда я создаю компонентные токены, я мыслю так: "Что делает этот элемент?" Для кнопки ответ — "выполняет действие", поэтому я иду в `color.action.*`. Это естественный ход мысли для функционального подхода.

