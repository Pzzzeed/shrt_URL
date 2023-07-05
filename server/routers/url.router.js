import { Router } from "express";
import { createUrl, getUrl } from "../controllers/url.controller.js";

const urlRouter = Router();

urlRouter.post("/create", createUrl);
urlRouter.get("/:shortUrl", getUrl);

export default urlRouter;
