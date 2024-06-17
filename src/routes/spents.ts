import { Router } from "express";
import controller from "../controllers/SpentsController";

const router = Router();

router.get("/list",controller.list);
router.post("/create", controller.create);
router.delete("/delete",controller.delete);
router.put("/update",controller.update)

export default router