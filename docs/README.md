# Документация по компонентным токенам

Эта папка содержит документацию по процессу создания компонентных токенов для различных компонентов дизайн-системы.

## Структура

### `component_tokens/`

Папка содержит подробные описания процесса мышления дизайнера при создании компонентных токенов для каждого компонента и каждого подхода к организации семантических токенов.

## Компоненты

### Кнопка (Button)

Документация по созданию токенов для компонента "кнопка":

- **[button_functional.md](component_tokens/button_functional.md)** — подход по функциональности
- **[button_roles.md](component_tokens/button_roles.md)** — подход по ролям
- **[button_hierarchy.md](component_tokens/button_hierarchy.md)** — подход по иерархии
- **[button_context.md](component_tokens/button_context.md)** — подход по контексту использования

### Инпут (Input)

Документация по созданию токенов для компонента "инпут" (поле ввода):

- **[input_functional.md](component_tokens/input_functional.md)** — подход по функциональности
- **[input_roles.md](component_tokens/input_roles.md)** — подход по ролям
- **[input_hierarchy.md](component_tokens/input_hierarchy.md)** — подход по иерархии
- **[input_context.md](component_tokens/input_context.md)** — подход по контексту использования

### Таблица (Table)

Документация по созданию токенов для компонента "таблица":

- **[table_functional.md](component_tokens/table_functional.md)** — подход по функциональности
- **[table_roles.md](component_tokens/table_roles.md)** — подход по ролям
- **[table_hierarchy.md](component_tokens/table_hierarchy.md)** — подход по иерархии
- **[table_context.md](component_tokens/table_context.md)** — подход по контексту использования

### Бейдж (Badge)

Документация по созданию токенов для компонента "бейдж" (метка):

- **[badge_functional.md](component_tokens/badge_functional.md)** — подход по функциональности
- **[badge_roles.md](component_tokens/badge_roles.md)** — подход по ролям
- **[badge_hierarchy.md](component_tokens/badge_hierarchy.md)** — подход по иерархии
- **[badge_context.md](component_tokens/badge_context.md)** — подход по контексту использования

## Подходы к организации семантических токенов

Каждый документ описывает процесс мышления дизайнера при использовании одного из четырех подходов:

1. **По функциональности** — токены организованы по функциональному назначению (background, text, border, action, status)
2. **По ролям** — токены организованы по ролям в системе (brand, neutral, status, interactive, surface)
3. **По иерархии** — токены организованы по уровням важности (level_1, level_2, level_3)
4. **По контексту** — токены организованы по контексту использования (button, input, card, alert, navigation)

## Структура файлов

```
docs/
├── README.md (этот файл)
└── component_tokens/
    ├── button_functional.md
    ├── button_roles.md
    ├── button_hierarchy.md
    ├── button_context.md
    ├── input_functional.md
    ├── input_roles.md
    ├── input_hierarchy.md
    ├── input_context.md
    ├── table_functional.md
    ├── table_roles.md
    ├── table_hierarchy.md
    ├── table_context.md
    ├── badge_functional.md
    ├── badge_roles.md
    ├── badge_hierarchy.md
    └── badge_context.md
```

## Соответствующие токены

Все компонентные токены, описанные в документации, находятся в репозитории:

- **Базовые токены**: `tokens/base.json`
- **Семантические токены**: 
  - `tokens/semantic_functional.json`
  - `tokens/semantic_roles.json`
  - `tokens/semantic_hierarchy.json`
  - `tokens/semantic_context.json`
- **Компонентные токены**: `tokens/component_tokens/`

## Цель документации

Эта документация создана для демонстрации различных подходов к организации семантических токенов и процесса создания компонентных токенов на их основе. Каждый документ описывает процесс мышления дизайнера от первого лица, показывая, как он выбирает и использует семантические токены для создания компонентных токенов.

