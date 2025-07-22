const Lemonade = require('../models/lemonade.model'); // Импортируем модель

// Контроллер для получения всех лимонадов
const getAllLemonades = async (req, res) => {
  try {
    // Используем метод findAll из модели для получения данных из БД
    const lemonades = await Lemonade.findAll();
    res.status(200).json(lemonades);
  } catch (error) {
    console.error('Ошибка при получении лимонадов:', error);
    res.status(500).json({ message: 'Ошибка на сервере' });
  }
};

// Контроллер для создания нового лимонада
const createLemonade = async (req, res) => {
  try {
    const newLemonade = await Lemonade.create(req.body);
    res.status(201).json(newLemonade);
  } catch (error) {
    console.error('Ошибка при создании лимонада:', error);
    res.status(500).json({ message: 'Ошибка на сервере' });
  }
};

module.exports = {
  getAllLemonades,
  createLemonade,
};