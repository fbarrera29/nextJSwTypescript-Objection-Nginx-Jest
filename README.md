# portfolio-website

This project is based on main technology i use at work (Express, Objection, NextJS, Nginx, ecc). All this services are managed by Docker.

## Environment Variables

To run this project, you will need to add the following environment variables: to your .env file

`MYSQL_ROOT_PASSWORD` is the mysql db passoword 

Also you will need to edit the ./api/config.js file like described in ./api/config-template.js

## Run Locally

Go to the project directory

```bash
  cd portfolio-website
```

Execute this line (docker is required)

```bash
  ./start.bat
```

## Roadmap

- Project and implement api and route
- Project and implement frontend using Chakra-ui and redux-toolkit
