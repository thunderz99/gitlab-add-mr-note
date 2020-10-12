FROM whatwedo/yarn:v2.2

# for urlencode / urldecode
RUN apk add python3

COPY other-pjt-dependencies /other-pjt-dependencies

WORKDIR /other-pjt-dependencies

RUN yarn install

RUN mkdir /gitlab-add-mr-note

WORKDIR /gitlab-add-mr-note

COPY package.json /gitlab-add-mr-note

RUN yarn install

COPY . /gitlab-add-mr-note

RUN yarn build
RUN node dist/index.js -h
RUN chmod +x add-note
RUN cp add-note /usr/local/bin

WORKDIR /
