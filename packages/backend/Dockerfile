FROM node:14.4-alpine

WORKDIR /src

COPY . .
RUN yarn install --freeze-lock

CMD ["yarn", "start"]
