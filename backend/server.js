const express = require('express');
const cors = require('cors');
require('dotenv').config();

const lemonadeRoutes = require('./routes/lemonadeRoutes');
const app = express();

app.use(cors()); 
app.use(express.json());

app.use('/api/lemonades', lemonadeRoutes);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('<h1>Бэкенд "Меню Лимонадов" работает!</h1>');
});

app.listen(PORT, () => {
  console.log(`Сервер успешно запущен на порту ${PORT}`);
});