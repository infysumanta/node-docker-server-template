FROM node:20-alpine as base



# Build stage
FROM base as builder

WORKDIR /apps

COPY /apps/package*.json ./

RUN npm install

COPY /apps/tsconfig*.json ./
COPY /apps/src ./src

RUN npm run build

EXPOSE 3000