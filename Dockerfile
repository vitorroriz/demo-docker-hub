FROM node:17-alpine3.12

WORKDIR /app

COPY package.json .
COPY index.js .

RUN npm install

CMD node index.js
