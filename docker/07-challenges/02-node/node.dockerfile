FROM node:alpine

WORKDIR /app

COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' entrypoint.sh
RUN chmod +x entrypoint.sh

COPY . .

EXPOSE 3000

ENTRYPOINT [ "./entrypoint.sh" ]

CMD [ "yarn", "start" ]