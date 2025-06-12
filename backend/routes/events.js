import express from "express";
import {createEvent} from "../controllers/events.js"
const router = express.Router();


router.post("/createEvent", createEvent);


export default router;