FROM nginx:1.19.1-alpine

COPY replace-basepath.sh /usr/bin/
COPY build /usr/share/nginx/html

CMD /usr/bin/replace-basepath.sh && nginx -g 'daemon off;'
