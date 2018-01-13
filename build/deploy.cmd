call npm install
call npm run build

call cd %DEPLOYMENT_TARGWTS%
for /F "delims=" %%i i ('dir /b') do (rmdir "%%i" /s/q || del "%%i" /s/q)

xcopy /d %DEPLOYMENT_SOURCE%\dist\* %DEPLOYMENT_TARGWTS%\dist /s /i
xcopy /d %DEPLOYMENT_SOURCE%\index.html %DEPLOYMENT_TARGWTS%\index.html*
xcopy /d %DEPLOYMENT_SOURCE%\server.js %DEPLOYMENT_TARGWTS%\server.js*
xcopy /d %DEPLOYMENT_SOURCE%\package.json%DEPLOYMENT_TARGWTS%\package.json*
xcopy /d %DEPLOYMENT_SOURCE%\web.config* %DEPLOYMENT_TARGWTS%\web.config*

call npm install --only=production
echo Deployed.
