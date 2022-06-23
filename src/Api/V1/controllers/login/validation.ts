export default new (class loginValidation {
  validLoginAdmin = async (username: string, password: string) => {
    return !!username &&
      typeof username === "string" &&
      typeof password === "string" &&
      !!password
      ? false
      : true;
  };
})();
