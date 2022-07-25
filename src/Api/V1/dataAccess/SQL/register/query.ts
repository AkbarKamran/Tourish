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
      let insertQuery = `INSERT INTO dbo.neRegisterUser(email,username,account_type,password,phone,profile_image) VALUES('${email}','${username}',${account_type}, '${password}','${phone}','${imageUrl}') SELECT SCOPE_IDENTITY() as id `;
      let id: any = await baseQuery.runQuery(insertQuery);
      let dbData = await baseQuery.runQuery(
        `SELECT  profile_image,phone,email, username,account_type from dbo.neRegisterUser where id = ${id[0].id}`
      );
      return dbData;
    } catch (error) {
      throw error;
    }
  };
})();
