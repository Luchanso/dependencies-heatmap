#/bin/sh

exit 1
# PLEASE DON'T RUN THIS SCRIPT, THIS IS NOT SECURE

# Tempory script
docker rm --force dp-backend
docker build . --tag dependencies-heatmap-backend:0.1.0
docker run -d -p 4000:4000 --name dp-backend dependencies-heatmap-backend:0.1.0
docker cp ~/.ssh dp-backend:/root/.ssh
docker exec -it dp-backend sh -c "chown root ~/.ssh/config & chmod 700 -R ~/.ssh/"
docker exec -it dp-backend sh -c "ssh -vT git@github.com"
docker exec -it dp-backend /bin/sh
