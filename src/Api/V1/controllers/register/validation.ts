export default new (class registerValidation {
  validRegisterAdmin = async (
    email: string,
    username: string,
    account_type: string,
    password: string,
    phone: string
  ) => {
    return !!username &&
      typeof username === "string" &&
      typeof password === "string" &&
      !!password &&
      !!email &&
      typeof email === "string" &&
      !!account_type &&
      typeof account_type === "string" &&
      !!phone &&
      typeof phone === "string"
      ? false
      : true;
  };
})();
