const db = require('../db'); // Импортируем настроенный пул соединений

class Lemonade {
  // Метод для создания новой записи о лимонаде
  static async create({ name, ingredients, price, volume, image_url }) {
    const query = `
      INSERT INTO lemonades (name, ingredients, price, volume, image_url)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [name, ingredients, price, volume, image_url];
    const { rows } = await db.query(query, values);
    return rows[0];
  }

  // Метод для получения всех лимонадов
  static async findAll() {
    const query = 'SELECT * FROM lemonades ORDER BY id ASC;';
    const { rows } = await db.query(query);
    return rows;
  }

  // Метод для получения одного лимонада по ID
  static async findById(id) {
    const query = 'SELECT * FROM lemonades WHERE id = $1;';
    const { rows } = await db.query(query, [id]);
    return rows[0];
  }
}

module.exports = Lemonade;