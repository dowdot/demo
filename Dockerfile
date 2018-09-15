FROM node:alpine

COPY ./node /node

WORKDIR /node

RUN yarn

ENTRYPOINT ["node", "index.js"]
