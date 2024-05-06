# Hackathon 2024

Seja bem-vindo ao Hackathon 2024 da **WeeNow** 🚀. A seguir, você encontrará todas as informações necessárias para participar do evento.

## 📌 O que preciso fazer?

Seguir as instruções abaixo e ler atentamente a descrição do desafio que será divulgado na data do evento.

1. Ler todos os tópicos deste documento;
2. Executar as instruções para participar do evento mecionadas abaixo;
3. Aguardar o desafio ser divulgado.

> As duplas serão formadas no dia do evento de forma aletória.

> As pessoas que não quiserem formar duplas, poderão participar individualmente.

> Estou remoto. Poderei participar? Sim, poderá participar remotamente.

## 📄 Tópicos que serão abordados

- Node.js
- Express
- Background Job Processing
- OCR
- Docker

Bibliotecas recomendadas para auxiliar no desenvolvimento do desafio:

- [tesseract.js](https://www.npmjs.com/package/tesseract.js)
- [bullmq](https://bullmq.io/)
- [opencv-js](https://www.npmjs.com/package/@techstark/opencv-js)
- [jimp](https://www.npmjs.com/package/jimp)

## 📜 Como participar?

No dia **09/05/2024, às 16:00h**, será divulgado aqui neste `README.md` o desafio. Após a leitura e entendimento do contexto, siga as instruções abaixo para participar:

- Faça um `fork` deste repositório;
- Clone o repositório para a sua máquina;
- Crie uma `branch` com o seu **nome** ou **nome da dupla**;
- Copie e renomeie a pasta `template` para `/participants/nome-da-dupla`;
- Execute o desafio e faças os `commits` na sua `branch`;
- Faça os `push` para o seu repositório;
- Assim que finalizar o desafio, crie um `pull request` para este repositório com a sua solução;
- Agora é só aguardar a avaliação.

## 🚨 Como deve ser a entrega?

Confome mencionado acima, a entrega deve ser feita via `pull request` para este repositório.

A aplicação deve rodar em um container Docker. Para isso, você deve criar um `Dockerfile` e um `docker-compose.yml` para subir a aplicação.

> Na pasta do seu projeto, você deve criar um arquivo `README.md` com as instruções de como rodar a aplicação.

## ✨ Critérios para vencer

Para vencer o Hackathon 2024 🚀, você precisará pontuar em cada critério abaixo:

1. 🐙 `Fork` do repositório e `Pull Request` com a tentativa de solução do desafio; **(5 pontos)**
2. 📜 `README.md` com instruções de como rodar a aplicação; **(5 pontos)**
3. 🐋 `Dockerfile` e `docker-compose.yml` para subir a aplicação; **(5 pontos)**
4. 🎖️ `Módulo Fila e API` do desafio entregue e funcional; **(30 pontos)**
5. 🤴 `Módulo OCR` do desafio entregue e funcional; **(55 pontos)**

Cada critério terá uma quantidade específica de pontos conforme mencionado anteriormente em cada item. O valor máximo de pontuação será de `100 pontos`. A equipe/pessoa que obtiver a maior pontuação será a vencedora.

> Em caso de empate, será avaliado a funcionalidade da aplicação e qualidade de código.

## 🔥 O desafio

### Módulo Fila e API: 

Implementar uma API que receba um arquivo de imagem e faça o upload para um serviço de fila usando. O serviço de fila deve processar a imagem através do **Módulo OCR** e retornar o objeto no formato **JSON** extraído da imagem.

Dicas:

- Utilize os endpoints já criados no arquivo `src/routes.js` para efetuar o upload da imagem e inserir na fila de processamento;
- Utilize o `bullmq` para gerir a fila de processamento;

### Módulo OCR: 

Implementar um serviço que receba o arquivo de imagem, faça o processamento da imagem e retorne o **JSON** com o objeto para o **Módulo File e API**.

Dicas:

- Faça o processamento da imagem para remover ruídos e preservar a qualidade dos textos;
- Converta a imagem para escala de cinza (isso ajuda a melhorar a qualidade da imagem e leitura das ROI's);
- Faça a extração dos textos utilizando ROI (Region of Interest)

- Utilize o `tesseract.js` para processar a imagem e extrair o texto;
- Utilize o `opencv-js` para processar a imagem e extrair o objeto;

- Não esqueça de fazer a detecção de faces.

> Utilize os endpoints já criados no arquivo `src/routes.js` para implementar a solução.

> Não precisa implementar nada além do que foi solicitado.

> Veja a imagem de arquitetura em `./architecture.png`.

