# Инструкции по загрузке в GitHub

Папка `token-migration` готова к загрузке в репозиторий `git@github.com:codenol/gist.git`.

## Способ 1: Если репозиторий уже клонирован

```bash
# Перейдите в клонированный репозиторий
cd path/to/gist

# Создайте папку docs, если её нет
mkdir -p docs

# Скопируйте папку token-migration
cp -r path/to/token-migration docs/

# Добавьте изменения
git add docs/token-migration

# Закоммитьте
git commit -m "Add token migration guide"

# Загрузите в GitHub
git push origin main
```

## Способ 2: Если нужно клонировать репозиторий

```bash
# Клонируйте репозиторий
git clone git@github.com:codenol/gist.git
# или через HTTPS:
# git clone https://github.com/codenol/gist.git

cd gist

# Создайте папку docs, если её нет
mkdir -p docs

# Скопируйте папку token-migration из текущей директории
# (папка temp-repo/docs/token-migration уже содержит все файлы)
cp -r ../temp-repo/docs/token-migration docs/

# Добавьте изменения
git add docs/token-migration

# Закоммитьте
git commit -m "Add token migration guide"

# Загрузите в GitHub
git push origin main
```

## Способ 3: Использование готовой папки temp-repo

Если у вас есть доступ к репозиторию, вы можете:

```bash
cd temp-repo

# Добавьте remote (если его нет)
git remote add origin git@github.com:codenol/gist.git
# или через HTTPS:
# git remote add origin https://github.com/codenol/gist.git

# Добавьте все файлы
git add .

# Закоммитьте
git commit -m "Add token migration guide"

# Загрузите в GitHub
git push -u origin main
```

## Проверка

После загрузки проверьте, что файлы доступны по адресу:
`https://github.com/codenol/gist/tree/main/docs/token-migration`

## Содержимое папки token-migration

- README.md - главная страница с навигацией
- 00-preparation.md - подготовка
- 01-fix-collections.md - исправление коллекций
- 02-create-button-tokens.md - создание токенов Button
- 03-create-badge-status-tokens.md - создание токенов Badge и Status
- 04-create-other-tokens.md - создание токенов остальных компонентов
- 05-migrate-button.md - миграция Button
- 06-migrate-badge-status.md - миграция Badge и Status
- 07-migrate-other-components.md - миграция остальных компонентов
- 08-final-check.md - финальная проверка
- REFERENCE-token-structure.md - справочник по структуре
- REFERENCE-token-mapping.md - справочник по маппингу
- token-inventory.md - инвентарь токенов
- migration-mapping.json - маппинг токенов (JSON)
- MIGRATION_CHECKLIST.md - чеклист миграции
- migration-progress.md - отслеживание прогресса
- IMPLEMENTATION_SUMMARY.md - итоговый отчет

