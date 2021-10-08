import { Router } from "express";
import eventsRoutes from "./events.js";
import usersRoutes from "./users.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", usersRoutes);
router.use("/", eventsRoutes);

export default router;
