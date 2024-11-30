import { Router } from "express";
import { getMessages, createMessage } from "../controllers/indexController.js";
const indexRouter = Router();

indexRouter.get("/", getMessages);
indexRouter.post("/new", createMessage);

export { indexRouter };
