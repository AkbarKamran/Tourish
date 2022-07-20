import loginQuery from "../../dataAccess/SQL/register/query";
import { User } from "../../lib/helpers/helper";
export default new (class registerService {
  serviceRegisterAdmin = async (
    email: string,
    username: string,
    account_type: string,
    password: string,
    phone: string,
    imageUrl: string
  ) => {
    try {
      let adminExist: any = await loginQuery.isAdminExist(email);
      console.log("Admin Exist", adminExist);

      return !adminExist.length
        ? this.registerAdmin(
            email,
            username,
            account_type,
            password,
            phone,
            imageUrl
          )
        : {
            valid: false,
            username: username,
            message: "User Already Exist",
          };
    } catch (error) {
      throw error;
    }
  };
  private registerAdmin = async (
    email: string,
    username: string,
    account_type: string,
    password: string,
    phone: string,
    imageUrl: string
  ) => {
    try {
      let account = 0;
      if (account_type.toLowerCase() === "driver") {
        account = User.Driver;
      } else if (account_type.toLowerCase() === "company") {
        account = User.Company;
      } else if (account_type.toLowerCase() === "manager") {
        account = User.Manager;
      }
      await loginQuery.registerAdmin(
        email,
        username,
        account,
        password,
        phone,
        imageUrl
      );
      return {
        valid: true,
        username: username,
        message: "Username Registered",
      };
    } catch (error) {
      throw error;
    }
  };
})();
