FROM node:20.10.0-alpine3.19 AS builder

WORKDIR /build
COPY apps/web apps/web
COPY libs libs
COPY packages packages
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY nx.json nx.json
COPY project.json project.json
COPY tsconfig.base.json tsconfig.base.json

RUN npm ci --ignore-scripts \
    && npx nx run web:build:production \
    && npm prune --production \
    && npm cache clean --force

FROM node:20.10.0-alpine3.19
RUN apk update \
    && apk upgrade \
    && apk --no-cache add tzdata

RUN cp /usr/share/zoneinfo/Asia/Taipei /etc/localtime
RUN echo "Asia/Taipei" >  /etc/timezone

WORKDIR /app

ENV NODE_ENV production
ENV HOST=0.0.0.0

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /build/dist/apps/web/.next/standalone ./
COPY --from=builder /build/dist/apps/web/.next/static ./dist/apps/web/.next/static
COPY --from=builder /build/dist/apps/web/public ./apps/web/public

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD [ "node", "apps/web/server.js" ]

####################

# FROM nginx:1.25.3-alpine3.18 AS packer
# ARG ENV_PATH
# ENV ENV_PATH=$ENV_PATH
# RUN apk update \
#     && apk upgrade \
#     && apk add --no-cache tzdata \
#     && rm -rf /var/cache/apk/*

# RUN cp /usr/share/zoneinfo/Asia/Taipei /etc/localtime
# RUN echo "Asia/Taipei" >  /etc/timezone

# WORKDIR /usr/share/nginx/html

# COPY --from=builder /build/dist/apps/web .
# COPY apps/web/nginx.conf /etc/nginx/conf.d
# RUN rm /etc/nginx/conf.d/default.conf
# # copy env files, last arg is destination

# CMD ["nginx", "-g", "daemon off;"]
