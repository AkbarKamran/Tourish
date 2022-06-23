import * as bcrypt from "bcrypt";

let convertHash = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
};
let verifyHash = async (password: string, dbPassword: string) => {
  return await bcrypt.compare(password, dbPassword);
};

export { convertHash, verifyHash };
