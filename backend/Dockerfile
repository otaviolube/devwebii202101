FROM node:14

WORKDIR /usr/src/api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "./src/server.js"]