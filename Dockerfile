# Define from what image we want to build from. Here we will use the latest LTS (long term support) version 8 of node
FROM node:8
# app directory
RUN mkdir /backend
ADD . /backend
WORKDIR /backend
# Install app dependencies
COPY package*.json ./
RUN npm i
EXPOSE 8080
# command to run your app using CMD
CMD ["npm", "start"]
