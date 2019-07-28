### Использование

- npm i
- #####Создаем .env файл, пихаем туда ключи:
  API_KEY (JOOBLE KEY), DOC (ID документа в гугл таблицах), KEYWORD (кейворд)
- ##### Создаем лист в гугл таблицах, называем его так же, как и KEYWORD, В первых строках вписываем поля:

#### job title, location, snippet, source, link, updated

- #### берем json файл с credentials для google docs api, именуем его как creds.json и кладем в папку
- #### запускаем скрипт (npm start)
