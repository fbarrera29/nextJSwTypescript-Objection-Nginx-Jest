@echo off

REM (ex: to use this script on cmd write .\test.bat order or .\test.bat to test all unit test)

set files=npm test

if NOT "%1%" == "" (
    set files=npm test %1.test.js
)

docker exec -it personal_page_test bash -c "%files%"
