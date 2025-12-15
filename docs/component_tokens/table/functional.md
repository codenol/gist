# Создание компонентных токенов для таблицы: подход по функциональности

## Задача

Я дизайнер и у меня задача создать компонент "таблица". Мне нужно определить все токены, которые будут использоваться для стилизации этого компонента, опираясь на семантический слой, организованный по функциональности.

## Выбор семантики

Я выбираю подход по функциональности (`semantic_functional`), потому что мне нужно думать о том, **что делает** каждый элемент таблицы. Таблица состоит из разных функциональных частей: заголовок, строки, ячейки, и каждая часть выполняет свою функцию.

## Процесс создания токенов

### Шаг 1: Анализ структуры таблицы

Сначала я думаю о том, из каких частей состоит таблица:
- Заголовок (header) — показывает названия колонок
- Строки (row) — содержат данные
- Ячейки (cell) — содержат конкретные значения
- Состояния: default, hover, selected

### Шаг 2: Выбор семантических токенов для заголовка

Заголовок таблицы — это важный элемент, который структурирует данные:
- `semantic_functional.color.background.secondary` — для фона заголовка, это вторичный фон, который выделяет заголовок
- `semantic_functional.color.text.primary` — для текста заголовка, это основной текст
- `semantic_functional.color.text.primary` с `semantic_functional.color.action.primary` для sorted колонки — показывает активную сортировку
- `semantic_functional.color.border.default` — для границы заголовка

### Шаг 3: Выбор токенов для строк

Строки таблицы должны быть читаемыми и интерактивными:
- `semantic_functional.color.background.primary` — основной фон строки (белый)
- `semantic_functional.color.background.secondary` — для hover, это вторичный фон
- `semantic_functional.color.action.primary` — для selected строки, это действие выбора
- `semantic_functional.color.action.primary_hover` — для selected строки при hover
- `semantic_functional.color.text.primary` — для текста строки
- `semantic_functional.color.text.inverse` — для текста на selected строке (белый на цветном фоне)
- `semantic_functional.color.border.default` — для границы строки

### Шаг 4: Выбор токенов для ячеек

Ячейки содержат данные:
- `semantic_functional.spacing.padding.medium` для горизонтального padding
- `semantic_functional.spacing.padding.small` для вертикального padding
- `semantic_functional.color.text.primary` — основной текст ячейки
- `semantic_functional.color.text.secondary` — вторичный текст для менее важных данных

### Шаг 5: Typography для таблицы

Для типографики я выбираю функциональные роли:
- Заголовок: `font_size.body`, `font_weight.body_emphasis` — подчеркивает важность
- Тело: `font_size.body`, `font_weight.body` — стандартный текст

### Шаг 6: Spacing

- `semantic_functional.spacing.gap.none` для row_gap — строки должны быть плотными
- `semantic_functional.spacing.gap.small` для cell_gap — небольшой gap между ячейками

## Примеры использования

```json
{
  "table.header.background.default": "{semantic_functional.color.background.secondary}",
  "table.row.background.hover": "{semantic_functional.color.background.secondary}",
  "table.row.background.selected": "{semantic_functional.color.action.primary}",
  "table.cell.padding.x": "{semantic_functional.spacing.padding.medium}"
}
```

## Преимущества подхода

1. **Интуитивность**: Я сразу вижу, что `background.secondary` — для вторичного фона, `action.primary` — для действия выбора
2. **Функциональность**: Каждый токен описывает функцию элемента
3. **Понятность**: Легко понять, какой токен использовать для какого элемента

## Размышления

Когда я создаю компонентные токены для таблицы, я мыслю так: "Что делает этот элемент?" Заголовок структурирует данные — `background.secondary`. Строка содержит данные — `background.primary`. Выбранная строка — это действие — `action.primary`. Это естественный ход мысли для функционального подхода.

Особенно важно для таблицы правильно обработать состояния hover и selected — это ключевые функциональные состояния, которые помогают пользователю ориентироваться в данных.

