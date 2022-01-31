# Storefront Backend Project

## Project Setup
### Run The following steps in order.
- `npm install` To install project dependencies
- `docker-compose up` To spin up the docker container for Postgres.
- `docker ps` This will give you the container ID. (Copy this ID).
- `docker exec it <containerID> bash` This will open the cli for the container.
- In the newly opened terminal run `psql -U postgres`.
- Now run `CREATE USER <username> WITH PASSWORD '<password>';`This will create the user you will need in the .env file.
- Running `\l` , you should see a db called 'storefront' and 'storefront_test'.
- `\c storefront GRANT ALL PRIVILEGES ON DATABASE storefront TO <your username>;` Run this command again for 'storefront_test'.
- Now create a `.env` file with the following structure. And replace the '*******' with your username and password.
```
POSTGRES_HOST=localhost
POSTGRES_DB=storefront
POSTGRES_DB_TEST=storefront_test
POSTGRES_PORT=2345
POSTGRES_USER=********
POSTGRES_PASSWORD=********
SALT_ROUNDS=10
BCRYPT_SECRET=kapowkapow42
TOKEN_SECRET=secrettokentokensecret
ENV=dev
```
- Note that the container is being forwarded to PORT 2345, To avoid any collision if you have a local installation of Postgres.
- Now run the migrations with `db-migrate up`.
- Run the server using `npm run start`.
- You are now ready to start testing the endpoints.

## Testing
### `db-migrate --env test up && cross-env ENV=test jasmine-ts && db-migrate --env test reset`
- You can run the tests using `npm run test` and it will run the script above.
- It runs the migrations on the storefront_test DB  and then it sets the environment to test using the cross-env package. It then runs all the tests using Jasmine, finally it resets the migrations to clean up the test DB.

## Endpoints
- All the Endpoints are listed in the `REQUIREMENTS.md` file along with all the actions needed.