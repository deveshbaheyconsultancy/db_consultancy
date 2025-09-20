import express from "express";
import { sendContact } from "../controller/contact.controller.js";

const router = express.Router();

router.post("/send-contact", sendContact);

export default router;
