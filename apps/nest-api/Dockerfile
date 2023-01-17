FROM node:16.13.0-bullseye as builder

RUN apt-get update && \
    apt-get -yq install openssl git && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package.json .

RUN yarn

COPY . ./

RUN yarn prisma-generate

RUN yarn nx run nest-api:build --configuration=production


FROM node:16.13.0-bullseye-slim as runner

ENV API_DATABASE_URL=postgres://myuser:mypassword@localhost:5432/sandbox-db

USER node

WORKDIR /usr/src/app

COPY --chown=node:node --from=builder /usr/src/app/dist/apps/nest-api .
COPY --chown=node:node --from=builder /usr/src/app/node_modules node_modules

ARG PORT=4444
ENV PORT=${PORT}

EXPOSE $PORT

CMD [ "node", "main.js"]