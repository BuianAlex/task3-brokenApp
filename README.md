Найденные ошибки компиляции
Error: Router is not defined var router = Router();
FIX: const router = require('express').Router();  
WHERE: controllers\usercontroller.js:1

Error: Cannot find module 'bcrypt'
FIX: change name to bcryptjs
WHERE:controllers\usercontroller.js:2

TypeError: require(...).import is not a function
FIX: const User = require('../models/user'); and ref user model
WHERE:controllers\usercontroller.js:5

TypeError: require(...).import is not a function
FIX: const Game = require('../models/game'); and ref user game
WHERE:controllers\usercontroller.js:5

TypeError: require(...).import is not a function
FIX: const User = require('../models/user');
WHERE:middleware\validate-session.js:2

ReferenceError: routers is not defined
FIX: name to router
WHERE: controllers\gamecontroller.js:112

Error: Cannot find module 'bcrypt'
FIX: name to 'bcryptjs'

Error: no export function
FIX: ref all
WHERE:models\game.js

Error: app.listen port not specified
FIX: set from process.env
WHERE: app.js:14

Error: deprecated bodyParser:
FIX: to express.json() and express.urlencoded()
WHERE: app.js:9

Error: sequelize deprecated String based operators are now deprecated.
FIX:sequelize updated to "^6.6.2"

<описание ошибки>. <описание исправления>. Исправлена(ы) строка(и) <номер(а) строк> в файле <относительный путь к файлу из корневой папки> ...
Найденные ошибки логики приложения
<описание ошибки>. <описание исправления>. Исправлена(ы) строка(и) <номер(а) строк> в файле <относительный путь к файлу из корневой папки> ...
Рефактор кода
var to let and const
<Описание, что было изменено>
