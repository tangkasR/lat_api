import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.DATABASE);

const db = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.APP_PORT
  }
);

export default db;
