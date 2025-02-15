// API - Application Programing Interface
// POST, GET, PUT, DELETE
// CRUD - CREATE READ UPDATE DELETE
// Endpoint
// Middleware
import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

app.use(cors());
// app.use(express.json());

app.get("/", (request, response) => {
  response.send("SÓ VAMOS TRABALHAR COM OS ENDPOINTS '/artists' e '/songs'");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
