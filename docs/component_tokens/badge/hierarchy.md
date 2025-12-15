# Создание компонентных токенов для бейджа: подход по иерархии

## Задача

Я дизайнер и у меня задача создать компонент "бейдж" (метка). Мне нужно определить все токены, которые будут использоваться для стилизации этого компонента, опираясь на семантический слой, организованный по уровням иерархии.

## Выбор семантики

Я выбираю подход по иерархии (`semantic_hierarchy`), потому что мне важно понимать **уровень важности** каждого варианта бейджа. Бейджи могут быть на разных уровнях: info бейдж — это level_1 (важная информация), neutral бейдж — это level_2 (менее важная информация).

## Процесс создания токенов

### Шаг 1: Понимание уровней для бейджа

Сначала я думаю об уровнях:
- **Level 1** — важные бейджи (info, может быть success/error/warning)
- **Level 2** — менее важные бейджи (neutral)
- **Status** — статусы не привязаны к уровням, они отдельно

### Шаг 2: Варианты статуса как отдельные статусы

Бейджи статусов не привязаны к уровням, они используют специальные токены статуса:
- **Success**: `semantic_hierarchy.color.status.success_background` для фона, `semantic_hierarchy.color.status.success` для текста
- **Error**: `semantic_hierarchy.color.status.error_background` для фона, `semantic_hierarchy.color.status.error` для текста
- **Warning**: `semantic_hierarchy.color.status.warning_background` для фона, `semantic_hierarchy.color.status.warning` для текста

Статусы важны независимо от уровня, поэтому они не привязаны к level_1, level_2 и т.д.

### Шаг 3: Info бейдж как level_1 элемент

Info бейдж показывает важную информацию:
- `semantic_hierarchy.color.level_1.action` — действие первого уровня для фона
- `semantic_hierarchy.color.level_1.text` — текст первого уровня (белый на цветном фоне)
- `semantic_hierarchy.color.level_1.action` — для границы

Это важный элемент, поэтому level_1.

### Шаг 4: Neutral бейдж как level_2 элемент

Neutral бейдж менее важен:
- `semantic_hierarchy.color.level_2.background` — фон второго уровня
- `semantic_hierarchy.color.level_2.text` — текст второго уровня
- `semantic_hierarchy.color.level_2.border` — граница второго уровня

Это менее важный элемент, поэтому level_2.

### Шаг 5: Spacing по уровням

Для spacing я думаю об иерархии отступов:
- `semantic_hierarchy.spacing.level_1.padding` для маленьких и средних бейджей — компактный отступ
- `semantic_hierarchy.spacing.level_2.padding` для больших бейджей — более просторный отступ

### Шаг 6: Typography по уровням

Для типографики я выбираю уровни:
- `semantic_hierarchy.typography.body_small` — основной текст бейджа
- `semantic_hierarchy.typography.level_3` — для больших бейджей, более важный текст

### Шаг 7: Border radius по уровням

- `semantic_hierarchy.border_radius.level_3` — большое скругление (почти full), подходит для бейджа

## Примеры использования

```json
{
  "badge.variant.success.background": "{semantic_hierarchy.color.status.success_background}",
  "badge.variant.success.text": "{semantic_hierarchy.color.status.success}",
  "badge.variant.info.background": "{semantic_hierarchy.color.level_1.action}",
  "badge.padding.x": "{semantic_hierarchy.spacing.level_1.padding}"
}
```

## Преимущества подхода

1. **Иерархия**: Четкое понимание важности каждого варианта
2. **Визуальная структура**: Уровни помогают создать визуальную иерархию бейджей
3. **Консистентность**: Все бейджи одного уровня выглядят одинаково важными
4. **Масштабируемость**: Легко добавить level_4, level_5 и т.д.

## Размышления

Когда я создаю компонентные токены для бейджа, я мыслю так: "На каком уровне иерархии находится этот вариант?" Info бейдж — это level_1, важная информация, поэтому `color.level_1.*`. Neutral бейдж — это level_2, менее важная информация, поэтому `color.level_2.*`.

Статусы (success, error, warning) не привязаны к уровням, потому что они важны независимо от контекста. Они используют специальные токены `color.status.*`.

Этот подход особенно хорош для интерфейсов, где нужно четко разделять важность информации: какие бейджи важнее, какие менее важны.

