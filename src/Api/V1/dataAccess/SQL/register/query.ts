import {
  convertHash,
  verifyHash,
} from "../../../lib/dataManipulations/hashing/hash";
import baseQuery from "../common/baseQuery";
export default new (class loginQuery {
  isAdminExist = async (username: string) => {
    try {
      let selectQuery = `SELECT u.email FROM dbo.neRegisterAdmin AS u where email = '${username}'`;

      const dbData = await baseQuery.runQuery(selectQuery);
      return dbData;
    } catch (error) {
      throw error;
    }
  };
  registerAdmin = async (username: string, password: string) => {
    try {
      let hashPassword = await convertHash(password);
      console.log(username);

      let insertQuery = `INSERT INTO dbo.neRegisterAdmin(email,password) VALUES('${username}', '${hashPassword}') SELECT SCOPE_IDENTITY() as id `;

      let dbData: any = await baseQuery.runQuery(insertQuery);
      // console.log(dbData[0].id);
      return dbData;
    } catch (error) {
      throw error;
    }
  };
})();
