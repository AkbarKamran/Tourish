let logFlag = false;
let akbar = async (data: any) => {
  if (logFlag) {
    console.log(data);
  } else return;
};

enum User {
  Driver = 1,
  Company = 2,
  Manager = 3,
}
export { akbar, User };
