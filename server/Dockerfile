FROM node:10
USER root
EXPOSE 4000

# Creating folder inside the docker
RUN mkdir -p /usr/src/app

# Setting the working directory inside the docker to
WORKDIR /usr/src/app/

# Copy the Content from workSpace to the working directory
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm install
RUN npm install nodemon -g
COPY . /usr/src/app



CMD [ "npm", "start"]



