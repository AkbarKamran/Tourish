const sqlConnection = require("../../../../../config/connection/connection");

export default new (class baseQuery {
  runQuery = async (query: string, columns: any = {}) => {
    try {
      return new Promise((resolve, reject) => {
        sqlConnection
          .getSqlConnection()
          .then((pool: any) => {
            let req = pool.request();
            Object.entries(columns).length === 0
              ? req.query(query, (error: any, record: any) => {
                  if (error) {
                    console.log("In error", error);
                    reject(error);
                  }
                  return resolve(record.recordsets[0]);
                })
              : req.query(query, columns, (error: any, record: any) => {
                  if (error) reject(error);
                  return resolve(record.recordsets[0]);
                });
          })
          .catch((err: any) => {
            return reject(err);
          });
      });
    } catch (error) {
      throw error;
    }
  };
})();
