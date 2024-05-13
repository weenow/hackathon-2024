import { Queue, Worker } from "bullmq";

const REDIS_QUEUE_HOST = process.env.REDIS_QUEUE_HOST || "redis";
const REDIS_QUEUE_PORT = process.env.REDIS_QUEUE_PORT
  ? parseInt(process.env.REDIS_QUEUE_PORT)
  : 6379;

const queue = new Queue("upload-queue", {
  connection: {
    host: REDIS_QUEUE_HOST,
    port: REDIS_QUEUE_PORT,
    maxRetriesPerRequest: null,
    autorun: true,
  },
});

const worker = new Worker(
  "upload-queue",
  async (job) => {
    const { name, data } = job;

    if (name === "processarCNH") {
      // Processar CNH
    } else if (name === "processarRG") {
      // Processar RG
    }

    return job.data;
  },
  {
    connection: {
      host: REDIS_QUEUE_HOST,
      port: REDIS_QUEUE_PORT,
      maxRetriesPerRequest: null,
      autorun: true,
    },
  }
);

worker.on("completed", (job) => {
  console.log(
    `Tarefa ${job.id} concluída. E o arquivo já foi salvo no seu diretório.`
  );
});

worker.on("failed", (job, err) => {
  console.error(`Tarefa ${job.id} falhou: ${err}`);
});

export { queue };
