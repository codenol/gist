# Создание компонентных токенов для кнопки: подход по иерархии

## Задача

Я дизайнер и у меня задача создать компонент "кнопка". Мне нужно определить все токены, которые будут использоваться для стилизации этого компонента, опираясь на семантический слой, организованный по уровням иерархии.

## Выбор семантики

Я выбираю подход по иерархии (`semantic_hierarchy`), потому что мне важно понимать **уровень важности** каждого элемента. Кнопка может быть на разных уровнях иерархии: primary кнопка — это level_1 (самый важный), secondary — level_2 (менее важный).

## Процесс создания токенов

### Шаг 1: Понимание уровней иерархии

Сначала я думаю об уровнях:
- **Level 1** — самый важный уровень, главные элементы, primary действия
- **Level 2** — средний уровень, secondary элементы
- **Level 3** — наименее важный уровень, третичные элементы, disabled состояния

### Шаг 2: Primary кнопка как level_1 элемент

Primary кнопка — это главный элемент интерфейса, поэтому:
- `semantic_hierarchy.color.level_1.action` — действие первого уровня
- `semantic_hierarchy.color.level_1.action_hover` и `action_active` — состояния действия первого уровня
- `semantic_hierarchy.color.level_1.text` — текст первого уровня (обычно темный на светлом фоне, но для кнопки может быть инверсный)
- `semantic_hierarchy.color.level_1.border` — граница первого уровня

Для disabled состояния я использую level_3, потому что это наименее важное состояние:
- `semantic_hierarchy.color.level_3.text_secondary` — текст третьего уровня

### Шаг 3: Secondary кнопка как level_2 элемент

Secondary кнопка менее важна, поэтому:
- `semantic_hierarchy.color.level_2.background` — фон второго уровня
- `semantic_hierarchy.color.level_2.text` — текст второго уровня
- `semantic_hierarchy.color.level_2.border` — граница второго уровня

Для hover я перехожу на level_3:
- `semantic_hierarchy.color.level_3.background` — более глубокий фон

### Шаг 4: Spacing по уровням

Для spacing я думаю об иерархии отступов:
- `semantic_hierarchy.spacing.level_2.padding` для горизонтального padding — средний уровень
- `semantic_hierarchy.spacing.level_1.padding` для вертикального — компактный, первый уровень
- `semantic_hierarchy.spacing.level_1.gap` для gap между элементами

Для больших кнопок я использую level_3:
- `semantic_hierarchy.spacing.level_3.padding` — более просторный отступ

### Шаг 5: Typography по уровням

Для типографики я выбираю уровни:
- `semantic_hierarchy.typography.level_3` — основной текст кнопки (level_3, потому что это не заголовок)
- `semantic_hierarchy.typography.level_2` — для больших кнопок, более важный текст
- `semantic_hierarchy.typography.body_small` — для маленьких кнопок

### Шаг 6: Border radius и shadow по уровням

- `semantic_hierarchy.border_radius.level_2` — средний уровень скругления
- `semantic_hierarchy.shadow.level_1` для default — легкая тень
- `semantic_hierarchy.shadow.level_2` для hover — более выраженная тень

## Примеры использования

```json
{
  "button.primary.background.default": "{semantic_hierarchy.color.level_1.action}",
  "button.primary.text.default": "{semantic_hierarchy.color.level_1.text}",
  "button.padding.x": "{semantic_hierarchy.spacing.level_2.padding}"
}
```

## Преимущества подхода

1. **Иерархия**: Четкое понимание важности каждого элемента
2. **Масштабируемость**: Легко добавить level_4, level_5 и т.д.
3. **Визуальная структура**: Уровни помогают создать визуальную иерархию интерфейса
4. **Консистентность**: Все элементы одного уровня выглядят одинаково важными

## Размышления

Когда я создаю компонентные токены, я мыслю так: "На каком уровне иерархии находится этот элемент?" Primary кнопка — это level_1, самый важный элемент, поэтому я иду в `color.level_1.*`. Secondary кнопка — это level_2, менее важная, поэтому `color.level_2.*`.

Этот подход особенно хорош для сложных интерфейсов с множеством уровней важности, где нужно четко разделять иерархию элементов.

