FROM node:18-alpine

# Install bash
RUN apk add --no-cache bash

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000
COPY ./docker-entrypoint.sh /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD npm run dev


