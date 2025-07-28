  ## Setup Instructions

  ### 1. Start MongoDB Database

  From the root of the project:

  ```bash
  docker-compose up -d
  ```
 ### 2. Start Client

  ```bash
  cd client
  npm install
  npm run dev
  ```
  ### 3. Start Server

  ````bash
  cd server
  npm install
  nodemon server.ts
  ````

 ###  Restart Database

  To reset the database:
  ````bash
  docker-compose down -v
  docker-compose up -d
  ```