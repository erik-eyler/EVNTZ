import { Router } from "express";
import * as controllers from "../controllers/events.js";
import restrict from "../helpers/restrict.js";

const router = Router();

router.get("/events", controllers.getEvents);
router.get("/events/:id", controllers.getEvent);
router.post("/events", restrict, controllers.createEvent);
router.put("/events/:id", restrict, controllers.updateEvent);
router.delete("/events/:id", restrict, controllers.deleteEvent);

export default router;
