import { Sequelize } from "sequelize";

const db = new Sequelize(
  "railway",
  "root",
  "F6g24HA2e2cDef2EE5a2gF24eg2D4E-d",
  {
    host: "viaduct.proxy.rlwy.net",
    dialect: "mysql",
    port: 53520
  }
);

export default db;
