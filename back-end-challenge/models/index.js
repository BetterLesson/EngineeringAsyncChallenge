import { Sequelize } from 'sequelize';
import mysql from 'mysql2/promise';
import reservationModel from './reservation';
import config from '../serverConfig';

const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
} = config;

const db = {};

async function initialize() {
  try {
    const dbName = process.env.NODE_ENV === 'test' ? 'testing' : DB_NAME;
    const connection = await mysql.createConnection({ host: DB_HOST, port: 3306, user: DB_USER, password: DB_PASSWORD });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`);

    const sequelize = new Sequelize(dbName, DB_USER, DB_PASSWORD, {
      host: DB_HOST,
      dialect: 'mysql',
    });

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.reservation = reservationModel(sequelize);

    await sequelize.sync({ force: true });
    console.log('Connected to database.');
  } catch (e) {
    if (e.code === 'ECONNREFUSED') {
      console.error('Ensure the database is running with \"npm run db:start\" before running the server');
    }

    if (e.code === 'PROTOCOL_CONNECTION_LOST') {
      return setTimeout(initialize, 1000);
    }

    console.error(e);
    process.exit(1);
  }
};

initialize();

export default db;