import { app } from "./controller/app";
import { UserController } from "./controller/UserController";

const userController = new UserController();
app.get("/", async function () {
  console.log("endpoint teste");
});

app.post("/createUser", userController.createUser);
