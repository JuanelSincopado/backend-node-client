import { Router } from "express";
import {
  createClient,
  getClients,
  editClient,
  deleteClient,
} from "../controllers/clients-controller.js";
const router = Router();

router.get("/", getClients);
router.post("/create", createClient);
router.put("/update/:id", editClient);
router.delete("/delete/:id", deleteClient);

export default router;
