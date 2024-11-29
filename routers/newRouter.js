import { Router } from "express";
import { getForm } from "../controllers/newController.js";
const newRouter = Router();

newRouter.get("/new", getForm);

export { newRouter };
