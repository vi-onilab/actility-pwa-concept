# PWA Concept


## Термины
- `Модуль` - пакет из репозитория NPM
- `Пакет` - пакет из *packages/**


## Команды
- ```yarn start [--scope <определенный пакет>]``` - Запуск всех пакетов в режим разработки 
- ```yarn build [--scope <определенный пакет>]``` - Сборка всех пакетов
- ```yarn analyze [--scope <определенный пакет>]``` - Сборка всех пакетов и анализ
- ```yarn clean``` - Очистка модулей, устоновка снова и очистка сборок пакетов
- ```lerna add <пакет или модуль> [--scope <в какой пакет>]``` - Добавление пакета/модуля


## Пакеты
- `@pwa-concept/build` (packages/build) - пакет сборки темы
- `@pwa-concept/cli` (packages/cli) - CLI для темы
- `@pwa-concept/core` (packages/core)
- `@pwa-concept/eslint-config` (packages/eslint-config)
- `@pwa-concept/prettier-config` (packages/prettier-config)
- `@pwa-concept/typescript-config` (packages/typescript-config)
- `@pwa-concept/ui` (packages/ui)