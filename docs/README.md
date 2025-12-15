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

Есть 5 основных вариантов организации семантических токенов:

1. **По функциональности** — токены организованы по функциональному назначению (background, text, border, action, status)
2. **По ролям** — токены организованы по ролям в системе (brand, neutral, status, interactive, surface)
3. **По иерархии** — токены организованы по уровням важности (level_1, level_2, level_3)
4. **По контексту** — семантический слой не используется, компонентные токены ссылаются напрямую на базовый слой
5. **Простой подход** — максимально упрощенная версия без категорий (primary, secondary, text, border)

⚠️ **Важно:** При контекстном подходе семантический слой не используется, что создает проблемы масштабирования для больших проектов. Подробнее см. [Масштабирование контекстного подхода](context_approach_scaling.md).

## Инструкции для дизайнеров

Для каждого подхода есть подробная инструкция "на пальцах", которая объясняет, как работать с этим подходом:

- **[Инструкции по всем подходам](semantic_approaches/README.md)** — обзор всех подходов и как выбрать подходящий
- **[По функциональности](semantic_approaches/functional.md)** — подробная инструкция
- **[По ролям](semantic_approaches/roles.md)** — подробная инструкция
- **[По иерархии](semantic_approaches/hierarchy.md)** — подробная инструкция
- **[По контексту](semantic_approaches/context.md)** — подробная инструкция
- **[Простой подход](semantic_approaches/simple.md)** — подробная инструкция

Каждая инструкция содержит:
- Описание подхода
- Как выбирать токены (пошагово)
- Примеры использования
- Преимущества и недостатки
- Ссылки на примеры компонентов

## Соответствующие токены

Все компонентные токены, описанные в документации, находятся в репозитории:

- **Базовые токены**: `tokens/base.json`
- **Семантические токены**: 
  - `tokens/semantic_functional.json` — по функциональности
  - `tokens/semantic_roles.json` — по ролям
  - `tokens/semantic_hierarchy.json` — по иерархии
  - `tokens/semantic_context.json` — по контексту (не используется, оставлен для демонстрации)
  - `tokens/semantic_simple.json` — простой подход
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
├── semantic_approaches/ (инструкции для дизайнеров)
│   ├── README.md (обзор всех подходов)
│   ├── functional.md (инструкция по функциональности)
│   ├── roles.md (инструкция по ролям)
│   ├── hierarchy.md (инструкция по иерархии)
│   ├── context.md (инструкция по контексту)
│   └── simple.md (инструкция по простому подходу)
└── component_tokens/ (примеры компонентов)
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
