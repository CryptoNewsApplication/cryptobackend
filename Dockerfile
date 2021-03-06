# Define from what image we want to build from. Here we will use the latest LTS (long term support) version 8 of node
FROM node:8
# set environment
ENV NODE_ENV=production
RUN echo $NODE_ENV
# app directory
RUN mkdir /backend
ADD . /backend
WORKDIR /backend
# Install app dependencies
COPY package*.json ./
RUN npm i
EXPOSE 9000
# command to run your app using CMD
CMD ["npm", "start"]
