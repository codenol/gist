# Создание компонентных токенов для кнопки: подход по ролям

## Задача

Я дизайнер и у меня задача создать компонент "кнопка". Мне нужно определить все токены, которые будут использоваться для стилизации этого компонента, опираясь на семантический слой, организованный по ролям.

## Выбор семантики

Я выбираю подход по ролям (`semantic_roles`), потому что мне важно понимать **роль** каждого элемента в системе дизайна. Кнопка играет роль интерактивного элемента бренда, поэтому мне нужны категории: `brand`, `interactive`, `surface`, `neutral`.

## Процесс создания токенов

### Шаг 1: Понимание ролей в системе

Сначала я думаю о ролях:
- **Brand** — это брендовые цвета, которые идентифицируют продукт
- **Interactive** — это интерактивные элементы, которые реагируют на действия пользователя
- **Surface** — это поверхности, на которых размещаются элементы
- **Neutral** — это нейтральные цвета для текста и границ

### Шаг 2: Primary кнопка как элемент бренда

Primary кнопка — это главный элемент бренда, поэтому:
- `semantic_roles.color.brand.primary` — это брендовый цвет, идеально для primary кнопки
- `semantic_roles.color.brand.primary_hover` и `primary_active` — состояния брендового элемента
- `semantic_roles.color.surface.primary` (белый) — для текста на брендовом фоне
- `semantic_roles.color.interactive.disabled` — для disabled состояния, это роль интерактивного элемента

### Шаг 3: Secondary кнопка как нейтральный элемент

Secondary кнопка менее брендовая, более нейтральная:
- `semantic_roles.color.surface.secondary` — нейтральная поверхность
- `semantic_roles.color.neutral.text_primary` — нейтральный текст
- `semantic_roles.color.neutral.border_default` — нейтральная граница

### Шаг 4: Spacing по ролям

Для spacing я думаю о ролях размеров:
- `semantic_roles.spacing.role.regular` — стандартная роль для padding
- `semantic_roles.spacing.role.compact` — компактная роль для вертикальных отступов
- `semantic_roles.spacing.role.spacious` — просторная роль для больших кнопок

Это не просто размеры, а роли в системе: compact, regular, spacious.

### Шаг 5: Typography по ролям

Для типографики я выбираю роли текста:
- `semantic_roles.typography.role.body` — роль основного текста
- `semantic_roles.typography.role.body_small` — роль маленького текста
- `semantic_roles.typography.role.heading` — роль заголовка для больших кнопок

Каждая роль имеет font_size, font_weight и line_height — это целостная система ролей.

### Шаг 6: Border radius и shadow по ролям

- `semantic_roles.border_radius.role.rounded` — роль "скругленный", подходит для кнопок
- `semantic_roles.shadow.role.subtle` и `elevated` — роли теней: subtle для default, elevated для hover

## Примеры использования

```json
{
  "button.primary.background.default": "{semantic_roles.color.brand.primary}",
  "button.primary.text.default": "{semantic_roles.color.surface.primary}",
  "button.padding.x": "{semantic_roles.spacing.role.regular}"
}
```

## Преимущества подхода

1. **Системность**: Я думаю о ролях в системе, а не о конкретных значениях
2. **Брендинг**: Четкое разделение на брендовые и нейтральные элементы
3. **Масштабируемость**: Роли легко расширять для новых компонентов
4. **White Label**: Для другого бренда я просто меняю маппинг ролей, не трогая компонентные токены

## Размышления

Когда я создаю компонентные токены, я мыслю так: "Какую роль играет этот элемент в системе?" Primary кнопка — это брендовый интерактивный элемент, поэтому я иду в `color.brand.*` и `color.interactive.*`. Secondary кнопка — это нейтральный элемент, поэтому `color.neutral.*` и `color.surface.*`.

Этот подход особенно хорош для White Label решений, потому что роли остаются теми же, меняются только значения.

