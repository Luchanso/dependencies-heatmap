FROM node:14.4-alpine

WORKDIR /src

COPY . .
RUN yarn install --freeze-lock

EXPOSE 4000

CMD ["yarn", "start"]
