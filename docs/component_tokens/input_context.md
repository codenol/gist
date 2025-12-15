# Создание компонентных токенов для инпута: подход по контексту

## Задача

Я дизайнер и у меня задача создать компонент "инпут" (поле ввода). Мне нужно определить все токены, которые будут использоваться для стилизации этого компонента, опираясь на семантический слой, организованный по контексту использования.

## Выбор семантики

Я выбираю подход по контексту (`semantic_context`), потому что мне важно понимать, **где и как** используется компонент. Инпут — это конкретный компонент, и в семантическом слое уже есть готовые токены для инпутов: `color.input.*`, `spacing.input.*`, `typography.input.*`.

## Процесс создания токенов

### Шаг 1: Использование готовых контекстных токенов

Сначала я смотрю, что уже есть в семантическом слое для инпутов:
- `semantic_context.color.input.background` — уже есть фон!
- `semantic_context.color.input.background_disabled` — уже есть disabled фон!
- `semantic_context.color.input.text` — уже есть текст!
- `semantic_context.color.input.text_placeholder` — уже есть placeholder!
- `semantic_context.color.input.text_disabled` — уже есть disabled текст!
- `semantic_context.color.input.border.*` — уже есть все состояния границы!

Это идеально — мне не нужно думать, какие токены использовать, они уже определены в контексте инпута.

### Шаг 2: Маппинг состояний

Я просто мапплю состояния компонентных токенов на контекстные:
- `input.background.default` → `semantic_context.color.input.background`
- `input.background.disabled` → `semantic_context.color.input.background_disabled`
- `input.text.default` → `semantic_context.color.input.text`
- `input.text.placeholder` → `semantic_context.color.input.text_placeholder`
- `input.border.default` → `semantic_context.color.input.border`
- `input.border.hover` → `semantic_context.color.input.border_hover`
- `input.border.focus` → `semantic_context.color.input.border_focus`
- `input.border.error` → `semantic_context.color.input.border_error`

Это очень просто — я просто копирую структуру из семантического слоя.

### Шаг 3: Spacing из контекста

Для spacing тоже все готово:
- `semantic_context.spacing.input.padding_x` — горизонтальный padding для инпута
- `semantic_context.spacing.input.padding_y` — вертикальный padding для инпута
- `semantic_context.spacing.input.gap` — gap между элементами в инпуте

Мне не нужно думать о ролях или уровнях — все уже определено в контексте инпута.

### Шаг 4: Typography из контекста

Для типографики:
- `semantic_context.typography.input.*` — уже есть font_size, font_weight, line_height для инпута

Все размеры инпутов используют одни и те же токены типографики, потому что они определены в контексте.

### Шаг 5: Border radius

- `semantic_context.border_radius.input` — скругление для инпута

Все уже определено в контексте!

## Примеры использования

```json
{
  "input.background.default": "{semantic_context.color.input.background}",
  "input.text.default": "{semantic_context.color.input.text}",
  "input.border.focus": "{semantic_context.color.input.border_focus}",
  "input.padding.x": "{semantic_context.spacing.input.padding_x}"
}
```

## Преимущества подхода

1. **Простота**: Мне не нужно думать, какие токены использовать — они уже определены в контексте
2. **Специфичность**: Токены максимально специфичны для компонента
3. **Быстрота**: Создание компонентных токенов занимает минимум времени
4. **Понятность**: Любой дизайнер сразу видит, что `color.input.*` — это для инпутов

## Размышления

Когда я создаю компонентные токены для инпута, я мыслю так: "Это инпут, значит мне нужны токены из контекста input." Я просто иду в `semantic_context.color.input.*` и беру оттуда все нужные токены.

Этот подход особенно хорош, когда семантический слой уже содержит контекстные токены для всех основных компонентов. Мне не нужно думать о функциональности, ролях или иерархии — все уже определено в контексте использования.

Особенно удобно для инпутов, потому что у них много состояний (default, hover, focus, error, disabled), и все они уже определены в контексте. Мне не нужно комбинировать токены из разных категорий — все в одном месте.

