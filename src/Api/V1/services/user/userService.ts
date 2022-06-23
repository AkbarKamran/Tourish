import getUserFromDb from "../../dataAccess/SQL/user/userLayer";
import { akbar } from "../../lib/helpers/helper";
export default new (class userMobile {
  getUser = async (type?: any) => {
    try {
      if (!type) {
        const userData = await getUserFromDb.user();

        return userData;
      } else {
        return { androidUser: "Android Ios User" };
      }
    } catch (error: any) {
      throw error.message;
    }
  };

  private userType = async (type: any) => {};
})();
