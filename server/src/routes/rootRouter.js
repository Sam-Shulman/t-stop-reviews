import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import stationRouter from "./api/v1/stationRouter.js";
import clientRouter from "./clientRouter.js";
import votesRouter from "./api/v1/votesRouter.js";
const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/stations", stationRouter)
rootRouter.use("/api/v1/votes", votesRouter)
//place your server-side routes here

export default rootRouter;
