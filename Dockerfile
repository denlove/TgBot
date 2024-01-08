FROM node:21.5.0

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

COPY . .

CMD npm start
