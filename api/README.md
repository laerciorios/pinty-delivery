# API Pinty Delivery

This is the API for the Pinty Delivery application. It is built with Node.js and Express, and it uses PostgreSQL as the database.

## Running the API

To run the API, you can use Docker Compose. Make sure you have Docker and Docker Compose installed on your machine. Then, navigate to the `api` directory and run the following command:

```bash
# Navigate to the api directory
cd api

# Start the API using Docker Compose
docker-compose up -d
```

This will start the API and the PostgreSQL database in separate containers. The API will be accessible at `http://localhost:3333`, and the database will be accessible at `localhost:5432`.
