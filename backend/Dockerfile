FROM node:14-alpine

WORKDIR /usr/src/api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENV NODE_ENV='production'

CMD ["node", "./src/server.js"]