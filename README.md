# Dependencies Manager

## Use as docker
### Backend
```
docker pull luchanso/dependencies-heatmap-backend:0.1.0
```

### Client
```
docker pull uchanso/dependencies-heatmap-client:1.0.1
docker run -d -p 8080:80 --name dp-client dependencies-heatmap-client:1.0.0 --env BACKEND_URL=http://localhost:4000 BASENAME=/
```

Where
BACKEND_URL - path for GraphQL server, by default `http://localhost:4000`
BASENAME - [app location](https://reactrouter.com/web/api/BrowserRouter/basename-string), by default is root `/`
All environments is optional

## Development

```
git pull git@github.com:Luchanso/dependencies-heatmap.git
cd dependencies-heatmap
yarn install
yarn start
```

[Project](https://github.com/Luchanso/dependencies-heatmap/projects/1)

Screenshots:
![screenshot](https://user-images.githubusercontent.com/2098777/59965357-79b0ea00-9515-11e9-81c0-a0dc40830f42.png)
