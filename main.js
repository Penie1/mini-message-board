import express from "express";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { indexRouter } from "./routers/indexRouter.js";
import { newRouter } from "./routers/newRouter.js";

const path = fileURLToPath(import.meta.url);
const __dirname = dirname(path);
const app = express();
const PORT = process.env.port || 3000;

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/", newRouter);

app.listen(PORT);
