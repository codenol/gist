# Создание компонентных токенов для бейджа: подход по ролям

## Задача

Я дизайнер и у меня задача создать компонент "бейдж" (метка). Мне нужно определить все токены, которые будут использоваться для стилизации этого компонента, опираясь на семантический слой, организованный по ролям.

## Выбор семантики

Я выбираю подход по ролям (`semantic_roles`), потому что мне важно понимать **роль** каждого варианта бейджа в системе дизайна. Бейдж играет разные роли: показывает статус, показывает брендовую информацию, показывает нейтральную категорию.

## Процесс создания токенов

### Шаг 1: Понимание ролей для бейджа

Сначала я думаю о ролях:
- **Status** — это статусы (success, error, warning)
- **Brand** — это брендовая информация (info)
- **Surface** — это поверхности (фон)
- **Neutral** — это нейтральные элементы (neutral бейдж)

### Шаг 2: Варианты статуса как роли статуса

Бейджи статусов играют роль статуса в системе:
- **Success**: `semantic_roles.color.status.success_background` для фона, `semantic_roles.color.status.success` для текста и границы
- **Error**: `semantic_roles.color.status.error_background` для фона, `semantic_roles.color.status.error` для текста и границы
- **Warning**: `semantic_roles.color.status.warning_background` для фона, `semantic_roles.color.status.warning` для текста и границы

Это роли статуса в системе, поэтому я использую `color.status.*`.

### Шаг 3: Info бейдж как брендовый элемент

Info бейдж показывает брендовую информацию:
- `semantic_roles.color.brand.primary` — брендовый цвет для фона
- `semantic_roles.color.surface.primary` (белый) — для текста на брендовом фоне
- `semantic_roles.color.brand.primary` — для границы

Это роль бренда в системе, поэтому `color.brand.*`.

### Шаг 4: Neutral бейдж как нейтральный элемент

Neutral бейдж — это нейтральный элемент:
- `semantic_roles.color.surface.secondary` — нейтральная поверхность для фона
- `semantic_roles.color.neutral.text_primary` — нейтральный текст
- `semantic_roles.color.neutral.border_default` — нейтральная граница

Это роль нейтрального элемента, поэтому `color.neutral.*` и `color.surface.*`.

### Шаг 5: Spacing по ролям

Для spacing я думаю о ролях размеров:
- `semantic_roles.spacing.role.compact` — компактная роль для padding бейджа

### Шаг 6: Typography по ролям

Для типографики я выбираю роли текста:
- `semantic_roles.typography.role.body_small` — роль маленького текста
- `semantic_roles.typography.role.body` — роль основного текста для больших бейджей
- `semantic_roles.typography.role.caption` — роль подписи для маленьких бейджей

### Шаг 7: Border radius по ролям

- `semantic_roles.border_radius.role.pill` — роль "pill" (полное скругление), подходит для бейджа

## Примеры использования

```json
{
  "badge.variant.success.background": "{semantic_roles.color.status.success_background}",
  "badge.variant.success.text": "{semantic_roles.color.status.success}",
  "badge.variant.info.background": "{semantic_roles.color.brand.primary}",
  "badge.padding.x": "{semantic_roles.spacing.role.compact}"
}
```

## Преимущества подхода

1. **Системность**: Я думаю о ролях в системе, а не о конкретных значениях
2. **Разделение ответственности**: Status для статусов, brand для бренда, neutral для нейтральных элементов
3. **Масштабируемость**: Роли легко расширять для новых вариантов
4. **White Label**: Для другого бренда я просто меняю маппинг ролей

## Размышления

Когда я создаю компонентные токены для бейджа, я мыслю так: "Какую роль играет этот вариант в системе?" Success бейдж — это роль статуса, поэтому `color.status.*`. Info бейдж — это роль бренда, поэтому `color.brand.*`. Neutral бейдж — это роль нейтрального элемента, поэтому `color.neutral.*`.

Этот подход особенно хорош для White Label решений, потому что роли остаются теми же, меняются только значения. Например, для другого бренда `color.brand.primary` может быть другим цветом, но роль остается той же.

