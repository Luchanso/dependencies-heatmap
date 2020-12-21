#!/bin/sh
cd packages/backend
docker rm --force dp-backend
docker rm --force dp-client
docker build . --tag dependencies-heatmap-backend:0.1.1
docker run -d -p 4000:4000 --name dp-backend dependencies-heatmap-backend:0.1.1
docker cp ~/.ssh dp-backend:/root/.ssh
docker exec -it dp-backend sh -c "chown root ~/.ssh/config & chmod 700 -R ~/.ssh/"
cd ../client
yarn install --freeze-lock
yarn build --production
docker build . --tag dependencies-heatmap-client:0.1.0
docker run -d -p 8080:80 --name dp-client dependencies-heatmap-client:0.1.0
