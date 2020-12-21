# Build backend
# docker build . --tag dependencies-heatmap-backend:0.1.1
# docker tag dependencies-heatmap-backend:0.1.1 luchanso/dependencies-heatmap-backend:0.1.1
# docker push luchanso/dependencies-heatmap-backend:0.1.1

# Run & stop backend
# docker run -d -p 4000:4000 --name dp-backend dependencies-heatmap-backend:0.1.1
# docker rm --force dp-backend

# --------------------------------

# Build client
# yarn install --freeze-lock
# yarn build --production
# docker build . --tag dependencies-heatmap-client:1.0.0
# docker tag dependencies-heatmap-client:1.0.0 luchanso/dependencies-heatmap-client:1.0.0
# docker push luchanso/dependencies-heatmap-client:1.0.0

# Run & stop client
# docker run -d -p 8080:80 --name dp-client dependencies-heatmap-client:1.0.0
# docker rm --force dp-client
