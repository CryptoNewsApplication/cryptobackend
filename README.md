# Getting started

## Run locally on Docker
```
# dev mode, local volume exposes, nodemon configured
docker-compose up crypto-backend-dev

# prod mode
docker-compose up crypto-backend-prod
```


## Deploy on Google Cloud App Engine

Configure Google Cloud SDK locally, follow instructions [here](https://cloud.google.com/sdk/docs/quickstart-macos) to setup a new project and run the commands below.

```
# set project id
gcloud config set project <id>

# deploy
gcloud app deploy
```

## Ping APIs on Google cloud
[API link](https://cryptocurrency-news-213821.appspot.com/news) https://cryptocurrency-news-213821.appspot.com/news