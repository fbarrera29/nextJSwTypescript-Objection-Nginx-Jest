@echo off
set /p environment=Choose build environment (dev/test/prod): 

set override=./compose-override/dev/

if %environment%==test (
    set override=./compose-override/test/
)

if %environment%==prod (
    set override=./compose-override/prod/
)

docker compose down && docker-compose -p portfolio-webiste --env-file .env -f docker-compose.yml -f %override%docker-compose.override.yml up --build 