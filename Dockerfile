FROM alpine
MAINTAINER Kevin Monk, kevin@sardjv.co.uk
RUN apk update && apk upgrade && \
    apk add yarn && \
    apk add ruby ruby-dev libc-dev

CMD sleep 100000000
