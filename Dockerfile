FROM alpine:3.18

RUN apk add nodejs

COPY client /client
COPY server.js /
COPY package.json /

RUN apk add nodejs
RUN echo https://dl-cdn.alpinelinux.org/alpine/v$(cut -d'.' -f1,2 /etc/alpine-release)/community/ >> /etc/apk/repositories

RUN apk update
RUN apk add npm

RUN apk add npm
RUN npm install
EXPOSE 3000

CMD node server.js

