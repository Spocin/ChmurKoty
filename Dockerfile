FROM node:22-alpine
WORKDIR /usr/src/app
COPY ./ ./

RUN chown node:node ./
USER node

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

ENTRYPOINT ["node", "ChmurKoty/server/server.mjs"]