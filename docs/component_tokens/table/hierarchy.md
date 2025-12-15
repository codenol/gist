# Создание компонентных токенов для таблицы: подход по иерархии

## Задача

Я дизайнер и у меня задача создать компонент "таблица". Мне нужно определить все токены, которые будут использоваться для стилизации этого компонента, опираясь на семантический слой, организованный по уровням иерархии.

## Выбор семантики

Я выбираю подход по иерархии (`semantic_hierarchy`), потому что мне важно понимать **уровень важности** каждого элемента. Таблица имеет четкую иерархию: заголовок — level_2 (важный, но не основной), строки — level_1 (основные данные), selected строка — level_1 (важное действие).

## Процесс создания токенов

### Шаг 1: Понимание уровней для таблицы

Сначала я думаю об уровнях:
- **Level 1** — основной уровень, строки с данными, selected строка
- **Level 2** — средний уровень, заголовок таблицы
- **Level 3** — наименее важный уровень, вторичный текст

### Шаг 2: Заголовок как level_2 элемент

Заголовок таблицы — это важный, но не основной элемент:
- `semantic_hierarchy.color.level_2.background` — фон второго уровня
- `semantic_hierarchy.color.level_2.text` — текст второго уровня
- `semantic_hierarchy.color.level_1.action` — для sorted колонки, это действие первого уровня
- `semantic_hierarchy.color.level_2.border` — граница второго уровня

### Шаг 3: Строки как level_1 элементы

Строки таблицы — это основные элементы с данными:
- `semantic_hierarchy.color.level_1.background` — фон первого уровня (белый)
- `semantic_hierarchy.color.level_2.background` — для hover, это фон второго уровня
- `semantic_hierarchy.color.level_1.action` — для selected строки, это действие первого уровня
- `semantic_hierarchy.color.level_1.action_hover` — для selected строки при hover
- `semantic_hierarchy.color.level_1.text` — текст первого уровня
- `semantic_hierarchy.color.level_1.text` (белый) — для текста на selected строке
- `semantic_hierarchy.color.level_1.border` — граница первого уровня

### Шаг 4: Ячейки по уровням

Ячейки содержат данные разного уровня важности:
- `semantic_hierarchy.spacing.level_2.padding` для горизонтального padding
- `semantic_hierarchy.spacing.level_1.padding` для вертикального padding
- `semantic_hierarchy.color.level_1.text` — основной текст первого уровня
- `semantic_hierarchy.color.level_2.text_secondary` — вторичный текст второго уровня

### Шаг 5: Typography по уровням

Для типографики я выбираю уровни:
- Заголовок: `semantic_hierarchy.typography.level_3` с `font_weight.level_2` — текст третьего уровня, но более жирный
- Тело: `semantic_hierarchy.typography.level_3` — текст третьего уровня

### Шаг 6: Spacing по уровням

- `semantic_hierarchy.spacing.level_1.gap` для row_gap и cell_gap — компактный gap первого уровня

## Примеры использования

```json
{
  "table.header.background.default": "{semantic_hierarchy.color.level_2.background}",
  "table.row.background.hover": "{semantic_hierarchy.color.level_2.background}",
  "table.row.background.selected": "{semantic_hierarchy.color.level_1.action}",
  "table.cell.padding.x": "{semantic_hierarchy.spacing.level_2.padding}"
}
```

## Преимущества подхода

1. **Иерархия**: Четкое понимание важности каждого элемента
2. **Визуальная структура**: Уровни помогают создать визуальную иерархию таблицы
3. **Консистентность**: Все элементы одного уровня выглядят одинаково важными
4. **Масштабируемость**: Легко добавить level_4, level_5 и т.д.

## Размышления

Когда я создаю компонентные токены для таблицы, я мыслю так: "На каком уровне иерархии находится этот элемент?" Заголовок — это level_2, важный, но не основной элемент, поэтому `color.level_2.*`. Строки — это level_1, основные данные, поэтому `color.level_1.*`. Selected строка — это тоже level_1, потому что это важное действие.

Этот подход особенно хорош для сложных таблиц с множеством уровней данных, где нужно четко разделять иерархию: какие данные важнее, какие менее важны.

