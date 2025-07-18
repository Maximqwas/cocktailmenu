const express = require('express');
const router = express.Router();

// Импортируем наш контроллер
const { getLemonades } = require('../controllers/lemonadeController');

// Создаем GET-маршрут.
// Когда придет GET-запрос на '/', этот роутер вызовет функцию getLemonades.
// '/' здесь относится к базовому пути, который мы зададим в server.js (т.е. к /api/lemonades)
router.get('/', getLemonades);

// Экспортируем роутер
module.exports = router;