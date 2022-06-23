import loginQuery from "../../dataAccess/SQL/register/query";
export default new (class registerService {
  serviceRegisterAdmin = async (username: string, password: string) => {
    try {
      let adminExist: any = await loginQuery.isAdminExist(username);

      return !adminExist.length
        ? this.registerAdmin(username, password)
        : {
            valid: false,
            username: username,
            message: "Username Already Exist",
          };
    } catch (error) {
      throw error;
    }
  };
  private registerAdmin = async (username: string, password: string) => {
    try {
      await loginQuery.registerAdmin(username, password);
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
