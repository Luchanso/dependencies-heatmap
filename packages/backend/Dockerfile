FROM node:14.14-alpine

WORKDIR /src

COPY . .
RUN yarn install --freeze-lock
RUN apk add git openssh
# ATTENTION: DON'T UNCOMMENT - THIS IS NOT SECURE!
# RUN ssh-keygen -t rsa -N "" -f ~/.ssh/id_rsa -b 4096 -C "bla@gmail.com"
# RUN ssh-add -K ~/.ssh/id_rsa
# RUN ssh -vT git@github.com
# RUN ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no user@host

CMD ["yarn", "start"]
