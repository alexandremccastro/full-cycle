FROM node:16.20

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8000

ENTRYPOINT [ "npm", "run", "start" ]
