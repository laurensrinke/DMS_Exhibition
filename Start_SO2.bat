timeout 20


@echo off

cd "%~dp0\html\"
node "%~dp0\html\app.js"
Pause
exit
