import express from "express";
import { sendRequirement } from "../controller/requirement.controller.js";

const router = express.Router();

router.post("/send-requirement", sendRequirement);

export default router;
