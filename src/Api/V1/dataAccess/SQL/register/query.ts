import {
  convertHash,
  verifyHash,
} from "../../../lib/dataManipulations/hashing/hash";
import baseQuery from "../common/baseQuery";
export default new (class loginQuery {
  isAdminExist = async (username: string) => {
    try {
      let selectQuery = `SELECT u.email FROM dbo.neRegisterUser AS u where email = '${username}'`;

      const dbData = await baseQuery.runQuery(selectQuery);
      return dbData;
    } catch (error) {
      throw error;
    }
  };
  registerAdmin = async (
    email: string,
    username: string,
    account_type: number,
    password: string,
    phone: string,
    imageUrl: string
  ) => {
    try {
      let hashPassword = await convertHash(password);
      console.log(email);
      let insertQuery = `INSERT INTO dbo.neRegisterUser(email,username,account_type,password,phone,profile_image) VALUES('${email}','${username}',${account_type}, '${hashPassword}','${phone}','${imageUrl}') SELECT SCOPE_IDENTITY() as id `;
      let dbData: any = await baseQuery.runQuery(insertQuery);
      return dbData;
    } catch (error) {
      throw error;
    }
  };
})();
