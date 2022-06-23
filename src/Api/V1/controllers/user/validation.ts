export default new (class userValidation {
  validUser = async (type: any) => {
    return !!type && typeof type === "string" ? false : true;
  };
  typeOfUser = async (type: any) => {
    if (type.toString().toLowerCase() === "android") {
      return { type: "android", valid: true };
    } else if (type.toString().toLowerCase() === "ios") {
      return { type: "ios", valid: true };
    } else {
      return { valid: false };
    }
  };
})();
