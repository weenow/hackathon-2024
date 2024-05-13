import express from "express";
import { queue } from "../../queues/upload-queue.js";
import { cnh, rg } from "../../controllers/index.js";
import multer from "multer";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/cnh", upload.single("cnh"), async (req, res) => {
  try {
    if (!req.file || !req.file.buffer) {
      throw new Error("Nenhum arquivo enviado.");
    }

    const resultadoCNH = await cnh(req, res);
    await queue.add("processarCNH", { resultadoCNH });
    res.send("Tarefa adicionada à fila para processar a CNH.");
  } catch (error) {
    console.error("Erro ao processar CNH:", error);
    res.status(500).send("Erro ao processar CNH.");
  }
});

router.post("/rg", async (req, res) => {
  try {
    const resultadoRG = await rg(req.body.dadosRG);

    await queue.add("processarRG", { resultadoRG });
    res.send("Tarefa adicionada à fila para processar o RG.");
  } catch (error) {
    console.error("Erro ao processar RG:", error);
    res.status(500).send("Erro ao processar RG.");
  }
});

export default router;
