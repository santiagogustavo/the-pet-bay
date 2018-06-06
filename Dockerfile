FROM node:8

WORKDIR /app

COPY . /app

RUN yarn install \
  && yarn build

CMD ["yarn", "serve"]
