FROM whatwedo/yarn:v2.2

# for urlencode / urldecode
RUN apk add python3

COPY . /gitlab-add-mr-note

WORKDIR /gitlab-add-mr-note

RUN yarn install
RUN yarn build
RUN node dist/index.js -h
RUN chmod +x add-note
RUN cp add-note /usr/local/bin

WORKDIR /
