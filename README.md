# To start local mongodb database

From the root of the project: 

docker-compose up -d

# To restart database

From root of the project: 

docker-compose down -v
docker-compose up -d

# To start client

```
````
```
cd client 
npm install
npm run dev
````
``

# To start server

```
cd server 
npm install
nodemon server.ts
````



