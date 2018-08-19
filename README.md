# Getting started

## Run locally on Docker
```
# dev mode, local volume exposes, nodemon configured
docker-compose up crypto-backend-dev

# prod mode
docker-compose up crypto-backend-prod
```


## Deploy on Google Cloud App Engine

Configure Google Cloud SDK locally, follow instructions here.

```
# set project id
gcloud config set project <id>

# deploy
gcloud app deploy
```