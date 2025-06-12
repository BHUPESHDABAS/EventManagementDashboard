import express from "express";
import {createEvent, updateEvent, deleteEvent} from "../controllers/events.js"
const router = express.Router();

//Admin Routes
router.post("/createEvent", createEvent);
router.post("/updateEvent", updateEvent);
router.post("/deleteEvent", deleteEvent);


export default router;