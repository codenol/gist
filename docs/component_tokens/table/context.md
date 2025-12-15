# Создание компонентных токенов для таблицы: подход по контексту

## Задача

Я дизайнер и у меня задача создать компонент "таблица". Мне нужно определить все токены, которые будут использоваться для стилизации этого компонента, опираясь на семантический слой, организованный по контексту использования.

## Выбор семантики

Я выбираю подход по контексту (`semantic_context`), потому что мне важно понимать, **где и как** используется компонент. Таблица — это сложный компонент, но я могу использовать контекстные токены из `card` для строк и ячеек, и из `button` для selected состояния.

## Процесс создания токенов

### Шаг 1: Использование контекстных токенов

Сначала я смотрю, какие контекстные токены я могу использовать:
- `semantic_context.color.card.*` — для строк и ячеек, потому что строка похожа на карточку
- `semantic_context.color.button.primary.*` — для selected строки, потому что это действие выбора
- `semantic_context.spacing.card.*` — для padding ячеек
- `semantic_context.typography.card.*` — для типографики

### Шаг 2: Заголовок из контекста card

Заголовок таблицы похож на карточку:
- `semantic_context.color.card.background` — фон заголовка
- `semantic_context.color.card.text` — текст заголовка
- `semantic_context.color.button.primary.background` — для sorted колонки, это действие
- `semantic_context.color.card.border` — граница заголовка

### Шаг 3: Строки из контекста card и button

Строки таблицы похожи на карточки:
- `semantic_context.color.card.background` — фон строки
- `semantic_context.color.card.background_hover` — для hover
- `semantic_context.color.button.primary.background` — для selected строки, это действие
- `semantic_context.color.button.primary.background_hover` — для selected строки при hover
- `semantic_context.color.card.text` — текст строки
- `semantic_context.color.button.primary.text` — для текста на selected строке
- `semantic_context.color.card.border` — граница строки

### Шаг 4: Ячейки из контекста card

Ячейки используют spacing и типографику из card:
- `semantic_context.spacing.card.padding` — для padding ячеек
- `semantic_context.color.card.text` — основной текст
- `semantic_context.color.card.text_secondary` — вторичный текст

### Шаг 5: Typography из контекста card

Для типографики:
- Заголовок: `semantic_context.typography.card.title.*` — заголовок карточки
- Тело: `semantic_context.typography.card.body.*` — тело карточки

### Шаг 6: Spacing из контекста card

- `semantic_context.spacing.card.gap` — для row_gap и cell_gap

## Примеры использования

```json
{
  "table.header.background.default": "{semantic_context.color.card.background}",
  "table.row.background.hover": "{semantic_context.color.card.background_hover}",
  "table.row.background.selected": "{semantic_context.color.button.primary.background}",
  "table.cell.padding.x": "{semantic_context.spacing.card.padding}"
}
```

## Преимущества подхода

1. **Простота**: Я использую уже существующие контекстные токены
2. **Переиспользование**: Токены из card и button переиспользуются для таблицы
3. **Консистентность**: Таблица выглядит консистентно с другими компонентами
4. **Быстрота**: Создание компонентных токенов занимает минимум времени

## Размышления

Когда я создаю компонентные токены для таблицы, я мыслю так: "На что похож этот элемент?" Строка таблицы похожа на карточку, поэтому я использую `color.card.*`. Selected строка — это действие выбора, поэтому `color.button.primary.*`.

Этот подход особенно хорош, когда в системе уже есть контекстные токены для похожих компонентов. Мне не нужно создавать новые токены — я переиспользую существующие.

Однако есть нюанс: если в семантическом слое нет подходящих контекстных токенов, мне придется их создать сначала или использовать другой подход. Но для стандартных компонентов, таких как таблица, это работает отлично.

