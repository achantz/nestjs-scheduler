FROM node:14-alpine as development

WORKDIR /usr/src/app

COPY package*.json .

RUN npm i

COPY . .

RUN npm run build:runner

FROM node:14-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json .

RUN npm i

COPY . .

COPY --from=development /usr/src/app/dist/apps/runner ./dist

EXPOSE 3334/tcp

CMD ["node", "dist/main"]
