#!/bin/sh

docker run \
  --rm -it \
  -p 3000:3000 \
  -p 4000:4000 \
  -v "$(pwd):/app" \
  -w /app \
  node:8 \
  npm start

