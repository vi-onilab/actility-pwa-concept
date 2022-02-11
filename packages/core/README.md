# Core

## Установка из npm [IN PROGRESS]

1. Выполнить: `yarn add @pwa-concept/core`

## Содержание

- [Инициализация](#init)
    - [Рендеринг](#init_render)
        - [Мотивация](#init_render_motivation)
        - [Пример](#init_render_example)

## Инициализация <a name="init"></a>

### Рендеринг <a name="init_render"></a>

Является оберткой над API React для редеринга, чтобы уменьшить количество изменений в темах при переходах в версиях.

#### Мотивация <a name="init_render_motivation"></a>

Смена API рендеринга в 18 версии React

#### Пример <a name="init_render_example"></a>

```ts
import { bootstrap } from '@pwa-concept/core'
import { AppModule } from './AppModule'

bootstrap(async ({ create }) => {
    await create(AppModule)
}).catch(console.error)
```