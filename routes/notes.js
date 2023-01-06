import { Router } from "express";
import {
  createNotes,
  deleteNotes,
  editNotes,
  getNotes,
} from "../controllers/notes-controller.js";
const router = Router();

router.get("/", getNotes);
router.post("/create", createNotes);
router.put("/edit/:id", editNotes);
router.delete("/delete/:id", deleteNotes);

export default router;
