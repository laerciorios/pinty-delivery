FROM node:22 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:22-alpine

WORKDIR /app

COPY --from=build /app ./

EXPOSE 3333

CMD ["npm", "run", "start"]