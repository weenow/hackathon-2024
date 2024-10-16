FROM node:18.16.1-alpine

WORKDIR /usr/src/app

# Copiar apenas os arquivos necessários
COPY package.json yarn.lock ./

# Instalar dependências
RUN yarn

# Copiar todo o resto do código fonte
COPY . .

# Comando padrão para iniciar a aplicação
CMD ["node", "src/index.js"]