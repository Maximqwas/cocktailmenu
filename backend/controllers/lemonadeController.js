// Статический массив с данными для заглушки
const testLemonades = [
  {
    id: 1,
    name: "Апельсин-Облепиха",
    ingredients: "Апельсин, облепиха, сахарный сироп, содовая, лед, мята",
    price: 250,
    volume: 200,
  },
  {
    id: 2,
    name: "Киви-Тархун",
    ingredients: "Киви, сироп тархун, сахарный сироп, клубника, содовая, лед",
    price: 250,
    volume: 200,
  },
];

// Функция-контроллер для получения списка лимонадов
const getLemonades = (req, res) => {
  try {
    // Отправляем статический массив в качестве JSON-ответа
    res.status(200).json(testLemonades);
  } catch (error) {
    // В случае ошибки отправляем статус 500 (Server Error)
    res.status(500).json({ message: "Не удалось получить список лимонадов" });
    console.error(error);
  }
};

// Экспортируем функцию, чтобы ее можно было использовать в роутах
module.exports = {
  getLemonades,
};