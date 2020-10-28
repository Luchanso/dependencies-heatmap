FROM node:14.15-alpine
WORKDIR /src
COPY . .
RUN yarn install --freeze-lock
RUN yarn build --production

# TODO: придумать что делать с зависимостью в виде epxress
# FROM node:14.11-alpine
# WORKDIR /src
# COPY --from=builder /src/node_modules .
# COPY --from=builder /src/package.json .
# COPY --from=builder /src/build .
# COPY --from=builder /src/static.js .

CMD ["yarn", "start-production"]
