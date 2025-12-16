# Создание компонентных токенов для инпута: подход по иерархии

## Задача

Я дизайнер и у меня задача создать компонент "инпут" (поле ввода). Мне нужно определить все токены, которые будут использоваться для стилизации этого компонента, опираясь на семантический слой, организованный по уровням иерархии.

## Выбор семантики

Я выбираю подход по иерархии (`semantic_hierarchy`), потому что мне важно понимать **уровень важности** каждого элемента. Инпут — это основной элемент формы, поэтому он на level_1 (самый важный уровень).

## Процесс создания токенов

### Шаг 1: Понимание уровней для инпута

Сначала я думаю об уровнях:
- **Level 1** — основной уровень, активный инпут, ввод данных
- **Level 2** — менее важный уровень, может использоваться для disabled
- **Level 3** — наименее важный уровень, placeholder, disabled состояния

### Шаг 2: Фон инпута по уровням

Активный инпут — это level_1:
- `semantic_hierarchy.color.level_1.background` — фон первого уровня (белый)
- `semantic_hierarchy.color.level_2.background` — для disabled, это менее важный уровень

Для error состояния я использую специальный токен:
- `semantic_hierarchy.color.status.error_background` — фон ошибки (не привязан к уровням)

### Шаг 3: Текст по уровням

Текст в инпуте имеет разные уровни важности:
- `semantic_hierarchy.color.level_1.text` — основной текст первого уровня
- `semantic_hierarchy.color.level_3.text_secondary` — для placeholder, это третичный уровень
- `semantic_hierarchy.color.level_3.text_secondary` — для disabled, тоже третичный уровень

### Шаг 4: Граница по уровням

Граница инпута показывает уровень важности:
- `semantic_hierarchy.color.level_1.border` — стандартная граница первого уровня
- `semantic_hierarchy.color.level_2.border` — для hover, более выраженная граница
- `semantic_hierarchy.color.level_1.action` — для focus, это действие первого уровня (важное!)
- `semantic_hierarchy.color.status.error` — для error, это статус (не привязан к уровням)
- `semantic_hierarchy.color.level_3.border` — для disabled, наименее важный уровень

### Шаг 5: Spacing по уровням

Для spacing я думаю об иерархии отступов:
- `semantic_hierarchy.spacing.level_2.padding` для горизонтального padding — средний уровень
- `semantic_hierarchy.spacing.level_1.padding` для вертикального — компактный, первый уровень

### Шаг 6: Typography по уровням

Для типографики я выбираю уровни:
- `semantic_hierarchy.typography.level_3` — основной текст инпута (level_3, потому что это не заголовок)
- `semantic_hierarchy.typography.body_small` — для маленьких инпутов

### Шаг 7: Border radius по уровням

- `semantic_hierarchy.border_radius.level_2` — средний уровень скругления

## Примеры использования

```json
{
  "input.background.default": "{semantic_hierarchy.color.level_1.background}",
  "input.text.default": "{semantic_hierarchy.color.level_1.text}",
  "input.border.focus": "{semantic_hierarchy.color.level_1.action}",
  "input.padding.x": "{semantic_hierarchy.spacing.level_2.padding}"
}
```

## Преимущества подхода

1. **Иерархия**: Четкое понимание важности каждого элемента
2. **Визуальная структура**: Уровни помогают создать визуальную иерархию формы
3. **Консистентность**: Все элементы одного уровня выглядят одинаково важными
4. **Масштабируемость**: Легко добавить level_4, level_5 и т.д.

## Размышления

Когда я создаю компонентные токены для инпута, я мыслю так: "На каком уровне иерархии находится этот элемент?" Активный инпут — это level_1, самый важный элемент формы, поэтому фон — `color.level_1.background`, текст — `color.level_1.text`, фокус — `color.level_1.action`.

Placeholder и disabled — это level_3, наименее важные элементы, поэтому они используют `color.level_3.*`.

Этот подход особенно хорош для сложных форм с множеством полей, где нужно четко разделять иерархию: какие поля важнее, какие менее важны.

