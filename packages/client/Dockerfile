FROM node:14.11-alpine

WORKDIR /src

COPY ./build .
RUN yarn install --freeze-lock

CMD ["yarn", "start"]
