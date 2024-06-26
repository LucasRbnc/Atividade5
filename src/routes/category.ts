import { Router } from "express";
import controller from "../controllers/CategoryController";
import { checkAdm } from "../middlewares/Auth";

const routes = Router();

routes.get("/list", controller.list);
routes.post("/create", checkAdm, controller.create);
routes.delete("/delete/:id", checkAdm, controller.delete);
routes.put("/update", checkAdm, controller.update);

export default routes