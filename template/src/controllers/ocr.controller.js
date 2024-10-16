import { readCnh, readRg } from "../services/index.js";

const cnh = async (req, res) => {
  try {
    if (!req.file || !req.file.buffer) {
      throw new Error("Nenhum arquivo enviado.");
    }

    const file = await readCnh(req.file.buffer);

    return file;
  } catch (error) {
    console.error("Erro ao processar CNH:", error);
    res.status(500).send("Erro ao processar CNH.");
  }
};

const rg = async (req, res) => {
  try {
    const result = await readRg();
    res.status(200).send(result);
  } catch (error) {
    console.error("Erro ao processar RG:", error);
    res.status(500).send("Erro ao processar RG.");
  }
};

export { cnh, rg };
