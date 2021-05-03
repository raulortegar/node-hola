FROM node:lts-alpine3.10

RUN apk add --no-cache git;

RUN git clone https://github.com/raulortegar/node-hola/

WORKDIR /node-hola

RUN npm install;

EXPOSE 3000

CMD ["node", "index.js"];
