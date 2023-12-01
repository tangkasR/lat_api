import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const db = new Sequelize(
  process.env.APP_PORT.DATABASE,
  process.env.APP_PORT.DB_USERNAME,
  process.env.APP_PORT.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.APP_PORT
  }
);

export default db;
