# Варианты токенизации

## Для кого это и зачем

Дизайнерам, которые хотят понять, какой из подходов к иенованию токенов использовать.

## Цель документации

Эта документация создана для демонстрации различных подходов к организации семантических токенов и процесса создания компонентных токенов на их основе. 
Каждый документ описывает процесс мышления дизайнера от первого лица, показывая, как он выбирает и использует семантические токены для создания компонентных токенов.

Вся документация для примера использует 4 компонента:
- кнопка
- инпут
- таблица
- бейдж

## Подходы к организации семантических токенов

Есть 4 основных варианта (Material, Carbon, HIG, Figma).
Т.е. по функциональности, по ролям, по иерархии, по контексту.

Каждый документ описывает процесс мышления дизайнера при использовании одного из четырех подходов:

1. **По функциональности** — токены организованы по функциональному назначению (background, text, border, action, status)
2. **По ролям** — токены организованы по ролям в системе (brand, neutral, status, interactive, surface)
3. **По иерархии** — токены организованы по уровням важности (level_1, level_2, level_3)
4. **По контексту** — токены организованы по контексту использования (button, input, card, alert, navigation)

⚠️ **Важно:** При контекстном подходе семантический слой не используется, что создает проблемы масштабирования для больших проектов. Подробнее см. [Масштабирование контекстного подхода](context_approach_scaling.md).

## Соответствующие токены

Все компонентные токены, описанные в документации, находятся в репозитории:

- **Базовые токены**: `tokens/base.json`
- **Семантические токены**: 
  - `tokens/semantic_functional.json`
  - `tokens/semantic_roles.json`
  - `tokens/semantic_hierarchy.json`
  - `tokens/semantic_context.json`
- **Компонентные токены**: `tokens/component_tokens/`

## Компоненты и документация

Документация организована по компонентам. Для каждого компонента есть:
- **Объединенный документ** (`README.md`) — описывает все 4 подхода, общие и различные части
- **Отдельные документы** — детальное описание каждого подхода

### Кнопка (Button)

- **[README.md](component_tokens/button/README.md)** — объединенный документ со сравнением всех подходов
- **[functional.md](component_tokens/button/functional.md)** — подход по функциональности
- **[roles.md](component_tokens/button/roles.md)** — подход по ролям
- **[hierarchy.md](component_tokens/button/hierarchy.md)** — подход по иерархии
- **[context.md](component_tokens/button/context.md)** — подход по контексту использования

### Инпут (Input)

- **[README.md](component_tokens/input/README.md)** — объединенный документ со сравнением всех подходов
- **[functional.md](component_tokens/input/functional.md)** — подход по функциональности
- **[roles.md](component_tokens/input/roles.md)** — подход по ролям
- **[hierarchy.md](component_tokens/input/hierarchy.md)** — подход по иерархии
- **[context.md](component_tokens/input/context.md)** — подход по контексту использования

### Таблица (Table)

- **[README.md](component_tokens/table/README.md)** — объединенный документ со сравнением всех подходов
- **[functional.md](component_tokens/table/functional.md)** — подход по функциональности
- **[roles.md](component_tokens/table/roles.md)** — подход по ролям
- **[hierarchy.md](component_tokens/table/hierarchy.md)** — подход по иерархии
- **[context.md](component_tokens/table/context.md)** — подход по контексту использования

### Бейдж (Badge)

- **[README.md](component_tokens/badge/README.md)** — объединенный документ со сравнением всех подходов
- **[functional.md](component_tokens/badge/functional.md)** — подход по функциональности
- **[roles.md](component_tokens/badge/roles.md)** — подход по ролям
- **[hierarchy.md](component_tokens/badge/hierarchy.md)** — подход по иерархии
- **[context.md](component_tokens/badge/context.md)** — подход по контексту использования

## Дополнительная документация

- **[Масштабирование контекстного подхода](context_approach_scaling.md)** — проблемы масштабирования контекстного подхода при большом количестве компонентов
- **[Стоимость создания семантического слоя и баланс выгод](semantic_layer_cost_benefit.md)** — реальный расчет времени на создание семантического слоя, обвязку компонентов и сравнение с контекстным подходом

## Структура файлов

```
docs/
├── README.md (этот файл)
├── context_approach_scaling.md (проблемы масштабирования)
├── semantic_layer_cost_benefit.md (стоимость создания и баланс выгод)
└── component_tokens/
    ├── button/
    │   ├── README.md (объединенный документ)
    │   ├── functional.md
    │   ├── roles.md
    │   ├── hierarchy.md
    │   └── context.md
    ├── input/
    │   ├── README.md
    │   ├── functional.md
    │   ├── roles.md
    │   ├── hierarchy.md
    │   └── context.md
    ├── table/
    │   ├── README.md
    │   ├── functional.md
    │   ├── roles.md
    │   ├── hierarchy.md
    │   └── context.md
    └── badge/
        ├── README.md
        ├── functional.md
        ├── roles.md
        ├── hierarchy.md
        └── context.md
```
