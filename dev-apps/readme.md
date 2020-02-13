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
3. run `docker-compose up` on the terminal ( we will talk about docker compose next lesson )
4. you should see the server logs running on the terminal
5. connect to your localhost:27017 from mongo client

Note using docker compose based on the docker-compose.yml
i am using a image version wich applied the authentication  'bitnami/mongodb:latest'

## Homework
1. Create DB named MarketManagement
2. create 2 collections: products, countries
3. insert data into countries - from rest api
4. insert data into products: { name, id , category, price}
5. run a query on countries which result all the countries from region: Asia
6. run a query on countries which result all the countries flags with population over then 100000
7. run a query on countries that updates only the population with the relevant value


# Docker and more

docker ps - list all the running containers
docker images - list all the images
docker volume create --name=mongodata - create volume   
 run --name mongo-container -v mongodata:/data/db -d -p 27017:27017 mongo - run image named mongo and expose 27017 to the host

 run --name mongo-container2 -v mongodata:/data/db -d -p 27017:27017 mongo

 https://blog.jeremylikness.com/blog/2018-12-27_mongodb-on-windows-in-minutes-with-docker/


