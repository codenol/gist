# Создание компонентных токенов для инпута: подход по ролям

## Задача

Я дизайнер и у меня задача создать компонент "инпут" (поле ввода). Мне нужно определить все токены, которые будут использоваться для стилизации этого компонента, опираясь на семантический слой, организованный по ролям.

## Выбор семантики

Я выбираю подход по ролям (`semantic_roles`), потому что мне важно понимать **роль** каждого элемента в системе дизайна. Инпут — это поверхность для ввода данных, поэтому мне нужны категории: `surface`, `neutral`, `interactive`, `status`.

## Процесс создания токенов

### Шаг 1: Понимание ролей для инпута

Сначала я думаю о ролях:
- **Surface** — это поверхность, на которой размещается инпут
- **Neutral** — это нейтральные цвета для текста и границ
- **Interactive** — это интерактивные состояния (focus)
- **Status** — это статусы (error, success)

### Шаг 2: Фон инпута как поверхность

Инпут — это поверхность для ввода, поэтому:
- `semantic_roles.color.surface.primary` — основная поверхность (белая)
- `semantic_roles.color.surface.secondary` — для disabled, это менее активная поверхность

Для error состояния я использую:
- `semantic_roles.color.status.error_background` — фон ошибки, это роль статуса

### Шаг 3: Текст как нейтральный элемент

Текст в инпуте — это нейтральный элемент:
- `semantic_roles.color.neutral.text_primary` — основной нейтральный текст
- `semantic_roles.color.neutral.text_tertiary` — для placeholder, это менее важный нейтральный текст
- `semantic_roles.color.neutral.text_disabled` — для disabled, это неактивный нейтральный текст

### Шаг 4: Граница как нейтральный и интерактивный элемент

Граница инпута играет разные роли:
- `semantic_roles.color.neutral.border_default` — стандартная нейтральная граница
- `semantic_roles.color.neutral.border_hover` — нейтральная граница при наведении
- `semantic_roles.color.interactive.focus` — граница в фокусе, это роль интерактивного элемента
- `semantic_roles.color.status.error` — граница ошибки, это роль статуса
- `semantic_roles.color.neutral.border_disabled` — неактивная нейтральная граница

### Шаг 5: Spacing по ролям

Для spacing я думаю о ролях размеров:
- `semantic_roles.spacing.role.regular` — стандартная роль для padding
- `semantic_roles.spacing.role.compact` — компактная роль для вертикальных отступов

### Шаг 6: Typography по ролям

Для типографики я выбираю роли текста:
- `semantic_roles.typography.role.body` — роль основного текста
- `semantic_roles.typography.role.body_small` — роль маленького текста

### Шаг 7: Border radius по ролям

- `semantic_roles.border_radius.role.rounded` — роль "скругленный", подходит для инпутов

## Примеры использования

```json
{
  "input.background.default": "{semantic_roles.color.surface.primary}",
  "input.text.default": "{semantic_roles.color.neutral.text_primary}",
  "input.border.focus": "{semantic_roles.color.interactive.focus}",
  "input.padding.x": "{semantic_roles.spacing.role.regular}"
}
```

## Преимущества подхода

1. **Системность**: Я думаю о ролях в системе, а не о конкретных значениях
2. **Разделение ответственности**: Surface для фона, neutral для текста и границ, interactive для фокуса
3. **Масштабируемость**: Роли легко расширять для новых компонентов
4. **White Label**: Для другого бренда я просто меняю маппинг ролей

## Размышления

Когда я создаю компонентные токены для инпута, я мыслю так: "Какую роль играет этот элемент в системе?" Инпут — это поверхность для ввода, поэтому фон — `color.surface.*`. Текст и границы — нейтральные элементы, поэтому `color.neutral.*`. Фокус — интерактивное состояние, поэтому `color.interactive.*`.

Этот подход особенно хорош для White Label решений, потому что роли остаются теми же, меняются только значения. Например, для другого бренда `color.interactive.focus` может быть другим цветом, но роль остается той же.

