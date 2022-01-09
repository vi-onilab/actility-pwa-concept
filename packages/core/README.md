# Core

## Установка
1. Выполнить: `yarn add @pwa-concept/core`

## Инициализация в проект
### Рендеринг проекта
Является оберткой над API React для редеринга, чтобы уменьшить количество изменений в темах при переходах в версиях.

#### Мотивация
Смена API рендеринга в 18 версии React

#### Пример
```js
import { run } from '@pwa-concept/core';
import App from './App';

run(<App />, document.getElementById('app'));
```