FROM node:20.10.0-alpine3.19 AS builder

WORKDIR /build
COPY . .

RUN npm ci \
    && npx nx run web:build:production \
    && npm prune --production \
    && npm cache clean --force

FROM node:20.10.0-alpine3.19
RUN apk update \
    && apk upgrade \
    && apk add tzdata

RUN cp /usr/share/zoneinfo/Asia/Taipei /etc/localtime
RUN echo "Asia/Taipei" >  /etc/timezone

WORKDIR /app

ENV NODE_ENV production
ENV HOST=0.0.0.0

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /build/dist/apps/web/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /build/dist/apps/web/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /build/dist/apps/web/.next/static ./dist/apps/web/.next/static
COPY --from=builder --chown=nextjs:nodejs /build/dist/apps/web/public ./apps/web/public

USER nextjs

EXPOSE 3000

ENV PORT 3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD HOSTNAME="0.0.0.0" node apps/web/server.js

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
