# Создание компонентных токенов для инпута: подход по функциональности

## Задача

Я дизайнер и у меня задача создать компонент "инпут" (поле ввода). Мне нужно определить все токены, которые будут использоваться для стилизации этого компонента, опираясь на семантический слой, организованный по функциональности.

## Выбор семантики

Я выбираю подход по функциональности (`semantic_functional`), потому что мне нужно думать о том, **что делает** каждый элемент инпута. Инпут — это поле для ввода данных, поэтому мне важны функциональные категории: `background`, `text`, `border`, `status`.

## Процесс создания токенов

### Шаг 1: Анализ структуры инпута

Сначала я думаю о том, из каких частей состоит инпут:
- Фон (background) — должен быть чистым и читаемым
- Текст (text) — введенный пользователем текст
- Placeholder — подсказка для пользователя
- Граница (border) — визуальное разделение
- Состояния: default, hover, focus, error, disabled

### Шаг 2: Выбор семантических токенов для фона

Для фона инпута мне нужны функциональные токены:
- `semantic_functional.color.background.primary` — белый фон, это основной фон для ввода данных
- Для error состояния: `semantic_functional.color.status.error_background` — фон ошибки, функционально правильно
- Для disabled: `semantic_functional.color.background.secondary` — серый фон, показывает неактивность

### Шаг 3: Выбор токенов для текста

Для текста я думаю функционально:
- `semantic_functional.color.text.primary` — основной текст, который вводит пользователь
- `semantic_functional.color.text.tertiary` — для placeholder, это менее важный текст
- `semantic_functional.color.text.disabled` — для disabled состояния

### Шаг 4: Выбор токенов для границы

Граница инпута должна показывать состояние:
- `semantic_functional.color.border.default` — стандартная граница
- `semantic_functional.color.border.hover` — граница при наведении
- `semantic_functional.color.border.focus` — граница в фокусе, это важное функциональное состояние
- `semantic_functional.color.border.error` — граница ошибки, функционально показывает проблему
- `semantic_functional.color.border.disabled` — граница для disabled

### Шаг 5: Spacing для инпута

Для отступов я думаю функционально:
- `semantic_functional.spacing.padding.medium` для горизонтального padding — стандартный отступ для полей ввода
- `semantic_functional.spacing.padding.small` для вертикального — компактный отступ

### Шаг 6: Typography

Для типографики:
- `semantic_functional.typography.font_size.body` — стандартный размер для текста ввода
- `semantic_functional.typography.font_weight.body` — обычный вес, не жирный
- `semantic_functional.typography.line_height.body` — стандартная высота строки

### Шаг 7: Border radius

- `semantic_functional.border_radius.medium` — умеренное скругление, функционально подходит для полей ввода

## Примеры использования

```json
{
  "input.background.default": "{semantic_functional.color.background.primary}",
  "input.text.default": "{semantic_functional.color.text.primary}",
  "input.border.focus": "{semantic_functional.color.border.focus}",
  "input.padding.x": "{semantic_functional.spacing.padding.medium}"
}
```

## Преимущества подхода

1. **Интуитивность**: Я сразу вижу, что `border.focus` — это для фокуса, `status.error` — для ошибки
2. **Функциональность**: Каждый токен описывает функцию элемента
3. **Понятность**: Легко понять, какой токен использовать для какого состояния

## Размышления

Когда я создаю компонентные токены для инпута, я мыслю так: "Что делает этот элемент?" Инпут вводит данные, поэтому фон — это `background.primary`, текст — `text.primary`, фокус — `border.focus`. Это естественный ход мысли для функционального подхода.

Особенно важно для инпута правильно обработать состояния focus и error — это ключевые функциональные состояния, которые должны быть четко видны пользователю.

