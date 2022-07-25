import baseQuery from "../common/baseQuery";
export default new (class loginQuery {
  isAdminExist = async (email: string) => {
    try {
      let selectQuery = `SELECT * FROM dbo.neRegister where email = '${email}'`;

      const dbData = await baseQuery.runQuery(selectQuery);

      return dbData;
    } catch (error) {
      throw error;
    }
  };
  adminPasswordVerification = async (email: string, password: string) => {
    try {
      const selectQuery = `SELECT u.password as password FROM dbo.neRegister AS u where email = '${email}'`;
      return ((await baseQuery.runQuery(selectQuery)) as any)[0]
        .password as string;
    } catch (error) {
      throw error;
    }
  };
})();
