FROM node:lts-alpine AS frontend_yarn

WORKDIR /app

COPY ./yarn.lock ./package.json ./webpack.config.js ./tsconfig.json ./

RUN yarn install --frozen-lockfile

COPY ./src-front/ ./src-front/

RUN yarn build

FROM composer:latest AS backend_composer

WORKDIR /app

COPY ./composer.json ./composer.lock ./

RUN composer install \
 --ignore-platform-reqs \
 --no-interaction \
#  --no-plugins \
 --no-scripts \
 --prefer-dist 

FROM php:8-fpm-alpine AS backend_php

RUN echo -e 'Building PHP extensions... \n'   \
    && apk add --no-cache --update --virtual buildDeps build-base autoconf; apk add libzip-dev \
    && docker-php-ext-configure zip; docker-php-ext-install zip \
    && apk del buildDeps build-base autoconf \
 && echo -e '...PHP Extensions OK \n'

COPY ./system/backend/php-custom.ini /usr/local/etc/php/php.ini

WORKDIR /app

COPY --from=frontend_yarn /app/public/build/ ./public/build
COPY --from=backend_composer /app/vendor/ ./vendor/

COPY . .

FROM caddy:alpine AS server_caddy

COPY ./system/server/Caddyfile /etc/caddy/Caddyfile

WORKDIR /app

COPY --from=backend_php /app/public/ ./public
# COPY --from=frontend_yarn /app/public/build/ ./public/build