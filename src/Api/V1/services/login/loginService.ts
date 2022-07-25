import loginQuery from "../../dataAccess/SQL/login/query";
import { createToken } from "../../middleware/middleware";
import { verifyHash } from "../../lib/dataManipulations/hashing/hash";
export default new (class loginService {
  public login = async (email: string, password: string) => {
    try {
      const adminExist: any = await loginQuery.isAdminExist(email);

      return adminExist.length
        ? this.adminExists(adminExist, password)
        : {
            valid: false,
            token: "",
            message: "Please enter the valid email!",
          };
    } catch (error) {
      throw error;
    }
  };
  private adminExists = async (UserExists: any, password: string) => {
    try {
      const dbHash: any = await loginQuery.adminPasswordVerification(
        UserExists[0].email,
        UserExists[0].password
      );
      return this.verifyPassword(UserExists, password, dbHash);
    } catch (error) {
      throw error;
    }
  };
  private verifyPassword = async (
    UserExists: any,
    password: string,
    dbHash: string
  ) => {
    try {
      if (await verifyHash(password, dbHash)) {
        const token = await createToken(UserExists[0].email);
        let data = {
          valid: true,
          token: token,
          id: UserExists[0].ID,
          email: UserExists[0].email,
          username: UserExists[0].username,
          account_type: UserExists[0].account_type,
          phone: UserExists[0].phone,
          profile_image: UserExists[0].profile_image,
        };
        return data;
      } else {
        return {
          valid: false,
          username: "",
          token: "",
          message: "Invalid Password",
        };
      }
    } catch (error) {
      throw error;
    }
  };
})();
