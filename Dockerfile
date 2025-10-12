FROM node:20.19.0-alpine AS builder

RUN mkdir /app && mkdir /app/data

COPY . /app

RUN cd /app && npm install && npm run build

FROM node:20.19.0-alpine

RUN mkdir /app

COPY --from=builder /app/build /app/build
COPY --from=builder /app/package.json /app/package-lock.json /app/

RUN cd /app && \
  npm install --production

WORKDIR /app

CMD ["node", "build/index.js"]
