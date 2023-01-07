@echo off

docker exec personal_page_app bash -c "npm run lint"
docker exec personal_page_api bash -c "npm run lint"

