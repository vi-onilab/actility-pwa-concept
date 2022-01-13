# PWA Concept


## Термины
- `Модуль` - пакет из репозитория NPM
- `Пакет` - пакет из *packages/**


## Команды
- ```yarn clean``` - Очистка модулей, устоновка снова и очистка сборок пакетов
- ```yarn workspaces list``` - Вывести список пакетов
- ```yarn workspace <пакет> <команда>``` - Выпонение команды в пакете
    - ```yarn workspace <пакет> add -D <пакет или модуль>``` - Добавление пакета/модуля
    - ```yarn workspace <пакет> run <команда>``` - Выполнение скрипта в пакете


## Пакеты
- `@pwa-concept/build` (packages/build) - пакет сборки темы
- `@pwa-concept/cli` (packages/cli) - CLI для темы
- `@pwa-concept/core` (packages/core)
- `@pwa-concept/eslint-config` (packages/eslint-config)
- `@pwa-concept/prettier-config` (packages/prettier-config)
- `@pwa-concept/typescript-config` (packages/typescript-config)
- `@pwa-concept/ui` (packages/ui)