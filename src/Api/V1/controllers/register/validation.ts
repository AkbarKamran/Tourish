export default new (class registerValidation {
  validRegisterAdmin = async (username: string, password: string) => {
    return !!username &&
      typeof username === "string" &&
      typeof password === "string" &&
      !!password
      ? false
      : true;
  };
})();
