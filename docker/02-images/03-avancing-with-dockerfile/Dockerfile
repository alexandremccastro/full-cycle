FROM nginx:latest

WORKDIR /usr/share/nginx/html

RUN apt-get update && apt-get install vim -y

# copy from html folder to workdir
COPY ./html  .