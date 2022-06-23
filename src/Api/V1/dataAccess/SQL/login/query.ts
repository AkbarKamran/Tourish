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
  adminPasswordVerification = async (username: string, password: string) => {
    try {
      const selectQuery = `SELECT isNull(u.password,'') as password FROM dbo.neRegisterAdmin AS u where email = '${username}'`;
      return ((await baseQuery.runQuery(selectQuery)) as any)[0]
        .password as string;
    } catch (error) {
      throw error;
    }
  };
})();
