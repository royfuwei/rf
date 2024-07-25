FROM node:20.10.0-alpine3.19 AS builder

WORKDIR /build
COPY apps/gql apps/gql
COPY libs libs
COPY packages packages
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY nx.json nx.json
COPY project.json project.json
COPY tsconfig.base.json tsconfig.base.json

RUN npm ci --ignore-scripts \
    && npx nx run gql:build:production \
    && npm prune --production \
    && npm cache clean --force


FROM node:20.10.0-alpine3.19 AS runtime

RUN addgroup -S nonroot \
    && adduser -S nonroot -G nonroot

USER nonroot

RUN apk update \
    && apk upgrade \
    && apk --no-cache add tzdata

RUN cp /usr/share/zoneinfo/Asia/Taipei /etc/localtime
RUN echo "Asia/Taipei" >  /etc/timezone

WORKDIR /app

ENV HOST=0.0.0.0
ENV APP_GQL_PORT=8002

COPY --from=builder /build/dist/apps/gql ./dist
COPY --from=builder /build/node_modules ./node_modules
# copy env files, last arg is destination
COPY [ "package.json", "./" ]

CMD [ "node", "dist/main.js" ]
