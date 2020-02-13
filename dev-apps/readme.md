# install mongo
https://www.mongodb.com/download-center/community?jmp=docs


# install mongo client
https://robomongo.org/download

# lunch mongo db server on windows (from installation -  exe)
go to : C:\Program Files\MongoDB\Server\4.0\bin
execute mongod.exe

Open Robo 3T
and connect to the server


# Run MongoDB on Docker for windows
1. install Docker Desktop
2. go to Dev-apps folder
3. run docker-compose up ( we will talk about docker compose next lesson )
4. connect to your localhost:27017 from mongo client

Note using docker compose based on the docker-compose.yml




# Docker and more

docker ps - list all the running containers
docker images - list all the images
docker volume create --name=mongodata - create volume   
 run --name mongo-container -v mongodata:/data/db -d -p 27017:27017 mongo - run image named mongo and expose 27017 to the host

 run --name mongo-container2 -v mongodata:/data/db -d -p 27017:27017 mongo

 https://blog.jeremylikness.com/blog/2018-12-27_mongodb-on-windows-in-minutes-with-docker/


