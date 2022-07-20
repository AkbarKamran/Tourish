export default new (class loginValidation {
  validLoginAdmin = async (email: string, password: string) => {
    return !!email &&
      typeof email === "string" &&
      typeof password === "string" &&
      !!password
      ? false
      : true;
  };
})();
