## 📋 Sumário

- [📋 Sumário](#📋-sumário)
- [🔥 Como executar](#🔥-como-executar)
- [👀 Observações](#👀-observações)
- [✨ Desafios concluídos](#✨-critérios-para-vencer)

## 🔥 Como executar

Execute o seguinte comando no terminal para rodar o projeto com o Docker.

```bash
docker-compose up --build
```

#

Depois disso, abra Postman e faça a seguinte requisição.

Método: POST

URL: http://localhost:3000/v1/ocr/cnh

Body:

Type: form-data

KEY: cnh -> VALUE: {imagem da sua cnh}

## 👀 Observações

Depois da request feita, a api adicionará ela na fila. Quando processada, será retornado uma mensagem no terminal sinalizando que a tarefa foi concluída e a imagem será salva no diretório (possível ver pela CLI do docker) .

## ✨ Desafios concluídos

- [x] `Fork` do repositório e `Pull Request` com a tentativa de solução do desafio
- [x] `README.md` com instruções de como rodar a aplicação
- [x] `Dockerfile` e `docker-compose.yml`
- [x] `Módulo Fila e API`
- [ ] `Módulo OCR`
