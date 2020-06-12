# mongodata
# docker run -d -p 27017:27017 -v mongodata:/data/db --name=mymongo mongodb:3.3

build:
	@ docker-compose build

start:
	@ docker-compose up