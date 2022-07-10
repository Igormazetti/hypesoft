FROM node:16-alpine

WORKDIR /app

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

COPY package*.json .

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]