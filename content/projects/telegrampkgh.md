<h1 align="center">
  <img width=250 height=250 src="https://raw.githubusercontent.com/kiinse/TelegramPKGH/main/.github/pkghlogo.jpg"  alt=""/>
  <br>TelegramPKGH<br>
</h1>

<p align="center">
  <b>Ну да... Бот по расписанию ПКГХ👉👈</b><br><br>

  <a href="https://app.codacy.com/gh/kiinse/TelegramPKGH/dashboard">
    <img src="https://app.codacy.com/project/badge/Grade/04669f7c982b4ec8ba4783493dfb1ca9" alt="codacy"/>
  </a>
  <a href="https://github.com/kiinse/TelegramPKGH">
    <img src="https://img.shields.io/github/repo-size/kiinse/TelegramPKGH?style=flat-square" alt="size"> 
  </a>
  <a href="https://github.com/kiinse/TelegramPKGH/issues">
    <img src="https://img.shields.io/github/issues/kiinse/TelegramPKGH?style=flat-square" alt="issues"> 
  </a>
  <a href="https://github.com/kiinse/TelegramPKGH/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/kiinse/TelegramPKGH?style=flat-square" alt="licence"> 
  </a><br><br>
  <a href="#помощь">Помощь</a> •
  <a href="#особенности">Особенности</a> •
  <a href="#установка">Установка</a> •
  <a href="#конфиг">Конфиг</a>
</p>

## Донаты

Если вы хотите поддержать проект, то просто поставьте на него звезду и подпишитесь на обновления =3

## Помощь

Заходите в чат [Telegram](https://t.me/podslyshanopkgh_chat) и зовите администрацию если у вас есть вопросы.

## Особенности

- Рассылка расписания на следующий ежедневно в 8 часов вечера
- Рассылка следующих пар
- Просмотр расписания

## Установка

Для установки бота необходимо для начала загрузить Rest сервер (**Ссылка будет позже**).

Затем необходимо выполнить следующие команды:
```bash
> git clone https://github.com/kiinse/TelegramPKGH && cd TelegramPKGH
> gradle clean build && cd /build/libs/
> sudo java -jar TelegramPKGH-ВЕРСИЯ.jar
```

**Для установки требуется JDK 17+, а так же версия Gradle 6+**


## Конфиг

```properties
# Бот использует базу данных MongoDB
db.host=localhost
db.port=27017
db.name=pkghbot
db.login=mongo
db.password=mongo
db.auth=admin
# База данных для проверки авторизации

bot.token=bot token
# Токен бота
bot.name=PKGHScheduleBot
# Имя бота

sentry.enabled=true
# Включён ли Sentry
sentry.dsn=sentry dsn token
# Токен Sentry для отслеживания ошибок

admins=admin1 | admin2
# Администрация
channel=@podslyshanopkgh
# Линк на канал для отправки постов (Должен начинаться с собаки)
rest=http://pkgh.schedule:3366/
# Rest с сервисом для получения расписания
```
