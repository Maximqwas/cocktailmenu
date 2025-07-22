require('dotenv').config(); // Обязательно в самом верху
const { Pool } = require('pg');

// Пул подключается к удаленной базе через DATABASE_URL из вашего .env файла
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Данные о лимонадах, взятые из вашего меню
const lemonadesToSeed = [
  {
    name: 'Апельсин-Облепиха',
    ingredients: ['Апельсин', 'облепиха', 'сахарный сироп', 'содовая', 'лед', 'мята'],
    price: 250,
    volume: 200,
    image_url: '/images/orange-sea-buckthorn.jpg',
  },
  {
    name: 'Киви-Тархун',
    ingredients: ['Киви', 'сироп тархун', 'сахарный сироп', 'клубника', 'содовая', 'лед'],
    price: 250,
    volume: 200,
    image_url: '/images/kiwi-tarragon.jpg',
  },
  {
    name: 'Малина Маракуйя',
    ingredients: ['Малина', 'пюре маракуйя', 'сахарный сироп', 'содовая', 'мята', 'лед'],
    price: 250,
    volume: 200,
    image_url: '/images/raspberry-passion-fruit.jpg',
  },
  {
    name: 'Имбирь Маракуйя',
    ingredients: ['Имбирь', 'пюре маракуйя', 'сахарный сироп', 'лимон', 'содовая', 'лед'],
    price: 250,
    volume: 200,
    image_url: '/images/ginger-passion-fruit.jpg',
  },
  {
    name: 'Анчан-Ананас',
    ingredients: ['Ананасовый сок', 'лимонный фреш', 'кокосовый сироп', 'чай анчан', 'лед'],
    price: 250,
    volume: 200,
    image_url: '/images/anchan-pineapple.jpg',
  },
  {
    name: 'Апельсиновый лимонад',
    ingredients: ['Апельсин', 'сахарный и апельсиновый сиропы', 'содовая', 'мята', 'лед'],
    price: 250,
    volume: 200,
    image_url: '/images/orange-lemonade.jpg',
  },
  {
    name: 'Мохито Клубничный',
    ingredients: ['Клубника', 'лайм', 'мята', 'клубничный сироп', 'спрайт', 'лед'],
    price: 250,
    volume: 200,
    image_url: '/images/strawberry-mojito.jpg',
  },
  {
    name: 'Мохито Классический',
    ingredients: ['Лайм', 'мята', 'сахарный сироп', 'спрайт', 'лед'],
    price: 250,
    volume: 200,
    image_url: '/images/classic-mojito.jpg',
  },
  {
    name: 'Манго Маракуйя',
    ingredients: ['Пюре манго', 'пюре маракуйя', 'сок апельсиновый', 'содовая', 'лед'],
    price: 250,
    volume: 200,
    image_url: '/images/mango-passion-fruit.jpg',
  },
  {
    name: 'Черная смородина Можжевельник',
    ingredients: ['Черная смородина', 'клюквенно-можжевельный сироп', 'сироп черная смородина', 'содовая', 'лед'],
    price: 250,
    volume: 200,
    image_url: '/images/blackcurrant-juniper.jpg',
  },
];

const seedDatabase = async () => {
  try {
    console.log('Подключаемся к базе данных для заполнения...');
    // Очищаем таблицу перед добавлением новых данных, чтобы избежать дубликатов
    await pool.query('TRUNCATE TABLE lemonades RESTART IDENTITY CASCADE;');
    console.log('Таблица "lemonades" успешно очищена.');

    const query = `
      INSERT INTO lemonades (name, ingredients, price, volume, image_url)
      VALUES ($1, $2, $3, $4, $5);
    `;

    // Проходим по каждому лимонаду в массиве и добавляем его в базу
    for (const lemonade of lemonadesToSeed) {
      const values = [
        lemonade.name,
        lemonade.ingredients,
        lemonade.price,
        lemonade.volume,
        lemonade.image_url,
      ];
      await pool.query(query, values);
      console.log(`Добавлен: ${lemonade.name}`);
    }

    console.log('✅ База данных успешно заполнена начальными данными!');
  } catch (error) {
    console.error('❌ Ошибка при заполнении базы данных:', error);
  } finally {
    // Обязательно закрываем соединение после выполнения скрипта
    await pool.end();
    console.log('Соединение с базой данных закрыто.');
  }
};

seedDatabase();