# gitlab-add-mr-note

Add a note to gitlab mr used in gitlab CI/CD



## Usage

```bash

$ export GITLAB_HOST="https://your.gitlab.url"
$ export GITLAB_TOKEN=your_gitlab_personal_token

# use docker run
$ docker run -e GITLAB_HOST -e GITLAB_TOKEN thunderz99/gitlab-add-mr-note add-note --project org/pjt-name --mr 20 "my comments"

# use shell in docker
$ docker run -e GITLAB_HOST -e GITLAB_TOKEN --rm --name add-note -it thunderz99/gitlab-add-mr-note tail -f /dev/null

$ docker exec -it add-note sh

# in docker
$ add-note --project org/pjt-name --mr 20 "my comments"

```



## How to build this Image


```
# build thunderz99/gitlab-add-mr-note:for-react
$ docker-compose build

# push to docker hub
$ docker-compose push
```