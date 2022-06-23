const SQL_CONFIGURATION = require("../DatabaseConfig.json");
const SQL = require("mssql");
import { akbar } from "../../Api/V1/lib/helpers/helper";

let connection: any = null;
const getSqlConnection = () => {
  try {
    return new Promise((resolve, reject) => {
      if (connection) {
        resolve(connection);
      } else {
        SQL.connect(SQL_CONFIGURATION)
          .then((pool: any) => {
            connection = pool;
            akbar("New connection in connection.ts");
            resolve(connection);
          })
          .catch((error: any) => {
            reject(error);
          });
      }
    });
  } catch (err) {
    console.log("error while connecting db", err);
    return err;
  }
};
const closeConnection = () => {
  if (connection) {
    connection.close();
    connection = null;

    console.log("Connection Close");
  }
};

module.exports = { getSqlConnection, closeConnection };
