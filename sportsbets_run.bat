@ECHO OFF
ECHO starting dotnet server
cd .\SportsBetsAPI\SportsBetsServer
call dotnet run
EXIT
ECHO server started
cd ..\..\
ECHO starting angular spa
cd SportsBetsSPA
call npm start
cd ..
PAUSE