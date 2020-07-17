#!/bin/sh

echo 'basepath: RUN'
cd /usr/share/nginx/html
index=`cat ./index.html`
default_public_url='.'
public_url=${PUBLIC_URL:-.}
echo ${index//__PUBLIC_URL_PLACEHOLDER__/$public_url} > ./index.html

echo 'basepath: DONE'
