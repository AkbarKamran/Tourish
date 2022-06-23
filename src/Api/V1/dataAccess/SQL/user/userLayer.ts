import baseQuery from "../common/baseQuery";
import { akbar } from "../../../lib/helpers/helper";

export default new (class getUserFromDb {
  public user = async (type?: any) => {
    try {
      if (!type) {
        const query = `select COUNT(username) as totalNeeoUser from dbo.neUserExtension`;
        const allUser: any = await baseQuery.runQuery(query);
        akbar(allUser);
        akbar("abdul Rehman");
        return allUser[0].totalNeeoUser;
      }
    } catch (error) {
      throw error;
    }
  };
})();
