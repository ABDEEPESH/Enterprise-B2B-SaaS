@echo off
setlocal enabledelayedexpansion

echo Setting MongoDB URI...
set "SPRING_DATA_MONGODB_URI=mongodb+srv://ABDEEPESH:A%%40b_deepesh27102005@cluster0.zouwsq7.mongodb.net/enterprise_b2b_platform?retryWrites=true&w=majority"

echo MongoDB URI: %SPRING_DATA_MONGODB_URI%
echo.
echo Starting Spring Boot application...

REM Try to find Maven in common locations
set MAVEN_CMD=
if exist "C:\Users\91916\AppData\Local\Temp\vscode-maven-91916\bin\mvn.cmd" (
    set "MAVEN_CMD=C:\Users\91916\AppData\Local\Temp\vscode-maven-91916\bin\mvn.cmd"
) else if exist "C:\Program Files\Apache\Maven\bin\mvn.cmd" (
    set "MAVEN_CMD=C:\Program Files\Apache\Maven\bin\mvn.cmd"
) else (
    echo Maven not found in common locations
    echo Please ensure Maven is installed and in PATH
    pause
    exit /b 1
)

echo Using Maven: !MAVEN_CMD!
call "!MAVEN_CMD!" spring-boot:run

pause
