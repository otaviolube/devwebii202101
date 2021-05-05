FROM node:14-alpine

WORKDIR /usr/src/api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "./src/server.js"]