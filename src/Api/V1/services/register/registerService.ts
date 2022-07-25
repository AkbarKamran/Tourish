import loginQuery from "../../dataAccess/SQL/register/query";
import { User } from "../../lib/helpers/helper";
import { createToken } from "../../middleware/middleware";
import {
  convertHash,
  verifyHash,
} from "../../lib/dataManipulations/hashing/hash";
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
            email: email,
            message: "Email Already Exist",
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
      } else if (account_type.toLowerCase() === "user") {
        account = User.User;
      }
      let hashPassword = await convertHash(password);
      let result: any = await loginQuery.registerAdmin(
        email,
        username,
        account,
        hashPassword,
        phone,
        imageUrl
      );
      const token = await createToken(email);
      let data = {
        valid: true,
        token: token,
        id: result[0].id,
        email: result[0].email,
        username: result[0].username,
        account_type: result[0].account_type,
        phone: result[0].phone,
        profile_image: result[0].profile_image,
      };
      return data;
    } catch (error) {
      throw error;
    }
  };
})();
