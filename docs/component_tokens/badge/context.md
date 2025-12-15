# Создание компонентных токенов для бейджа: подход по контексту

## Задача

Я дизайнер и у меня задача создать компонент "бейдж" (метка). Мне нужно определить все токены, которые будут использоваться для стилизации этого компонента, опираясь на семантический слой, организованный по контексту использования.

## Выбор семантики

Я выбираю подход по контексту (`semantic_context`), потому что мне важно понимать, **где и как** используется компонент. Бейдж часто используется для показа статусов, похожих на alert, поэтому я могу использовать контекстные токены из `alert` для вариантов статуса.

## Процесс создания токенов

### Шаг 1: Использование контекстных токенов из alert

Сначала я смотрю, какие контекстные токены я могу использовать:
- `semantic_context.color.alert.success.*` — для success бейджа
- `semantic_context.color.alert.error.*` — для error бейджа
- `semantic_context.color.alert.warning.*` — для warning бейджа
- `semantic_context.spacing.alert.*` — для spacing
- `semantic_context.typography.alert.*` — для типографики
- `semantic_context.border_radius.alert` — для border radius

Бейдж и alert функционально похожи — оба показывают статус, поэтому я могу переиспользовать токены.

### Шаг 2: Варианты статуса из контекста alert

Бейджи статусов похожи на alert:
- **Success**: `semantic_context.color.alert.success.background` для фона, `semantic_context.color.alert.success.text` для текста, `semantic_context.color.alert.success.border` для границы
- **Error**: `semantic_context.color.alert.error.background` для фона, `semantic_context.color.alert.error.text` для текста, `semantic_context.color.alert.error.border` для границы
- **Warning**: `semantic_context.color.alert.warning.background` для фона, `semantic_context.color.alert.warning.text` для текста, `semantic_context.color.alert.warning.border` для границы

Это идеально — бейдж и alert показывают статус, поэтому я переиспользую токены.

### Шаг 3: Info бейдж из контекста button

Info бейдж похож на кнопку (показывает действие/информацию):
- `semantic_context.color.button.primary.background` — фон primary кнопки
- `semantic_context.color.button.primary.text` — текст primary кнопки
- `semantic_context.color.button.primary.border` — граница primary кнопки

### Шаг 4: Neutral бейдж из контекста card

Neutral бейдж похож на карточку (нейтральный элемент):
- `semantic_context.color.card.background` — фон карточки
- `semantic_context.color.card.text` — текст карточки
- `semantic_context.color.card.border` — граница карточки

### Шаг 5: Spacing из контекста alert

Для spacing:
- `semantic_context.spacing.alert.padding` — padding для бейджа

### Шаг 6: Typography из контекста alert

Для типографики:
- `semantic_context.typography.alert.*` — font_size, font_weight, line_height для бейджа

### Шаг 7: Border radius из контекста alert

- `semantic_context.border_radius.alert` — скругление для бейджа

## Примеры использования

```json
{
  "badge.variant.success.background": "{semantic_context.color.alert.success.background}",
  "badge.variant.success.text": "{semantic_context.color.alert.success.text}",
  "badge.variant.info.background": "{semantic_context.color.button.primary.background}",
  "badge.padding.x": "{semantic_context.spacing.alert.padding}"
}
```

## Преимущества подхода

1. **Простота**: Я переиспользую уже существующие контекстные токены
2. **Консистентность**: Бейдж выглядит консистентно с alert, button и card
3. **Быстрота**: Создание компонентных токенов занимает минимум времени
4. **Переиспользование**: Токены из других компонентов переиспользуются для бейджа

## Размышления

Когда я создаю компонентные токены для бейджа, я мыслю так: "На что похож этот вариант бейджа?" Success бейдж похож на success alert, поэтому я использую `color.alert.success.*`. Info бейдж похож на primary кнопку, поэтому `color.button.primary.*`. Neutral бейдж похож на карточку, поэтому `color.card.*`.

Этот подход особенно хорош, когда в системе уже есть контекстные токены для похожих компонентов. Мне не нужно создавать новые токены — я переиспользую существующие.

Однако есть нюанс: если в семантическом слое нет подходящих контекстных токенов, мне придется их создать сначала или использовать другой подход. Но для стандартных компонентов, таких как бейдж, это работает отлично, особенно когда бейдж функционально похож на alert.

