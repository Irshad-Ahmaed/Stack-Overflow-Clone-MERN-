FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=cache,target=/app/.npm \
    npm set cache /app/.npm && \
    npm ci --omit=build

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]