import { Router } from "express";
import { getMessages, postMessage } from "../controllers/indexController.js";
const indexRouter = Router();

indexRouter.get("/", getMessages);
indexRouter.post("/new", postMessage);

export { indexRouter };
