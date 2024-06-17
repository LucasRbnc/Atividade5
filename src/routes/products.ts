import { Router } from "express";
import controller from "../controllers/ProductsController";
import { checkAdm, validadeAcess } from "../middlewares/Auth";

const routes = Router();

routes.get("/list", controller.list);
routes.post("/create", checkAdm, controller.create);
routes.delete("/delete", checkAdm, controller.delete);
routes.put("/update", checkAdm, controller.update);

export default routes;