@echo off
set SPRING_DATA_MONGODB_URI=mongodb+srv://ABDEEPESH:A%%40b_deepesh27102005@cluster0.zouwsq7.mongodb.net/enterprise_b2b_platform?retryWrites=true^&w=majority
echo Starting backend with MongoDB URI...
echo SPRING_DATA_MONGODB_URI=%SPRING_DATA_MONGODB_URI%
mvn spring-boot:run
pause
