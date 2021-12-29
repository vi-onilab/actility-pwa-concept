# PWA Concept

## Временная установка в проект без npm репозитория
1. Корневой проект `yarn add git+ssh://git@bitbucket.org:onilab/pwa-concept.git#develop`
2. Пакеты:

   - `yarn add file:./node_modules/pwa-concept/packages/cli`
   - `yarn add file:./node_modules/pwa-concept/packages/core`
   - `yarn add -D file:./node_modules/pwa-concept/packages/eslint-config`
   - `yarn add file:./node_modules/pwa-concept/packages/ui`

