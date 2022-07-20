import loginQuery from "../../dataAccess/SQL/login/query";
import { createToken } from "../../middleware/middleware";
import { verifyHash } from "../../lib/dataManipulations/hashing/hash";
export default new (class loginService {
  public login = async (email: string, password: string) => {
    try {
      const adminExist: any = await loginQuery.isAdminExist(email);

      return adminExist.length
        ? this.adminExists(adminExist)
        : {
            valid: false,
            username: "",
            token: "",
            message: "please enter the valid email!",
          };
    } catch (error) {
      throw error;
    }
  };
  private adminExists = async (UserExists: any) => {
    try {
      const dbHash: any = await loginQuery.adminPasswordVerification(
        UserExists[0].email,
        UserExists[0].password
      );
      return this.verifyPassword(UserExists, dbHash);
    } catch (error) {
      throw error;
    }
  };
  private verifyPassword = async (UserExists: any, dbHash: string) => {
    try {
      let res = await verifyHash(UserExists[0].password, dbHash);
      // console.log(res);

      if (await verifyHash(UserExists[0].password, dbHash)) {
        //console.log("In Suceess");

        const token = await createToken(UserExists[0].email);
        let data = {
          id: UserExists[0].ID,
          valid: true,
          email: UserExists[0].email,
          profile_image: UserExists[0].profile_image,
          token: token,
          message: "welcome",
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
