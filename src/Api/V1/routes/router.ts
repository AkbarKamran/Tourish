import registerRoute from "./register";
import loginRoute from "./login";
import UserRoute from "./user";

const router = [registerRoute, loginRoute, UserRoute];

const registerRouter = (app: any) => {
  router.map((route) => {
    app.use("/api", route);
  });
};

export default registerRouter;
