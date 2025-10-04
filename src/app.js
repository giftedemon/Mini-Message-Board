import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import { getForm, getHome, postForm } from "./controllers/homeController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/{home}", getHome);

app.get("/new", getForm);

app.post("/new", postForm);

export default app;
