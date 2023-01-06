import express from "express";
import cors from "cors";
import clientsRoutes from "./routes/clients.js";
import notesRoutes from "./routes/notes.js";

const app = express();

app.use(cors());

const port = 5000;

app.use(express.json());

app.use("/clients", clientsRoutes);
app.use("/notes", notesRoutes);

app.listen(port, () => {
  console.log(`En el puerto: ${port}`);
});
