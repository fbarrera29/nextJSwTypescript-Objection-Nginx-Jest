# nextJS/typescript/redux-toolkit/objection/express/nginx/jest/docker project

This project is based on main technology i use at work (Express, Objection, NextJS, Nginx, ecc). All this services are managed by Docker.

## Environment Variables

To run this project, you will need to add the following environment variables: to your .env file

`MYSQL_ROOT_PASSWORD` is the mysql db password

Also you will need to create and edit the ./api/config.js file like described in ./api/config-template.js and the ./app/config.js file like described in ./app/config-template.js

## Run Locally

Go to the project directory and execute this line (docker is required)

```bash
  ./start.bat
```

When the project is running execute this line to create and seed tables

```bash
  ./scripts/reset_db.bat
```

## Roadmap

- Implement all test using jest
