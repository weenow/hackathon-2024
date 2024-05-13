import { createWorker } from "tesseract.js";
import cv from "@techstark/opencv-js";
import Jimp from "jimp";

const readCnh = async (file) => {
  const worker = await createWorker("por");
  const ret = await worker.recognize(file);
  await worker.terminate();

  const uploadedFile = Jimp.read(file, (err, uploadedFile) => {
    if (err) throw err;

    uploadedFile.greyscale().write(new Date().getTime() + ".jpg");

    return uploadedFile;
  });
};

const readRg = async () => {
  return {
    name: "João",
    surname: "Silva",
    cpf: "12312312312",
    sex: "Masculino",
    birth: "20/10/1980",
    citizenship: "Brasileira",
    valid_date: "20/10/2024",
  };
};

export { readCnh, readRg };
