# Создание компонентных токенов для таблицы: подход по ролям

## Задача

Я дизайнер и у меня задача создать компонент "таблица". Мне нужно определить все токены, которые будут использоваться для стилизации этого компонента, опираясь на семантический слой, организованный по ролям.

## Выбор семантики

Я выбираю подход по ролям (`semantic_roles`), потому что мне важно понимать **роль** каждого элемента в системе дизайна. Таблица состоит из элементов с разными ролями: поверхность, нейтральные элементы, интерактивные элементы.

## Процесс создания токенов

### Шаг 1: Понимание ролей для таблицы

Сначала я думаю о ролях:
- **Surface** — это поверхности (фон заголовка, фон строк)
- **Neutral** — это нейтральные элементы (текст, границы)
- **Interactive** — это интерактивные элементы (selected строка)
- **Brand** — это брендовые элементы (sorted колонка)

### Шаг 2: Заголовок как поверхность

Заголовок таблицы — это поверхность, которая структурирует данные:
- `semantic_roles.color.surface.secondary` — вторичная поверхность для заголовка
- `semantic_roles.color.neutral.text_primary` — нейтральный текст заголовка
- `semantic_roles.color.brand.primary` — для sorted колонки, это брендовый цвет
- `semantic_roles.color.neutral.border_default` — нейтральная граница

### Шаг 3: Строки как поверхности и интерактивные элементы

Строки таблицы играют разные роли:
- `semantic_roles.color.surface.primary` — основная поверхность для строки
- `semantic_roles.color.surface.secondary` — вторичная поверхность для hover
- `semantic_roles.color.interactive.default` — для selected строки, это интерактивный элемент
- `semantic_roles.color.interactive.hover` — для selected строки при hover
- `semantic_roles.color.neutral.text_primary` — нейтральный текст строки
- `semantic_roles.color.surface.primary` (белый) — для текста на selected строке
- `semantic_roles.color.neutral.border_default` — нейтральная граница

### Шаг 4: Ячейки как нейтральные элементы

Ячейки содержат нейтральные данные:
- `semantic_roles.spacing.role.regular` для горизонтального padding
- `semantic_roles.spacing.role.compact` для вертикального padding
- `semantic_roles.color.neutral.text_primary` — основной нейтральный текст
- `semantic_roles.color.neutral.text_secondary` — вторичный нейтральный текст

### Шаг 5: Typography по ролям

Для типографики я выбираю роли текста:
- Заголовок: `semantic_roles.typography.role.body` — роль основного текста
- Тело: `semantic_roles.typography.role.body` — та же роль

### Шаг 6: Spacing по ролям

- `semantic_roles.spacing.role.compact` для row_gap и cell_gap — компактная роль для плотной таблицы

## Примеры использования

```json
{
  "table.header.background.default": "{semantic_roles.color.surface.secondary}",
  "table.row.background.hover": "{semantic_roles.color.surface.secondary}",
  "table.row.background.selected": "{semantic_roles.color.interactive.default}",
  "table.cell.padding.x": "{semantic_roles.spacing.role.regular}"
}
```

## Преимущества подхода

1. **Системность**: Я думаю о ролях в системе, а не о конкретных значениях
2. **Разделение ответственности**: Surface для фонов, neutral для текста и границ, interactive для выбора
3. **Масштабируемость**: Роли легко расширять для новых компонентов
4. **White Label**: Для другого бренда я просто меняю маппинг ролей

## Размышления

Когда я создаю компонентные токены для таблицы, я мыслю так: "Какую роль играет этот элемент в системе?" Заголовок — это поверхность, поэтому `color.surface.*`. Строка — это тоже поверхность, но selected строка — это интерактивный элемент, поэтому `color.interactive.*`. Текст и границы — нейтральные элементы, поэтому `color.neutral.*`.

Этот подход особенно хорош для White Label решений, потому что роли остаются теми же, меняются только значения. Например, для другого бренда `color.interactive.default` может быть другим цветом, но роль остается той же.

