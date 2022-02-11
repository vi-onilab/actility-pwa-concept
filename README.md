# PWA Concept


## Термины
- `Тема` - Шаблон проекта с примером использования PWA
- `Проект` - Любой проект, который использует Шаблон/PWA
- `Модуль` - Пакет из репозитория NPM
- `Пакет` - Пакет из *packages/**


## Команды

- ```yarn start``` - Запуск пакетов в режиме разработки
- ```yarn build``` - Запуск сборки пакетов
- ```yarn clean``` - Очистка модулей, установка снова и очистка сборок пакетов
- ```yarn cli``` - Запуск CLI
- ```yarn workspaces list``` - Вывести список пакетов
- ```yarn workspace <пакет> <команда>``` - Выпонение команды в пакете
    - ```yarn workspace <пакет> add -D <пакет или модуль>``` - Добавление пакета/модуля
    - ```yarn workspace <пакет> run <команда>``` - Выполнение скрипта в пакете


## Пакеты
- `@pwa-concept/build` (packages/build) - пакет сборки темы
- `@pwa-concept/cli` (packages/cli) - CLI для темы
- `@pwa-concept/core` (packages/core)
- `@pwa-concept/editor-config` (packages/editor-config)
- `@pwa-concept/eslint-config` (packages/eslint-config)
- `@pwa-concept/modules` (packages/modules)
- `@pwa-concept/prettier-config` (packages/prettier-config)
- `@pwa-concept/typescript-config` (packages/typescript-config)
- `@pwa-concept/ui` (packages/ui)