FROM node:20-alpine as frontend-stage

LABEL maintainer="NandoAgustinBravo"

WORKDIR /var/www/html/frontend

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "dev" ]


