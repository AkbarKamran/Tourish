import registerRoute from "./register";
import loginRoute from "./login";
import UserRoute from "./user";
import TestRoute from "./test";

const router = [registerRoute, loginRoute, UserRoute, TestRoute];

const registerRouter = (app: any) => {
  router.map((route) => {
    app.use("/api", route);
  });
};

export default registerRouter;
