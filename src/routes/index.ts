import { Router } from "express";
import category from "./category"
import product from "./product";

const router = Router();

router.use("/categoria", category);
router.use("/produto", product);

export default router;