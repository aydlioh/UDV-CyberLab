# Важное
* Должен использоваться `type` для типизации пропсов, параметров, типов стора, dto и т.д.
* Должен использоваться `interface` для описания структуры сервисов

# Слои (NeoLab)

### Entities
+ identity/
    + admin/
    + user/
    + auth/
+ project/
    + rating/
    + details/
    + comments/
+ test/
    + editing/
    + details/
    + question/
    + passing/

- filter/         -->   shared/common/modules/filter (ui, types)
- filter/const/   -->   shared/const/filters/**
- sorting/        -->   shared/common/modules/sorting (ui, types)
- sorting/const   -->   shared/const/sorting/**

### Pages

Соблюдать схему!

+ admin/
    + projects-page/
    + users-page/
+ auth/
    + login-page/
    + register-page/
+ main/
    + main-page/
+ project/
    + my-projects-page/
    + projects-page/
    + project-page/
+ test/
    + my-tests-page/
    + my-created-tests-page/
    + my-passed-tests-page/
    + tests-page/
    + TODO: test-page/ 
    + test-passing-page/
    + test-overview-page/
    + test-results-page/
    + test-result-page/
    + test-result-preview-page/
    + test-edit-ai-page/
    + test-edit-generate-page/
    + test-edit-page/
    + test-edit-settings-page/
    + test-edit-preview-page/
    + test-statistics-page/

- error -->   shared/common/modules/error

# Сегменты

### Shared

##### Shared:Схема
* assets/
* ui/
* core/
    * api/
        * index.ts  <-- (public)
        * instances.ts        - инстанс клиента(ов)
        * config.ts           - конфигурация
        * client.ts           - клиент
        * helpers/
            * utils/
            * consts/
        * requests/
        * responses/
        * interceptors/
    * services/
        * index.ts  <-- (public)
        * instances.ts        - инстанс сервисов
        * storages/
            * abstract-storage.service.ts
            * cookie-storage.service.ts
            * local-storage.service.ts
            * session-storage.service.ts
        * window.service.ts
    * modules/**
        * ui/
        * types/
        * helpers/
        * consts/
        * stores/
        * hooks/
* common/
    * components/
    * utils/
    * types/
    * consts/
    * stores/
    * hooks/

### Entities

##### Entities:Важное
**На каждый микросервис по сущности.**
`MODEL --> VIEW --> PRESENTER`
Сущность:
  * `MODEL`       - Должна хранить изолированный от модели API
  * `VIEW`        - Должна хранить свой UI
  * `PRESENTER`   - Должна хранить модель (типы, взаимодействия с моделью)
  * Может хранить вспомогательные функции (хуки, утилиты, типы)

##### Entities:Схема

* index.ts  <-- (public)
* ui/                             (public)
* helpers/
    * utils.ts
    * hooks.ts
    * types.ts
    * consts.ts
* model/
    * schemas/                    (public)
    * hooks/                      (public)
    * queries/                    (public)
    * actions/                    (public)
    * types/                      (public)
    * consts/                     (public | private)
    * store/
        * entity.store.ts         (public)
        * types.ts
* api/
    * entity-service.interface.ts
    * entity-service.ts
    * endpoints.ts
    * mappers/
    * dto/
    * params/
    * types/


##### Entities:Пояснение

* index.ts     - точка входа
* ui/          - компоненты без логики (логика может быть вспомогательной)
* helpers/     - вспомогательные элементы
    * utils         - внутренние утилиты
    * hooks         - внутренние хуки
    * types         - внутренние типы
    * consts        - внутренние константы 
* model/                    - логика модели
    * hooks/                - публичные хуки с кастомной логикой
    * queries/              - useQuery хуки, шаблон `use[<название-сущности>][<тип-запроса>]Query.ts`
    * actions/              - useMutation хуки, шаблон `use[<название-сущности>][<тип-действия>]Action.ts`
    * mappers/              - мапперы для преобразования (reponses сервиса --> types модели)
    * types/                - типы модели (в том числе публичные типы для компонентов)
    * consts/               - константы (могут быть публичными, в зависимости от ситуации)
    * store/                    - состояние модели
        * entity.store.ts       - стор
        * types.ts              - типы для стора
* api/                              - api сервис (изолированная логика)
    * service.interface.ts          - интерфейс сервиса
    * service.ts                    - реализация сервиса
    * endpoints.ts                  - эндпоинты
    * requests/                     - типы тела запроса
    * responses/                    - типы тела ответа
    * params/                       - типы параметры сервиса

### Features

##### Features:Важное
Фича не может делать запросы. Выполняет только одно действие (бизнес задачу)

##### Features:Схема

* index.ts  <-- (public)
* ui/                             (public)
* helpers/
    * utils.ts
    * hooks.ts
    * types.ts
    * consts.ts
* model/
    * hooks/                      (public)
    * actions/                    (public)
    * store/
        * entity.store.ts         (public)
        * types.ts

### Widgets

##### Widgets:Важное
Блок фичей и сущностей. Может иметь множество действий.

##### Widgets:Схема

* index.ts  <-- (public)
* ui/                             (public)
* helpers/
    * utils.ts
    * hooks.ts
    * types.ts
    * consts.ts
* model/
    * schemas/                    (public) 
    * hooks/                      (public)
    * queries/                    (public)
    * actions/                    (public)
    * types/                      (public)
    * store/
        * entity.store.ts         (public)
        * types.ts

### Pages

##### Pages:Схема

* index.ts  <-- (public)
* router.ts                         (public)
* layouts/
* guards/
* routes/**
    * route.ts
    * ui/
    * helpers/
        * utils.ts
        * hooks.ts
        * types.ts
        * consts.ts

### App

##### App:Схема
* main.tsx   <-- (точка входа)
* router/
    * layouts/
    * guards/
    * app-router.ts
    * modal-router.ts
* providers/
* styles/
