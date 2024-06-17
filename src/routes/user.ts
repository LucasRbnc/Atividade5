import { Router } from "express";
import controller from "../controllers/UserController";
import { checkAdm, validadeAcess } from "../middlewares/Auth";

const router = Router();

router.get("/list", validadeAcess,checkAdm,controller.list)
router.post("/create", controller.create);
router.post("/login", controller.login);
router.delete("/delete", validadeAcess, controller.delete);
router.put("/mail", validadeAcess, controller.updatemail);
router.put("/senha", validadeAcess, controller.updasenha);

export default router